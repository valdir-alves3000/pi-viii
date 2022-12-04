import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { hash } from 'bcrypt';
import { checkAdmin } from 'src/admin/check-admin';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async turnAdmin(id: string, admin: boolean) {
    checkAdmin(admin);

    const userCurrent = await this.prisma.user.findUnique({ where: { id } });

    if (!userCurrent) {
      throw new BadRequestException('User not found!');
    }

    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        admin: true,
      },
      select: {
        name: true,
        email: true,
        admin: true,
      },
    });

    if (!user) {
      throw new BadRequestException('User not found!');
    }

    return user;
  }

  async findByIdORCPF(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ id }, { cpf: id }],
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        locations: {
          orderBy: {
            created_at: 'desc',
          },
          select: {
            id: true,
            created_at: true,

            placeId: {
              select: {
                id: true,
                name: true,
                address: true,
                city: true,
                state: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new BadRequestException('User not found!');
    }

    return user;
  }

  async findAllUsers({ admin }: User) {
    if (!admin) {
      throw new UnauthorizedException(
        'Restricted information for this type of user',
      );
    }
    const users = await this.prisma.user.findMany({
      orderBy: {
        updated_at: 'desc',
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        cpf: true,
        locations: {
          select: {
            id: true,
            place_id: true,
            created_at: true,
          },
          orderBy: {
            created_at: 'desc',
          },
        },
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
          { phone: String(createUserDto.phone) },
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

  async remove(id: string, admin: boolean) {
    checkAdmin(admin);

    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    await this.prisma.user.delete({ where: { id } });

    return {
      message: 'User successfully deleted',
    };
  }
}
