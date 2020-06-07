import { Controller, Get, Post, Body, HttpCode, HttpStatus, HttpException, Param } from '@nestjs/common'
import { ResponseHistoryService } from 'src/services/response-history/response-history.service'
import { ResponseHistory } from 'src/entities/response-history.entity'
import { CreateResponseHistory } from 'src/interfaces/create-response-history.interface';

@Controller('response-history')
export class ResponseHistoryController {
  constructor(private readonly responseHistoryService: ResponseHistoryService) {}

  @Get()
  async findAll(): Promise<ResponseHistory[]> {
    return this.responseHistoryService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createResponseHistory: CreateResponseHistory) {
    const user = await this.responseHistoryService.findByName(createResponseHistory.name)
    if (user) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: `${createResponseHistory.name}' is already taken.`,
        },
        409,
      );
    }
    try {
      await this.responseHistoryService.insert(createResponseHistory);
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal server error.',
        },
        500,
      );
    }
    return;
  }
}
