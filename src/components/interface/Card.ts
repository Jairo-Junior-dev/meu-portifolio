import TypeProject from '../header/card/Categoria'
import type Status from '../header/card/Status';
import type Participante from './Participante';

export  default interface CardsProps {
  nome: string;
  link?:string;
  index?:number;
  categoriaProjeto: TypeProject[];
  image?: string| " ";
  integrantes?:Participante[]
  descricao?:string;
  status?:Status;
}
