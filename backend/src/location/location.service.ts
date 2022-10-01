import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(place_id: string, user_id: string) {
    const location = await this.prisma.location.create({
      data: {
        place_id,
        user_id,
      },
    });

    return location;
  }

  async findAll() {
    const locations = await this.prisma.location.findMany();

    return locations;
  }

  async findById(id: string) {
    const location = await this.prisma.location.findUnique({ where: { id } });

    if (!location) {
      throw new BadRequestException('Location not found!');
    }

    return location;
  }

  async findByPlaceId(place_id: string) {
    const locations = await this.prisma.location.findMany({
      where: { place_id },
      orderBy: {
        created_at: 'desc',
      },
    });

    return locations;
  }
}
