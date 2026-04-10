import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule, type TypeOrmModuleOptions } from '@nestjs/typeorm'
import path from 'path'
import type { DataSourceOptions } from 'typeorm'
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get<DataSourceOptions['type']>('DATABASE_TYPE'),
          host: configService.get<string>('DATABASE_HOST'),
          port: configService.get<number>('DATABASE_PORT'),
          username: configService.get<string>('DATABASE_USERNAME'),
          password: configService.get<string>('DATABASE_PASSWORD'),
          database: configService.get<string>('DATABASE_DATABASE'),
          entities: [path.join(__dirname, '/../modules/**/*.entity{.ts,.js}')],
          synchronize: true,
        } as TypeOrmModuleOptions
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class SharedModule {}
