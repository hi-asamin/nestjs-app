import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ResponseHistory } from 'src/entities/response-history.entity';
import { ResponseHistoryRepository } from 'src/repositories/response-history.repository'
import { CreateResponseHistoryDto } from 'src/interfaces/response-history.dto';

@Injectable()
export class ResponseHistoryService {
  constructor(
    @InjectRepository(ResponseHistory)
    private readonly responseHistoryRepository: ResponseHistoryRepository
  ) {}

  async findAll(): Promise<ResponseHistory[]> {
    return await this.responseHistoryRepository.find()
  }

  async customQuery(): Promise<ResponseHistory[]> {
    return await this.responseHistoryRepository.customQuery('test')
  }

  /**
   * 名前を指定して応対履歴を取得する
   *
   * @param name - 応対履歴名
   * @returns {ResponseHistory} 指定した名前の応対履歴
   */
  async findByName(name: string): Promise<ResponseHistory> {
    const responseHistory = await this.responseHistoryRepository.findOne({ where: { name } });
    return responseHistory;
  }

  // 応対履歴を追加する
  async insert(responseHistory: CreateResponseHistoryDto): Promise<void> {
    await this.responseHistoryRepository.insert({
      ...responseHistory
    });
    return;
  }
}
