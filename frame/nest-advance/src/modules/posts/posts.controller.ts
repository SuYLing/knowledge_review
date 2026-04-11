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
import { Roles } from 'src/decorators/role.decorator'
import { RolesGuard } from 'src/guards/roles.guard'
import { JwtAuthGuard } from '../auth/guards/jwt.guard'
import { CreatePostDto } from './dtos/create.dto'
import { UpdatePostDto } from './dtos/update.dto'
import { PistExistPipe } from './pipes/post.pipe'
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
  @Roles(['admin'])
  @UseGuards(RolesGuard)
  @Get()
  async findAll() {
    return await this.postsService.findAll()
  }
  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.postsService.findOne(id)
  }
  @Put('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id', ParseIntPipe, PistExistPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    await this.postsService.update(id, updatePostDto)
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.postsService.delete(id)
  }
}
