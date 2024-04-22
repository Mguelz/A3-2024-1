import { Column, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { CarrinhoCabeca } from './carrinhoCabeca.entity';

@Entity()
export class CarrinhoIten {
  @ManyToOne(() => CarrinhoCabeca)
  @JoinColumn()
  id_carrinhoIten: number;

  @Column({ length: 7, precision: 2 })
  preco: number;

  @Column({ length: 3 })
  quantidade: number;
}

// Table carrinhoIten{
//       id_carrinho int [ref: > carrinhoCabeca.id_carrinho]
//       id_Catalogo int [ref: > Catalogo.id_catalogo]
//       id_CatalogoIten int [ref:> CataloItens.id_CatalogoIten]
//       preco_item numeric(7,2)
//       quantidade int(3)
//     }
