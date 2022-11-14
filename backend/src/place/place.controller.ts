import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PlaceService } from './place.service';

@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  create(
    @CurrentUser() { admin }: User,
    @Body() createPlaceDto: CreatePlaceDto,
  ) {
    return this.placeService.create(createPlaceDto, admin);
  }

  @Get()
  findAll(@CurrentUser() { admin }: User) {
    return this.placeService.findAll(admin);
  }

  @Get(':id')
  findById(@CurrentUser() { admin }: User, @Param('id') id: string) {
    return this.placeService.findById(id, admin);
  }

  @Patch(':id')
  update(
    @CurrentUser() { admin }: User,
    @Param('id') id: string,
    @Body() updatePlaceDto: UpdatePlaceDto,
  ) {
    return this.placeService.update(id, updatePlaceDto, admin);
  }

  @Delete(':id')
  remove(@CurrentUser() { admin }: User, @Param('id') id: string) {
    return this.placeService.remove(id, admin);
  }
}
