import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAllUsers(@CurrentUser() user: User) {
    return this.userService.findAllUsers(user);
  }

  @Get(':id')
  async findByIdORCPF(@Param('id') cpf: string) {
    return this.userService.findByIdORCPF(cpf);
  }

  @Patch('/turn-admin/:id')
  async update(@Param('id') id: string, @CurrentUser() { admin }: User) {
    return this.userService.turnAdmin(id, admin);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() { admin }: User) {
    return this.userService.remove(id, admin);
  }
}
