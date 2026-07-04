import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(private readonly configService: ConfigService) {}

  getUsers() {
    console.log(this.configService.get<string>('JWT_ACCESS_SECRET'));
    console.log(this.configService.get<string>('JWT_ACCESS_EXPIRATION'));
    return [
      {
        name: 'Nayem Ahmed',
        profession: 'Software Developer',
        focus: 'NestJs',
      },
    ];
  }
}
