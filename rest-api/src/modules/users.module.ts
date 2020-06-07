import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { LoggerModule } from 'src/modules/logger.module';
import { UsersController } from '../controllers/users.controller'
import { UsersService } from '../services/users.service'
import { Users } from '../entities/users.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Users]),LoggerModule],
  exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
