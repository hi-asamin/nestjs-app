import { Controller, Get, Post, Body, HttpCode, HttpStatus, HttpException, Param } from '@nestjs/common'
import { CreateUserDto } from './create-user.dto'
import { UsersService } from './users.service'
import { User } from '../entity/user.entity'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.index()
  }

  @Get(':name')
  async findOne(@Param('name') name: string): Promise<User> {
    return this.usersService.findByName(name)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto) {
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
}
