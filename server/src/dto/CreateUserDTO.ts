import { IsEmail, IsString, IsDefined, Length } from 'class-validator';

export class CreateUserDto {
  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  @IsDefined({ message: 'Username is required' })
  @IsString({ message: 'Username format is inavalid' })
  @Length(3, 25, {
    message: 'Username length must be between 3 to 25 characters',
  })
  username: string;

  @IsDefined({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid Email formay' })
  email: string;

  @IsDefined({ message: 'Password is required' })
  @Length(3, 25, { message: 'Password length must be between 3 to 25 characters' })
  password: string;
}
