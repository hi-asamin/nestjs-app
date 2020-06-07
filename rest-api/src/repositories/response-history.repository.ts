import { Repository, EntityRepository } from 'typeorm';

import { ResponseHistory } from 'src/entities/response-history.entity';

@EntityRepository(ResponseHistory)
export class ResponseHistoryRepository extends Repository<ResponseHistory> {

  async customQuery(name: string): Promise<ResponseHistory[]> {
    const selectQuery = `
      select
        *
      from
        response_history
      where
        name = $1`;
    const args = [ name ];
    return this.query(selectQuery, args);
  }
}
