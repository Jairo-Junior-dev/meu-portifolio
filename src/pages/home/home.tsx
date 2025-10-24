import { useRef, useState } from "react";
import Card from '../../components/header/card/Card';
import { FilterModal } from "../../components/header/card/Modal";
import Hero from "../../components/header/hero/Hero";
import cards from '../../components/mock/cards';
import { findByTerm, findByTermModal } from "../../components/search/PrcurarCard";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SectionsHome from "./sections/SectionsHome";
import TypeProject from "../../components/header/card/Categoria";

function Home() {
  const [termo, setTermo] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({ nome: "", categoriaProjeto: "", status: "" });
 
 
  // 🔹 Refs das seções
  const projetosRef = useRef<HTMLDivElement | null>(null);
  const sobreRef = useRef<HTMLDivElement | null>(null);

  // 🔹 Função para scroll suave
  const scrollToSection = (ref: React.RefObject<HTMLDivElement|null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  let filteredCards = findByTerm(cards, termo);
  filteredCards = findByTermModal(filteredCards, filters);

  return (
    <>
       <Header
        onProjetosClick={() => scrollToSection(projetosRef)}
        onSobreClick={() => scrollToSection(sobreRef)}/>
      <div ref={sobreRef}>
      <Hero   /> 
      </div>
      {/* Campo de busca + botão */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-4 px-4">
        <input
          type="text"
          placeholder="Buscar por nome ou categoria..."
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          className="w-full md:w-auto flex-1 max-w-4xl px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={() => setIsOpen(true)}
          className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition"
        >
          Filtros
        </button>
      </div>

      {/* Grid de cards fluido */}
      <h1 className="  
        flex
        mt-6
        justify-center
        text-3xl md:text-4xl 
        font-bold 
        text-white mb-4
        bg-indigo-700
        "
        >Projetos</h1>
      <div
        ref={projetosRef}
        className="scroll-mt-24 px-4 py-8 grid justify-center gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        
        {filteredCards.map((card, index) => (
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
      {/* Grid de cards fluido Section Java*/}
        
        <h1 className="  
        flex
        justify-center
        text-3xl md:text-4xl 
        font-bold 
        text-white mb-4
        bg-indigo-700
        "
        >Projeto {TypeProject.JAVA}</h1>
        <SectionsHome 
          filteredCards={cards} 
          categoria ={TypeProject.JAVA}
        />
      {/* Grid de cards fluido Section Java*/}
        
        <h1 className="  
        flex
        justify-center
        text-3xl md:text-4xl 
        font-bold 
        text-white mb-4
        bg-indigo-700
        "
        >Projeto {TypeProject.SPRING_BOOT}</h1>
        <SectionsHome 
          filteredCards={cards} 
          categoria ={TypeProject.SPRING_BOOT}
        />

         <h1 className="  
        flex
        justify-center
        text-3xl md:text-4xl 
        font-bold 
        text-white mb-4
        bg-indigo-700
        "
        >Projeto {TypeProject.SERVIDOR}</h1>
        <SectionsHome 
          categoria ={TypeProject.SERVIDOR}
          filteredCards={cards} 
        />
      {/* Modal de filtros */}
      <FilterModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onFilter={(newFilters) => setFilters({   
          nome: newFilters.nome || "",
          categoriaProjeto: newFilters.categoriaProjeto || "",
          status: newFilters.status || ""})}
      />
    <Footer/>
    </>
  );
}

export default Home;
