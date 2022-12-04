import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { User } from '@prisma/client';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { CreateLocationDto } from './dto/create-location.dto';
import { LocationService } from './location.service';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  async create(
    @Body() { place_id }: CreateLocationDto,
    @CurrentUser() { id }: User,
  ) {
    return this.locationService.create(place_id, id);
  }

  @Get('my/records')
  findMyAll(@CurrentUser() { id }: User) {
    return this.locationService.findMyAll(id);
  }

  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.locationService.findById(id);
  }

  @Get('place_id/:place_id')
  findByPlaceId(
    @Param('place_id') place_id: string,
    @Query('day') day: string,
    @Query('month') month: string,
    @Query('year') year: string,
  ) {
    const date = `${day} ${month} ${year}`;
    return this.locationService.findByPlaceId(place_id, date);
  }
}
