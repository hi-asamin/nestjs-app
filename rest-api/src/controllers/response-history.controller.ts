import { Controller, Get, Post, Put, Body, HttpCode, HttpStatus, HttpException, Param } from '@nestjs/common'
import { ResponseHistoryService } from 'src/services/response-history.service'
import { ResponseHistory } from 'src/entities/response-history.entity'
import { CreateResponseHistoryDto, UpdateResponseHistoryDto } from 'src/interfaces/response-history.dto';

@Controller('response-history')
export class ResponseHistoryController {
  constructor(private readonly responseHistoryService: ResponseHistoryService) {}

  @Get()
  async findAll(): Promise<ResponseHistory[]> {
    return this.responseHistoryService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createResponseHistory: CreateResponseHistoryDto) {
    const responseHistory = await this.responseHistoryService.findByName(createResponseHistory.name)
    if (responseHistory) {
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

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateResponseHistory: UpdateResponseHistoryDto) {
    
    return updateResponseHistory;
  }
}
