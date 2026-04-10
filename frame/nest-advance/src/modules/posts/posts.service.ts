import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import type { Repository } from 'typeorm'
import type { CreatePostDto } from './dtos/create.dto'
import type { UpdatePostDto } from './dtos/update.dto'
import { Post } from './entities/post.entity'

@Injectable()
export class PostsService {
  private posts = []
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}
  create(post: CreatePostDto) {
    const newPost = this.postsRepository.create(post)
    return newPost
  }
  async findAll() {
    return this.postsRepository.find({})
  }
  async findOne(id: number) {
    return this.postsRepository.findOne({
      where: {
        id,
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
