import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as joi from 'joi'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      validationSchema: joi.object({
        PORT: joi.string().default('3000'),
      }),
      load: [],
    }),
  ],
})
export class GlobalModule {}
