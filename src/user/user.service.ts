import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllUsers(userCurrent: User) {
    if (!userCurrent.admin) {
      throw new UnauthorizedException(
        'Restricted information for this type of user',
      );
    }
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        cpf: true,
      },
    });

    return users;
  }

  async create(createUserDto: CreateUserDto) {
    const userAlreadyExists = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: createUserDto.email },
          { cpf: String(createUserDto.cpf) },
        ],
      },
    });

    if (userAlreadyExists) {
      throw new BadRequestException('User already exists!');
    }

    const passwordHash = await hash(createUserDto.password, 10);

    const data = {
      ...createUserDto,
      password: passwordHash,
      phone: String(createUserDto.phone),
      cpf: String(createUserDto.cpf),
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
