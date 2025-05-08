import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly JWT_SECRET = process.env.JWT_SECRET || '1234567890';

  generateToken(payload: any) {
    if (!this.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign(payload, this.JWT_SECRET, { expiresIn: '1h' });
  }

  verifyToken(token: string) {
    try {
      return jwt.verify(token, this.JWT_SECRET);
    } catch {
      return null;
    }
  }
};