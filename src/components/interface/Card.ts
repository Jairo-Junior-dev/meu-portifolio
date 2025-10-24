import TypeProject from '../header/card/Categoria'
import type Status from '../header/card/Status';

export  default interface CardsProps {
  nome: string;
  index?:number
  categoriaProjeto: TypeProject[];
  image?: string| " ";
  descricao?:string;
  status?:Status;
}
