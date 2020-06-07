import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUsersDto {
  @IsNotEmpty({ message: '名前は必須入力です' })
  @IsString()
  readonly name: string
}

export class UpdateUsersDto {
  @IsString()
  readonly name: string
}