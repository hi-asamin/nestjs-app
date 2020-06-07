import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res): void {
    const response = this.appService.getHello();
    res.json(response);
  }

  @Post()
  async create(@Body() body): Promise<void> {
    console.log(JSON.stringify(body));
  }
}
