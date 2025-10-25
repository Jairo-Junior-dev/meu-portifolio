import TypeProject from '../header/card/Categoria'
import type Status from '../header/card/Status';
import type Participante from './Participante';

export  default interface CardsProps {
  index?:number;
  nome: string;
  link?:string;
  categoriaProjeto: TypeProject[];
  image?: string| " ";
  integrantes?:Participante[]
  videoPath?:string
  descricao?:string;
  status?:Status;
}
