import { Get, Post } from '@nestjs/common';
import { Param } from '@nestjs/common';

import { Controller } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
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
  @Post()
  public createPosts() {
    return 'You sent a post request to posts endpoint';
  }
}
