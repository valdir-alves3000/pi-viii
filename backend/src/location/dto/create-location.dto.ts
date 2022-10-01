import { IsUUID } from 'class-validator';

export class CreateLocationDto {
  @IsUUID()
  place_id: string;
}
