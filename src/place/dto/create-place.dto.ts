import { IsString } from 'class-validator';
import { Place } from '../entities/place.entity';

export class CreatePlaceDto extends Place {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  state: string;
}
