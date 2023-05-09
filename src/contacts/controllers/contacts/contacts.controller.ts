import { Controller, Req, Get } from '@nestjs/common';
import { ContactsService } from 'src/contacts/services/contacts/contacts.service';
import { Request } from 'express'
import { ContactEntity } from 'src/contacts/entities/contact.entity';
import { Crud } from '@nestjsx/crud';
import { Contact } from 'src/contacts/models/contact';

@Crud({model: {type: ContactEntity}})
@Controller('contacts')
export class ContactsController {
    constructor(public readonly service: ContactsService){}
    // @Get()
    // findAll(@Req() request: Request): Promise<Contact[]>{
    // console.log(request.query);
    // return this.service.findAll(request.query) 
    // }
}
