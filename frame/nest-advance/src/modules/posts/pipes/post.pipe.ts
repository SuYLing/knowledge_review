import { NotFoundException, type PipeTransform } from '@nestjs/common'
import  { PostsService } from '../posts.service'

export class PistExistPipe implements PipeTransform {
  constructor(private readonly postService:PostsService)
  {}
  transform(value: any) {
    try{
      this.postService.findOne(value)
    }
    catch(_){
      throw new NotFoundException(`不存在 id 为 ${value} 的 Post`)
    }
    return value
  }
}
