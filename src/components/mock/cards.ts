import type CardsProps from "../interface/Card";
import TypeProject from "../header/card/Categoria";
import Status from "../header/card/Status";
import IMAGE_PSJ from "../../assets/image.png"

const mapImage = new Map();

mapImage.set("Imagem_PSJ",IMAGE_PSJ);
mapImage.set("Imagem_PSJ",IMAGE_PSJ);
mapImage.set("Imagem_PSJ",IMAGE_PSJ);

const pathsImage: string[] = [IMAGE_PSJ]; 


const cards: CardsProps[] = [
  {
    nome: "Projeto Servidor Java",
    categoriaProjeto: [TypeProject.JAVA , TypeProject.SERVIDOR],
    image: pathsImage[0],
    descricao:"Um servidor Http feito com java puro e WebSockets com o proposito de estuda programação avançada. ",
    status:Status.FEITO,
    integrantes:[{githubPath:"https://github.com/Jairo-Junior-dev" , nome:"Jairo Pinheiro"}] ,
    link:"https://github.com/Jairo-Junior-dev/java-servidor" 
    
  },
  {
    nome: "Projeto Biblioteca Front-end",
    image: pathsImage[0],
    categoriaProjeto: [TypeProject.SPRING_BOOT],
    integrantes:[{githubPath:"https://github.com/Jairo-Junior-dev" , nome:"Jairo Pinheiro"},
      {githubPath:"https://github.com/AlexRozaLopes",nome:"Alex Roza"}],
    status:Status.FAZENDO
  },
  {
    nome: "Projeto Babilonia Back-end",
    categoriaProjeto: [TypeProject.SPRING_BOOT],
    image: pathsImage[0],
     integrantes:[{githubPath:"https://github.com/Jairo-Junior-dev" , nome:"Jairo Pinheiro"},
      {githubPath:"https://github.com/AlexRozaLopes",nome:"Alex Roza"}],
    status:Status.FAZENDO
  },
  {
    nome: "Projeto Academia",
    image: pathsImage[0],
    integrantes:[{githubPath:"https://github.com/Jairo-Junior-dev" , nome:"Jairo Pinheiro"}],
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
