import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import { Contact } from '../models/contact'

// creamos la entidad para manejar los eventos del contacto en la base de datos
// usamos el decorador Entity que nos ofrece la libreria TypeORM (https://www.npmjs.com/package/typeorm)

@Entity()
export class ContactEntity implements Contact {
    
    //definimos la clave primaria usando el decorador de TypeORM PrimaryGeneratedColumn
    
    @PrimaryGeneratedColumn()
    id: number;

    // definimos las columnas
    @PrimaryColumn()
    @Column({
        nullable: false,
        length: 500,
        unique: true
    })
    name: string;

    @PrimaryColumn()
    @Column({
        unique: true,
        nullable: false
    })
    email: string

    @PrimaryColumn()
    @Column({
        unique: true,
        nullable: false
    })
    phone: string

    // ademas usamos los decoradores createdDateColumn y updatedDateColumn para los meta-datos de la entidad

    @CreateDateColumn()
    createdAt;

    @UpdateDateColumn()
    updatedAt;



}