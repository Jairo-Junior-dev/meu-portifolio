import type CardsProps from "../interface/Card";
import TypeProject from "../header/card/Categoria";
import Status from "../header/card/Status";
import IMAGE_PSJ from "../../assets/image.png"

const pathsImage: string[] = [IMAGE_PSJ]; 
const cards: CardsProps[] = [
  {
    nome: "Projeto Servidor Java",
    categoriaProjeto: [TypeProject.JAVA , TypeProject.SERVIDOR],
    image: pathsImage[0],
    descricao:"Projeto com java puro e sockets .....",
    status:Status.FEITO 
  },
  {
    nome: "Projeto Biblioteca",
    image: pathsImage[0],
    categoriaProjeto: [TypeProject.SPRING_BOOT],
    status:Status.FAZENDO
  },
  {
    nome: "Projeto Babilonia",
    image: pathsImage[0],
    categoriaProjeto: [TypeProject.SPRING_BOOT],
    status:Status.FAZENDO
  },
  {
    nome: "Projeto Academia",
    image: pathsImage[0],
    categoriaProjeto: [TypeProject.SPRING_BOOT]
  },
  {
    nome: "Projeto TO-D0",
    image: pathsImage[0],
    categoriaProjeto: [TypeProject.SPRING_BOOT],
    status:Status.AFAZER
  }
];
  
export default cards;
