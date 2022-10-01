import {
  IsDateString,
  IsMobilePhone,
  IsString,
  MaxLength,
} from 'class-validator';
import { Message } from '../entities/message.entity';

export class CreateMessageDto extends Message {
  @IsMobilePhone()
  @MaxLength(11)
  phone: string;

  @IsString()
  address: string;

  @IsString()
  name: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsDateString()
  date: Date;
}
