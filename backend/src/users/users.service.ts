import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user/user';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async onModuleInit() {
    const exists = await this.userModel.findOne({ email: 'admin@example.com' });
    if (!exists) {
      await new this.userModel({
        name: 'Admin',
        email: 'admin@example.com',
        password: 'password123'
      }).save();
      console.log('✅ Admin user seeded');
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email });
  }

  async comparePasswords(input: string, hash: string): Promise<boolean> {
    return bcrypt.compare(input, hash);
  }
}