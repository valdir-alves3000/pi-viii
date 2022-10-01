import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { SecurityCode } from './entities/security-code.entity';

const TWILIO_ID = process.env.TWILIO_ID;
const TWILIO_AUTHTOKEN = process.env.TWILIO_AUTHTOKEN;

const client = require('twilio')(TWILIO_ID, TWILIO_AUTHTOKEN);

@Injectable()
export class MessageService {
  checkPhoneNumber({ code, phone }: SecurityCode) {
    client.messages
      .create({
        body: `Seu codigo de segurança para registrar seu telefone no sistema: \n *${code}*`,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:+55${phone}`,
      })
      .then()
      .done();
  }

  createAlert({ address, city, date, name, phone, state }: CreateMessageDto) {
    const message = `
    O sistema notou pessoas infectadas no(a) *${name}* \n
    Situado em *${city}/${state}* \n
    Endereço: ${address} \n
    no mesmo dia que você visitou o local ${date}. \n

    *Nosso profissinal recomenda uma visita ao médico o mais rápido possível*.
    `;

    client.messages
      .create({
        body: message,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:+55${phone}`,
      })
      .then()
      .done();

    return;
  }
}
