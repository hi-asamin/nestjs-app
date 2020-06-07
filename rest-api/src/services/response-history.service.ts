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

  /**
   * 応対履歴の一覧を取得する
   * 
   * @returns {ResponseHistory} 応対履歴一覧
   */
  async findAll(): Promise<ResponseHistory[]> {
    return await this.responseHistoryRepository.find()
  }

  /**
   * カスタムクエリーのサンプル
   * 引数に指定した名前の情報を取得する
   */
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

  /**
   * 応対履歴を登録する
   * 
   * @param {CreateResponseHistoryDto} responseHistory - 登録内容
   */
  async insert(responseHistory: CreateResponseHistoryDto): Promise<void> {
    await this.responseHistoryRepository.insert({
      ...responseHistory
    });
    return;
  }
}
