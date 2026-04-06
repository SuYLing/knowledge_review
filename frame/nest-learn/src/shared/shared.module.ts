import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
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
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          global: true,
          signOptions: {
            expiresIn: '12h',
          },
          secret: configService.get<string>('JWT_SECRET', { infer: true }),
        }
      },
    }),
    PrismaModule,
  ],
})
export class SharedModule {}
