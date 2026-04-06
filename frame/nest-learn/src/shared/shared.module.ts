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
        JWT_SECRET: joi.string().default('123yuling'),
      }),
    }),
    // JwtModule.registerAsync({
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     global: true,
    //     signOptions: {
    //       expiresIn: '12h',
    //     },
    //     secret: configService.get<string>('JWT_SECRET') ?? '123yuling',
    //     secretOrPrivateKey: configService.get<string>('JWT_SECRET') ?? '123yuling',
    //   }),
    // }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || '123yuling',
      signOptions: {
        expiresIn: '12h',
      },
    }),
    PrismaModule,
  ],
})
export class SharedModule {}
