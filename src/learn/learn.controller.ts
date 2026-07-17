import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({
  host: ':platform.localhost',
})
export class LearnController {
  @Get()
  learnController(@HostParam('platform') platform: string) {
    return `This is our dynamic "${platform}" controller`;
  }
}
