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
    return await this.postsRepository.find({})
  }
  async findOne(id: number) {
    return await this.postsRepository.findOneBy({ id })
  }
  async delete(id: number) {
    return await this.postsRepository.delete(id)
  }
  async update(id: number, updatePost: UpdatePostDto) {
    return await this.postsRepository.update(id, updatePost)
  }
}
