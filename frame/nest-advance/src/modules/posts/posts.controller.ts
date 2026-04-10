import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CreatePostDto } from './dtos/create.dto'
import { UpdatePostDto } from './dtos/update.dto'
import { PostsService } from './posts.service'

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto)
  }
  @Get()
  findAll() {
    return this.postsService.findAll()
  }
  @Get('/:id')
  findOne() {
    return this.postsService.findAll()
  }
  @Put('/:id')
  update(@Param('id', ParseIntPipe) id: number, updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto)
  }
  @Get('/id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id)
  }
}
