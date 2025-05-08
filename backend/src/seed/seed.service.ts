import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from '../clients/schemas/client.schema';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  async onModuleInit() {
    const count = await this.clientModel.countDocuments();

    if (count === 0) {
      console.log('🌱 Seeding clients collection...');
      await this.clientModel.insertMany([
        {
            name: "Alicia Marie Carter",
            birthday: "09/15/1993",
            type: "Savings",
            account: "0596779403556",
            balance: 9876.54
          },
          {
            name: "David Nguyen",
            birthday: "04/22/1987",
            type: "Checking",
            account: "1234567890123",
            balance: 8901.23
          },
          {
            name: "Samantha Lee Thompson",
            birthday: "12/07/1975",
            type: "Savings",
            account: "9876543210987",
            balance: 7890.12
          },
          {
            name: "Marcus Jordan Pierce",
            birthday: "06/30/1990",
            type: "Checking",
            account: "1029384756102",
            balance: 7654.32
          },
          {
            name: "Isabella Ramirez",
            birthday: "11/10/2002",
            type: "Checking",
            account: "5647382910564",
            balance: 6543.21
          },
          {
            name: "Ethan James Holloway",
            birthday: "02/05/1981",
            type: "Savings",
            account: "1928374655192",
            balance: 5432.10
          },
          {
            name: "Chloe Bennett",
            birthday: "07/18/1999",
            type: "Checking",
            account: "3748291056374",
            balance: 4567.89
          },
          {
            name: "Michael Alan Rivera",
            birthday: "01/23/1985",
            type: "Savings",
            account: "8473625142847",
            balance: 3210.98
          },
          {
            name: "Natalie Ortiz",
            birthday: "05/03/1978",
            type: "Checking",
            account: "2938475610293",
            balance: 2678.90
          },
          {
            name: "Jason Christopher Blake",
            birthday: "10/12/2000",
            type: "Savings",
            account: "9182736450918",
            balance: 2345.67
          },
          {
            name: "Emily Grace Kim",
            birthday: "03/29/1989",
            type: "Checking",
            account: "7362810495736",
            balance: 1987.65
          },
          {
            name: "Liam Patterson",
            birthday: "08/27/1995",
            type: "Savings",
            account: "1827364509182",
            balance: 1234.56
          },
          {
            name: "Olivia Danielle Ross",
            birthday: "12/19/1982",
            type: "Checking",
            account: "5647382910564",
            balance: 140.31
          }
      ]);
      console.log('Clients seeded!');
    }
  }
}