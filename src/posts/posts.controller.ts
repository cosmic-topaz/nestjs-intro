import { Body, Get, Post, Put, Patch, Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';

import { Controller } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(
    /*
     *  Injecting Posts Service
     */
    private readonly postsService: PostsService,
  ) {}

  /*
   * GET localhost:3000/posts/:userId
   */
  @Get(`{/:userId}`)
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  /**
   * Structure of request body to create a post
   * *******
   * title: string
   * postType: enum (post, page, story, series)
   * slug: string
   * status: enum (draft, scheduled, review, published)
   * content?: string
   * schema?: string
   * featuredImageUrl?: string
   * publishOn: Date
   * tags: string[]
   * metaOptions: [{key:value}]
   */
  @ApiOperation({
    summary: 'Creates a new blog post',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created successfully',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
  }

  @ApiOperation({
    summary: 'Update an existing blog post',
  })
  @ApiResponse({
    status: 201,
    description: 'A 200 response if the post is updated successfully',
  })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    console.log(patchPostDto);
  }
}
