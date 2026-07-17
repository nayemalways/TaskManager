import { Inject, Injectable } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import rootEnv from '../../config/root.env';

@Injectable()
export class UserService {
  constructor(
    @Inject(rootEnv.KEY)
    private readonly rootConfig: ConfigType<typeof rootEnv>,
  ) {}

  getUsers() {
    console.log(this.rootConfig.DATABASE_URL);
    console.log(this.rootConfig.PORT);
    return [
      {
        name: 'Nayem Ahmed',
        profession: 'Software Developer',
        focus: 'NestJs',
      },
    ];
  }
}
