import { BadRequestException, Injectable } from '@nestjs/common';
import { checkAdmin } from 'src/admin/check-admin';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlaceService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ address, city, name, state }: CreatePlaceDto, admin: boolean) {
    checkAdmin(admin);

    const place = await this.prisma.place.create({
      data: {
        address,
        city,
        name,
        state,
      },
    });

    return place;
  }

  async findAll(admin: boolean) {
    checkAdmin(admin);

    const places = await this.prisma.place.findMany();

    return places;
  }

  async findById(id: string, admin: boolean) {
    checkAdmin(admin);

    const place = await this.prisma.place.findUnique({ where: { id } });

    if (!place) {
      throw new BadRequestException('Place not found!');
    }

    return place;
  }

  async update(
    id: string,
    { address, city, name, state }: UpdatePlaceDto,
    admin: boolean,
  ) {
    checkAdmin(admin);

    const place = await this.prisma.place.update({
      where: { id },
      data: {
        address,
        city,
        name,
        state,
      },
    });

    return place;
  }

  async remove(id: string, admin: boolean) {
    checkAdmin(admin);

    const place = await this.prisma.place.findUnique({ where: { id } });

    if (!place) {
      throw new BadRequestException('Place not found');
    }

    await this.prisma.place.delete({ where: { id } });

    return {
      message: 'Place successfully deleted',
    };
  }
}
