import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true, default: Date.now })
  timestamp: Date;

  @Prop({ required: true, default: false })
  read: boolean;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);