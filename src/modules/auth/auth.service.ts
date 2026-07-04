import { Inject, Injectable } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import authEnv from '../../config/auth.env';

@Injectable()
export class AuthService {
  constructor(
    @Inject(authEnv.KEY)
    private authConfig: ConfigType<typeof authEnv>,
  ) {}

  userLogin() {
    console.log('User service: ', this.authConfig.JWT_ACCESS_SECRET);
    return {
      status: 'Login successful',
    };
  }
}
