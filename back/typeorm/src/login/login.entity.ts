import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Perfil } from './perfil.entity';
import { CarrinhoCabeca } from './carrinhoCabeca.entity';

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  id_login: number;

  @OneToOne(() => Perfil)
  @JoinColumn()
  id_perfil: string;

  @OneToOne(() => CarrinhoCabeca)
  @JoinColumn()
  id_carrinhoCabeca: number;

  @Column({ unique: true, length: 14 })
  cpf: string;

  @Column({ unique: true, length: 40 })
  email: string;

  @Column({ length: 60 })
  senha: string;

  @Column({ length: 40 })
  nome: string;

  @Column({ length: 40 })
  data_nascimento: Date;
}

function uniqu(target: Login, propertyKey: 'cpf'): void {
  throw new Error('Function not implemented.');
}
