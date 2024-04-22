import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Catalogo } from "./catalogo.entity";

@Entity()
export class Genero {
    @OneToOne(() => Catalogo) @JoinColumn()
    @PrimaryGeneratedColumn()
    id_genero: number

    @Column({ length: 100 })
    descricao: string;
}


// Table Genero {
//       id_genero int [pk, increment]
//       descricao varchar(20)
//     }