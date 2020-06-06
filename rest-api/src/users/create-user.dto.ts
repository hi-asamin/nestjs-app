import { User } from './user.interface'

export class CreateUserDto implements User {
  readonly name: string
}
