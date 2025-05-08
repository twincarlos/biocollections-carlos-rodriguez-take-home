import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  birthday: string;

  @Prop({ required: true, enum: ['Checking', 'Savings'] })
  type: string;

  @Prop({ required: true })
  account: string;

  @Prop({ default: 0 })
  balance: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);