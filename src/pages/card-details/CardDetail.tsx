import { useNavigate, useParams } from "react-router-dom";
import github from "../../../src/assets/github.png";
import user from "../../../src/assets/user.png";
import cards from "../../components/mock/cards";
import { getColor } from "../../components/search/PrcurarCard";


export default function CardDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const card = cards[Number(id)];

  if (!card)
    return (
      <div className="w-4/5 max-w-screen-lg h-4/5 max-h-screen mx-auto mt-16 flex flex-col items-center justify-center">
        <p className="text-xl font-semibold text-red-600">Card não encontrado!</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Voltar
        </button>
      </div>
    );

  return (
    <div className="w-4/5 max-w-screen-lg h-4/5 max-h-screen mx-auto mt-16">
      {/* Botão voltar */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
      >
        ← Voltar
      </button>

      {/* Card metade/metade */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row h-full">
        {/* Metade direita: imagem */}

        <div className="md:w-1/2">
          <img
            src={card.image}
            alt={card.nome}
            className="w-full h-full object-cover rounded-r-2xl"
          />
        </div>
          {/* Metade esquerda: informações */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center gap-4">
          <h1 className="text-4xl font-bold text-gray-800">{card.nome}</h1>

          {card.status && (
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getColor(
                card.status
              )}`}
            >
              {card.status}
            </span>
          )}

          <div className="text-gray-700 max-h-48 overflow-y-auto">
            <p>
            </p>
            {card.descricao || "Sem descrição disponível."}
          </div>
         
          <div  className="flex flex-row">
          <img src={github} className="w-6 h-6 mr-2" />
          <p className="text-gray-700 overflow-auto">
           <a href={card.link} >
            { card.link  || "Sem Link disponível."}
            </a> 
          </p>
          </div>
              {card.integrantes && card.integrantes.length>0 && (
            <div className="flex flex-wrap gap-2 mt-2">  
            {
              card.integrantes.map((cat,index)=>(
                <span 
                className=" pt-3 font-bold"
                key={index}>
                 
                  <div className="flex flex-row  ">
                    <img className="w-6 h-6 mr-2"  src={user}/>
                    <p className=" text-blue-700 px-3 py-1 rounded-full text-sm">{cat.nome}</p>
                  </div>
                   <div className=" flex flex-row ">
                    <img src={github} className="w-6 h-6 mr-2" />
                  <a className=" text-blue-700 px-3 py-1 rounded-full text-sm" href={cat.githubPath}>{cat.githubPath}</a>
                  </div>
                
                </span>
              ))
            }
            </div>
            )}
      
          
          {card.categoriaProjeto && card.categoriaProjeto.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {card.categoriaProjeto.map((cat, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {cat}
                </span>
              ))
              }
            </div>
          )}
        </div>

      </div>
    </div>
  
);
}
