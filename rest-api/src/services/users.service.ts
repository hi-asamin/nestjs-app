import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UsersRepository } from 'src/repositories/users.repository'
import { CreateUsersDto, UpdateUsersDto } from 'src/interfaces/users.dto'
import { Users } from '../entities/users.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: UsersRepository
  ) {}

  async index(): Promise<Users[]> {
    return await this.userRepository.find()
  }

  // 指定された名前のユーザを検索する
  async findByName(name: string): Promise<Users> {
    const user = await this.userRepository.findOne({ where: { name } });
    return user;
  }

  // ユーザを追加する
  async insert(user: CreateUsersDto): Promise<void> {
    if (await this.findByName(user.name)) {
      return Promise.reject(new Error('User is already exists.'));
    }
    await this.userRepository.insert({
      ...user
    });
    return;
  }
}
