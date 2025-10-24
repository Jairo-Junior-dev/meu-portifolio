
import Status from "../header/card/Status";
import type CardsProps from "../interface/Card";

export const findByTerm = (cards: CardsProps[], termo: string): CardsProps[] => {
  if (!termo) return cards; 

  const lower = termo.toLowerCase();
  return cards.filter(
    (card) =>
      card.nome.toLowerCase().includes(lower) ||
      card.categoriaProjeto.some((cat) =>
      cat.toLowerCase().includes(lower))||
      card.status?.toLowerCase().includes(lower) 

  );
};
export const findByTermModal = (
  cards: CardsProps[],
  filters: { nome?: string; categoriaProjeto?: string; status?: string }
): CardsProps[] => {
  const lowerNome = filters.nome?.toLowerCase();

  return cards.filter((card) => {
    const byNome = lowerNome
      ? card.nome.toLowerCase().includes(lowerNome)
      : true;

    const byCategoria = filters.categoriaProjeto
      ? card.categoriaProjeto.some(cat =>
          cat.toLowerCase().includes(filters.categoriaProjeto!.toLowerCase()))
      : true;

    const byStatus = filters.status
      ? card.status?.toLowerCase() === filters.status.toLowerCase()
      : true;

    return byNome && byCategoria && byStatus;
  });
};

export const getColor = (tipe:Status):string=>{
  let value:string;
  switch (tipe) {
    case Status.FEITO:
      value = "text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full";
      break;
    case Status.FAZENDO:
      value = "text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full"
      break
      case Status.AFAZER:
      value = "text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full"
      break
      default:
      value = ""
      break;
    
    }
    return value;  
  }