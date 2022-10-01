import { Body, Controller, Post } from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateSecurityCodeDto } from './dto/create-security-code';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @IsPublic()
  @Post()
  createAlert(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.createAlert(createMessageDto);
  }

  @IsPublic()
  @Post('security_code')
  checkPhoneNumber(@Body() { code, phone }: CreateSecurityCodeDto) {
    return this.messageService.checkPhoneNumber({ code, phone });
  }
}
