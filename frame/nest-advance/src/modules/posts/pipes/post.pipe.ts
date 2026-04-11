import { NotFoundException, type PipeTransform } from '@nestjs/common'
import { PostsService } from '../posts.service'

export class PistExistPipe implements PipeTransform {
  constructor(private readonly postService: PostsService) {}
  async transform(value: number) {
    try {
      await this.postService.findOne(value)
    } catch {
      throw new NotFoundException(`不存在 id 为 ${value} 的 Post`)
    }
    return value
  }
}
