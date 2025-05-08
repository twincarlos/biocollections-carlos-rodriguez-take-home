import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notification, NotificationDocument } from './schemas/notification/notification';
import { Model } from 'mongoose';

@Injectable()
export class NotificationsService {
    constructor(
        @InjectModel(Notification.name)
        private notificationModel: Model<NotificationDocument>,
    ) { }

    async findLatest(): Promise<Notification[]> {
        return this.notificationModel
            .find()
            .sort({ timestamp: -1 })
            .limit(5)
            .exec();
    }

    async create(content: string): Promise<Notification> {
        const notification = new this.notificationModel({ content });
        return notification.save();
    }

    async markAllAsRead(): Promise<number> {
        const result = await this.notificationModel.updateMany(
            { read: false },
            { $set: { read: true } }
        );
        return result.modifiedCount;
    }

    async delete(id: string): Promise<void> {
        await this.notificationModel.findByIdAndDelete(id);
    }
}
