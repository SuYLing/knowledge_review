import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import type { Repository } from 'typeorm'
import type { ResposeWithPainationMate } from '../common/interfaces/pagination'
import type { CreatePostDto } from './dtos/create.dto'
import type { FindPostsQueryDto } from './dtos/find-posts.dto'
import type { UpdatePostDto } from './dtos/update.dto'
import { Post } from './entities/post.entity'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}
  async create(post: CreatePostDto) {
    const newlyPost = this.postsRepository.create(post)
    return await this.postsRepository.save(newlyPost)
  }
  async findAll({
    limit,
    page,
    title,
  }: FindPostsQueryDto): Promise<ResposeWithPainationMate<Post>> {
    const offset = (page - 1) * limit
    const findPost = this.postsRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.author', 'author')
      .select([
        'post.id',
        'post.title',
        'post.content',
        'post.createAt',
        'author.id',
        'author.name',
        'author.email',
      ])
      .skip(offset) // 偏移量
      .take(limit)
    if (title && title?.trim()) {
      findPost.andWhere('post.title LIKE :title', { title: `%${title}%` })
    }
    const [posts, total] = await findPost.getManyAndCount()
    return {
      pagination: {
        total,
        totalPage: Math.ceil(total / limit),
        page,
        pageSize: limit,
        hasNextPage: page < total,
        hasPrevPage: page > 1,
      },
      data: posts,
    }
  }
  async findOne(id: number) {
    return await this.postsRepository.findOne({
      where: { id },
      relations: {
        author: true,
      },
    })
  }
  async delete(id: number) {
    return await this.postsRepository.delete(id)
  }
  async update(id: number, updatePost: UpdatePostDto) {
    return await this.postsRepository.update(id, updatePost)
  }
}
