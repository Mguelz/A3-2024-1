import {
  Entity,
  JoinColumn,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Login } from './login.entity';
import { CarrinhoIten } from './carrinhoIten.entity';

@Entity()
export class CarrinhoCabeca {
  // ta certo aqui?
  //@OneToOne(() => Login) @JoinColumn()
  @PrimaryGeneratedColumn()
  id_carrinhoCabeca: number;

  @OneToOne(() => Login)
  @JoinColumn()
  id_login: number;

  // terminamos aqui ///////////////////////////
  @OneToMany(() => CarrinhoIten)
  @JoinColumn()
  id_carrinhoIten: number;
}

// Table carrinhoCabeca {
//       id_carrinhoCabeca int [pk, increment]
//       desconto numeric(7,2)
//       id_login int [ref: > login.id_login]
//     }
