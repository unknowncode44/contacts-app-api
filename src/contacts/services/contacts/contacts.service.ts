import { Injectable } from '@nestjs/common';
import { ContactEntity } from 'src/contacts/entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService} from '@nestjsx/crud-typeorm'
import { DeleteOneRouteOptions, CrudController, UpdateOneRouteOptions, CrudRequest } from '@nestjsx/crud';
import { ContactsGateway } from 'src/contacts/gateways/contacts.gateway';
import { DeepPartial } from 'typeorm';
import { Contact } from 'src/contacts/models/contact';



@Injectable()
export class ContactsService extends TypeOrmCrudService<ContactEntity> {
    constructor(
        @InjectRepository(ContactEntity) repo,
        private contactsGateway: ContactsGateway
    ){
        super(repo);
    }

    // async findAll(params): Promise<Contact[]>{
    //     return await this.repo.find()
    // }

    async createOne(req: CrudRequest, dto: DeepPartial<ContactEntity>): Promise<ContactEntity> {
        const contact = await super.createOne(req, dto)
        this.contactsGateway.contactCreated(contact)
        return contact
    }
    
}
