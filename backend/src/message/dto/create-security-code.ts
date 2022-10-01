import { IsMobilePhone, IsString, MaxLength } from 'class-validator';

export class CreateSecurityCodeDto {
  @IsMobilePhone()
  @MaxLength(11)
  phone: string;

  @IsString()
  code: string;
}
