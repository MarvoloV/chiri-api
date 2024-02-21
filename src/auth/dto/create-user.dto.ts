import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  @MinLength(5)
  full_name: string;
}
