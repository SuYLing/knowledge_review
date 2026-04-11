import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt.guard'
import { CreatePostDto } from './dtos/create.dto'
import { UpdatePostDto } from './dtos/update.dto'
import { PostsService } from './posts.service'

@Controller('posts')
@UseGuards(JwtAuthGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPostDto: CreatePostDto) {
    return await this.postsService.create(createPostDto)
  }
  @Get()
  async findAll() {
    return await this.postsService.findAll()
  }
  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.postsService.findOne(id)
  }
  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return await this.postsService.update(id, updatePostDto)
  }
  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.postsService.delete(id)
  }
}
