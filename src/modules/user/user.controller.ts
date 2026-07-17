import { Controller, Get, Header, Headers, Redirect } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  @Header('Cache-Control', 'no-cache')
  @Redirect('https://nestjs.com', 301)
  getUsers() {
    return this.userService.getUsers();
  }
}
