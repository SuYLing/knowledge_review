import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './modules/auth/auth.module'
import { ProfileModule } from './modules/profile/profile.module'
import { SharedModule } from './shared/shared.module'
@Module({
  imports: [SharedModule, AuthModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
