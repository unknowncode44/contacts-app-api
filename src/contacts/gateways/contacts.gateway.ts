import { 
  OnGatewayConnection, 
  OnGatewayDisconnect, 
  OnGatewayInit, 
  SubscribeMessage, 
  WebSocketGateway,
  WebSocketServer 
} from '@nestjs/websockets';

import { Contact } from '../models/contact';
import { CONTACTS_ACTIONS } from '../actions/contact.actions';

@WebSocketGateway({
  namespace: '/contacts'
})
export class ContactsGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit{

  @WebSocketServer() private server;
  
  afterInit() {
      console.log('socket inicializado');
  }

  handleConnection(client: any) {
      console.log(`cliente ${client} conectado al server`);
  }

  handleDisconnect(client: any) {
    console.log(`cliente ${client} se desconecto del server`);
  }

  contactCreated(contact: Contact){
    console.log('CONTACTS-GATEWAY: Contacto creado', contact);
    this.server.emit(CONTACTS_ACTIONS.LIVE_CREATED, contact);
  }

  contactUpdated(contact: Contact){
    console.log('CONTACTS-GATEWAY: Contacto actualizado', contact);
    this.server.emit(CONTACTS_ACTIONS.LIVE_UPDATED, contact);
  }

  contactDeleted(id: number){
    console.log('CONTACTS-GATEWAY: Contacto eliminado', id);
    this.server.emit(CONTACTS_ACTIONS.LIVE_DELETED, id);
  }


}
