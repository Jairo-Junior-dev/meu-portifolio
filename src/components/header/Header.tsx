import React, { type ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
  onProjetosClick?: () => void;
  onSobreClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ children, onProjetosClick, onSobreClick }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-950 to-purple-700 shadow-lg py-4 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Jairo P.</h1>
        <ul className="flex space-x-6 text-white font-medium">
          <li
            className="hover:text-blue-400 transition duration-300 cursor-pointer"
            onClick={onProjetosClick}
          >
            Projetos
          </li>
          <li
            className="hover:text-blue-400 transition duration-300 cursor-pointer"
            onClick={onSobreClick}
          >
            Sobre mim
          </li>
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            <a href="https://www.youtube.com/@jaerty1">Youtube</a>
          </li>
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            <a href="https://github.com/Jairo-Junior-dev">GitHub</a>
          </li>
          {children && <li>{children}</li>}
        </ul>
      </div>
    </nav>
  );
};
