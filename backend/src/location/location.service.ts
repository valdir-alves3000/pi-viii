import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(place_id: string, user_id: string) {
    const created_at = String(new Date(Date.now()).toUTCString());

    const location = await this.prisma.location.create({
      data: {
        place_id,
        user_id,
        created_at,
      },
    });

    return location;
  }

  async findMyAll(id: string) {
    const locations = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
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

    if (!locations) {
      throw new BadRequestException('Location not found!');
    }

    const res = locations.locations.map((location) => {
      return {
        id: location.id,
        name: location.placeId.name,
        address: location.placeId.address,
        city: location.placeId.city,
        state: location.placeId.state,
        created_at: new Date(location.created_at),
      };
    });

    return res;
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

  async findByPlaceId(place_id: string, date: string) {
    const locations = await this.prisma.location.findMany({
      where: {
        AND: [
          { place_id },
          {
            created_at: {
              contains: date,
            },
          },
        ],
      },
      orderBy: {
        created_at: 'desc',
      },
      select: {
        created_at: true,
        userId: {
          select: {
            name: true,
            phone: true,
            email: true,
          },
        },
        placeId: {
          select: {
            name: true,
            address: true,
            city: true,
            state: true,
          },
        },
      },
    });

    return locations;
  }
}
