import {
  OneToMany,
  PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne
} from 'typeorm';
import { Login } from './login.entity';

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
  @OneToMany(() => CarrinhoIten, (carrinhoIten) => carrinhoIten.carrinhoCabeca)
  // @JoinColumn()
  carrinhoItens: CarrinhoIten[];
}

// Tabela do Banco de dados:

// Table carrinhoCabeca {
//       id_carrinhoCabeca int [pk, increment]
//       desconto numeric(7,2)
//       id_login int [ref: > login.id_login]
//     }

// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////

@Entity()
export class CarrinhoIten {
  @ManyToOne(() => CarrinhoCabeca, (CarrinhoCabeca) => CarrinhoCabeca.carrinhoItens)
carrinhoCabeca: CarrinhoCabeca;
  
// @PrimaryGeneratedColumn()
  // id_carrinhoIten: number;

  @Column({ length: 7, precision: 2 })
  preco: number;

  @Column({ length: 3 })
  quantidade: number;
}




// Tabela do Banco de dados:

// Table carrinhoIten{
//       id_carrinho int [ref: > carrinhoCabeca.id_carrinho]
//       id_Catalogo int [ref: > Catalogo.id_catalogo]
//       id_CatalogoIten int [ref:> CataloItens.id_CatalogoIten]
//       preco_item numeric(7,2)
//       quantidade int(3)
//     }

