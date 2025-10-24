import React from "react";
import type CardsProps from "../../interface/Card";
import { getColor } from "../../search/PrcurarCard";

const Card: React.FC<CardsProps> = ({ nome, categoriaProjeto, image, status }) => {
  return (
    <div
      className="bg-white 
        rounded-2xl shadow-lg
        overflow-hidden 
        hover:shadow-xl 
        hover:scale-105 
        transition-transform duration-300 
        w-[19rem] flex flex-col"
    >
      <img
        src={image}
        alt={nome}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{nome}</h2>
        <ul className="flex flex-wrap gap-2 mt-auto">
          {categoriaProjeto.map((cat, idx) => (
            <li
              key={idx}
              className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
            >
              {cat}
            </li>
          ))}
          {status && (
            <li className={getColor(status)}>
              {status}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Card;
