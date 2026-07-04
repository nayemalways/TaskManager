import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import authEnv from '../../config/auth.env';

@Module({
  imports: [ConfigModule.forFeature(authEnv)],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
