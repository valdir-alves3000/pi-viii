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
        body: `Ola, utilize o código *${code}* para acessar o sistema. \nNunca forneça esse numero a terceiros. Ele é pessoal e intransferivel.`,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:+55${phone}`,
      })
      .then()
      .done();
  }

  createAlert({
    address,
    city,
    date,
    name,
    phone,
    state,
    user_name,
  }: CreateMessageDto) {
    const message = `
    Olá ${user_name}.
    \nO sistema notou pessoas infectadas no local *${name}* 
    \nSituado na cidade de *${city}-${state}* \nEndereço: ${address}. 
    \nNo mesmo dia que você visitou o local *${new Date(
      date,
    ).toLocaleDateString()}*.
    \n*Nosso profissinal recomenda uma visita ao médico o mais rápido possível*.
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
