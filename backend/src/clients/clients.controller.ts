import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './schemas/client.schema';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Get('search')
  search(
    @Query('name') name?: string,
    @Query('birthday') birthday?: string,
    @Query('type') type?: string,
  ): Promise<Client[]> {
    return this.clientsService.searchClients({ name, birthday, type });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Client> {
    const client = await this.clientsService.findOne(id);
    if (!client) {
      throw new Error(`Client with id ${id} not found`);
    }
    return client;
  }

  @Post()
  create(@Body() data: Client): Promise<Client> {
    return this.clientsService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Client>): Promise<Client> {
    const updatedClient = await this.clientsService.update(id, data);
    if (!updatedClient) {
      throw new Error(`Client with id ${id} not found`);
    }
    return updatedClient;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.clientsService.delete(id);
  }
}