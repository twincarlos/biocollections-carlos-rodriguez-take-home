import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from './schemas/client.schema';
import { Model } from 'mongoose';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name) private clientModel: Model<ClientDocument>) { }

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async findOne(id: string): Promise<Client | null> {
    return this.clientModel.findById(id).exec();
  }

  async create(data: Client): Promise<Client> {
    const client = new this.clientModel(data);
    return client.save();
  }

  async update(id: string, data: Partial<Client>): Promise<Client | null> {
    return this.clientModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.clientModel.findByIdAndDelete(id).exec();
  }

  async searchClients(filters: {
    name?: string;
    birthday?: string;
    type?: string;
  }): Promise<Client[]> {
    const query: any = {};

    if (filters.name) {
      query.name = { $regex: filters.name, $options: 'i' };
    }

    if (filters.birthday) {
      query.birthday = { $regex: filters.birthday, $options: 'i' };
    }

    if (filters.type) {
      query.type = filters.type;
    }

    return this.clientModel.find(query).exec();
  }
}