import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from './shared/prisma/prisma.service'

@Injectable()
export class AppService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}
  getHello(): string {
    return 'Hello World!'
  }
}
