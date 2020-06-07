import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './create-user.dto'

import { User } from '../entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async index(): Promise<User[]> {
    return await this.userRepository.find()
  }

  // 指定された名前のユーザを検索する
  async findByName(name: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { name } });
    return user;
  }

  // ユーザを追加する
  async insert(user: CreateUserDto): Promise<void> {
    if (await this.findByName(user.name)) {
      return Promise.reject(new Error('User is already exists.'));
    }
    await this.userRepository.insert({
      ...user
    });
    return;
  }
}
