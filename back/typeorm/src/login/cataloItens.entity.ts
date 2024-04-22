import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genero } from "./genero.entity";

@Entity()
export class Catalogo{
    @PrimaryGeneratedColumn()
    id_catalogo: number

    @OneToOne(() => Genero) @JoinColumn()
    id_genero: number;


    @Column({length: 40})
    descricao: string;

    @Column({length: 100})
    iamgem: string;

}

// Table CataloItens{
//       id_CatalogoIten int [pk, increment]
//       id_Catalogo int [ref: > Catalogo.id_catalogo]
//       descricao varchar(20)
//       
//     }