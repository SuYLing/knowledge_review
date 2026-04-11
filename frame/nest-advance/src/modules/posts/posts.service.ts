import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import type { Repository } from 'typeorm'
import type { CreatePostDto } from './dtos/create.dto'
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
  async findAll() {
    return await this.postsRepository.find({
      relations: {
        author: true,
      },
      select: {
        author: {
          id: true,
          email: true,
          name: true,
          createAt: true,
        },
      },
    })
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
