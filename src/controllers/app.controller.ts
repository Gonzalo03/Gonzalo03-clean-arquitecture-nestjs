import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Post()
  async testOk() {
    return 'ok'
  }
}
