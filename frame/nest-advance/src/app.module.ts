import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ZodSerializerInterceptor, ZodValidationPipe } from 'nestjs-zod'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GlobalModule } from './global/global.module'
import { AuthModule } from './modules/auth/auth.module'
import { PostsModule } from './modules/posts/posts.module'
import { SharedModule } from './shared/shared.module'

@Module({
  imports: [GlobalModule, SharedModule, AuthModule, PostsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
  ],
})
export class AppModule {}
