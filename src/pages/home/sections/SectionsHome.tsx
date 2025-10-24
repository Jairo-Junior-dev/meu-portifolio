import { Link } from "react-router-dom";
import Card from "../../../components/header/card/Card";
import type CardsProps from "../../../components/interface/Card";
import type TypeProject from "../../../components/header/card/Categoria";
import type React from "react";

interface SectionsHomeProps {
    filteredCards:CardsProps[]; 
    categoria:TypeProject
}

const  SectionsHome:React.FC<SectionsHomeProps> = ({filteredCards,categoria})=>{
    return(
        <>
        <div
        className="scroll-mt-24 px-4 py-8 grid justify-center gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {filteredCards.filter((card)=> card.categoriaProjeto.includes(categoria)).map((card, index) => (
          <Link key={index} to={`/card/${index}`} className="w-full">
            <Card
              nome={card.nome}
              categoriaProjeto={card.categoriaProjeto}
              image={card.image}
              status={card.status}
            />
          </Link>
        ))}
      </div>
        </>
    )

}
export default SectionsHome;