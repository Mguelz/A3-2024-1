import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Login } from "./login.entity";

@Entity()
export class Perfil {
    @OneToOne(() => Login) @JoinColumn()
    @PrimaryGeneratedColumn()
    id_perfil: string;

    @Column({ length: 100 })
    descricao: string;
}


// Table Perfil {
//       id_login int [primary key, ref: > login.id_login]
//       nome varchar(40)
//       funcionario_cliente varchar(1)
//       dadosPessoais varchar(1)
//     }