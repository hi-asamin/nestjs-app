import { Controller, Get, Post, Body, HttpCode, HttpStatus, HttpException, Param, Delete, Put } from '@nestjs/common'
import { Logger } from 'src/logger/logger.service'
import { CreateUsersDto, UpdateUsersDto } from 'src/interfaces/users.dto'
import { UsersService } from '../services/users.service'
import { Users } from '../entities/users.entity'

@Controller('users')
export class UsersController {
  constructor(
    private readonly logger: Logger,
    private readonly usersService: UsersService
  ) {}

  @Get()
  async findAll(): Promise<Users[]> {
    this.logger.log('info log sample');
    this.logger.debug('logging sample');
    this.logger.warn('warning log sample');
    this.logger.error('error log sample', 'hoge error');
    return this.usersService.index();
  }

  @Get(':name')
  async findOne(@Param('name') name: string): Promise<Users> {
    return this.usersService.findByName(name);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUsersDto) {
    const user = await this.usersService.findByName(createUserDto.name)
    if (user) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: `${createUserDto.name}' is already taken.`,
        },
        409,
      );
    }
    try {
      await this.usersService.insert(createUserDto);
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
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUsersDto) {
    await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param() param) {
    await this.usersService.delete(param.id);
  }
}
