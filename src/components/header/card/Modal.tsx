import React, { useState } from "react";
import Status from "./Status";
import TypeProject from "./Categoria";
interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFilter: (filters: { nome?: string; categoriaProjeto?: string; status?: string }) => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onFilter }) => {
  const [nome, setNome] = useState("");
  const [categoriaProjeto, setCategoriaProjeto] = useState("");
  const [status, setStatus] = useState("");

  if (!isOpen) return null;

  const handleApply = () => {
    onFilter({ nome, categoriaProjeto, status });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Filtrar Projetos</h2>

        <input
          type="text"
          placeholder="Nome do projeto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="mb-3 w-full border rounded p-2"
        />

        <select
          value={categoriaProjeto}
          onChange={(e) => setCategoriaProjeto(e.target.value)}
          className="mb-3 w-full border rounded p-2"
        >
            
          <option value="">Selecione a Categoria</option>
            {Object.values(TypeProject).map((s) => (
          <option key={s} value={s}>{s}</option> ))}

        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mb-3 w-full border rounded p-2"
        >            
          <option value="">Selecione o status</option>
            {Object.values(Status).map((s) => (
          <option key={s} value={s}>{s}</option> ))}

        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300">
            Cancelar
          </button>
          <button onClick={handleApply} className="px-4 py-2 rounded bg-blue-600 text-white">
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};
