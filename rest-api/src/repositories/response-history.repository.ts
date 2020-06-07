import { Repository, EntityRepository } from 'typeorm';

import { ResponseHistory } from 'src/entities/response-history.entity';

@EntityRepository(ResponseHistory)
export class ResponseHistoryRepository extends Repository<ResponseHistory> {

  async customQuery(): Promise<ResponseHistory[]> {
    return this.find();
  }
}
