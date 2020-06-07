import { Repository, EntityRepository } from 'typeorm';

import { Users } from 'src/entities/users.entity';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
}
