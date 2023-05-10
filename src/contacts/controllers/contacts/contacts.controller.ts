import { Controller, Req, Get } from '@nestjs/common';
import { ContactsService } from 'src/contacts/services/contacts/contacts.service';
import { ContactEntity } from 'src/contacts/entities/contact.entity';
import { Crud } from '@nestjsx/crud';


@Crud({model: {type: ContactEntity}})
@Controller('contacts')
export class ContactsController {
    constructor(public readonly service: ContactsService){}

}
