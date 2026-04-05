import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import joi from 'joi'
import PrismaModule from './prisma/prisma.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        NODE_ENV: joi.string().valid('development', 'test', 'production').default('test'),
        DATABASE_URL: joi.string(),
        PORT: joi.number().default(3000),
      }),
    }),
    PrismaModule,
  ],
})
export class SharedModule {}
