import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const passwordHash = await hash(createUserDto.password, 10);

    const data = {
      ...createUserDto,
      password: passwordHash,
    };

    const createUser = await this.prisma.user.create({ data });

    return {
      ...createUser,
      password: undefined,
    };
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
