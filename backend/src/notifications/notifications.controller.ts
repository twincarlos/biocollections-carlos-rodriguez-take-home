import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    NotFoundException,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from './schemas/notification/notification';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) { }

    @Get()
    async findLatest(): Promise<Notification[]> {
        return this.notificationsService.findLatest();
    }

    @Post()
    async create(@Body('content') content: string): Promise<Notification> {
        return this.notificationsService.create(content);
    }

    @Patch()
    async markAllAsRead(): Promise<{ updatedCount: number }> {
        const updatedCount = await this.notificationsService.markAllAsRead();
        return { updatedCount };
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<{ message: string }> {
        await this.notificationsService.delete(id);
        return { message: 'Notification deleted' };
    }
}