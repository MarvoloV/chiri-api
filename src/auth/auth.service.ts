import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { randomInt, createHash } from 'crypto';
import { sendEmail } from './utils/emailSend';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      user.password = bcrypt.hashSync(this.generateRandomPassword(), 10);

      user.token_verify = this.generateHash(createUserDto.email);
      await this.userRepository.save(user);
      await sendEmail(user.email, user.token_verify);
      delete user.password;
      delete user.token_verify;
      return user;
    } catch (error) {
      this.handleDBerrors(error);
    }
  }
  async activateUser(id: string) {
    const user = await this.userRepository.findOneBy({ token_verify: id });
    if (!user) {
      throw new BadRequestException('token invalido');
    }
    user.isActive = true;
    await this.userRepository.save(user);
  }
  private generateRandomPassword() {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    for (let i = 0; i < 12; i++) {
      const randomIndex = randomInt(0, charset.length);
      password += charset[randomIndex];
    }

    return password;
  }
  private generateHash(email: string): string {
    const hash = createHash('sha256').update(email).digest('hex');
    return hash;
  }
  private handleDBerrors(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Revisar los logs del servidor');
  }
}
