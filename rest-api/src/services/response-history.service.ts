import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ResponseHistory } from 'src/entities/response-history.entity';
import { ResponseHistoryRepository } from 'src/repositories/response-history.repository'
import { CreateResponseHistory } from 'src/interfaces/create-response-history.interface';

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
    return await this.responseHistoryRepository.customQuery()
  }

  // 指定された名前の応対履歴を検索する
  async findByName(name: string): Promise<ResponseHistory> {
    const responseHistory = await this.responseHistoryRepository.findOne({ where: { name } });
    return responseHistory;
  }

  // 応対履歴を追加する
  async insert(responseHistory: CreateResponseHistory): Promise<void> {
    await this.responseHistoryRepository.insert({
      ...responseHistory
    });
    return;
  }
}
