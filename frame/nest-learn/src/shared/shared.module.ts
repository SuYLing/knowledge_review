import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
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
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '12h' },
    }),
    PrismaModule,
  ],
})
export class SharedModule {}
