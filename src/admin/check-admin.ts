import { UnauthorizedException } from '@nestjs/common';

export const checkAdmin = (admin: boolean) => {
  if (!admin) {
    throw new UnauthorizedException(
      'Restricted operation for this type of user',
    );
  }
};
