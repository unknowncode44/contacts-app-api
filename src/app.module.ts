import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: Number(process.env.POSTGRES_PORT) || 5432,
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB || 'contacts_db',
        entities: [`${__dirname}/**/entities/*.{js,ts}`],
        synchronize: true,
  }), ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
