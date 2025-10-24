import React, { useState, type ReactNode } from "react";
import { Sling as Hamburger } from "hamburger-react";

interface HeaderProps {
  children?: ReactNode;
  onProjetosClick?: () => void;
  onSobreClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ children, onProjetosClick, onSobreClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-950 to-purple-700 shadow-lg py-4 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Jairo P.</h1>
        <ul className="hidden md:flex space-x-6 text-white font-medium">
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
            <a href="https://www.youtube.com/@jaerty1">YouTube</a>
          </li>
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            <a href="https://github.com/Jairo-Junior-dev">GitHub</a>
          </li>
          {children && <li>{children}</li>}
        </ul>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
        </div>
      </div>

      
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-blue-950 text-white font-medium mt-4 space-y-4 py-4 rounded-b-2xl shadow-lg">
          <li
            className="hover:text-blue-400 transition duration-300 cursor-pointer"
            onClick={() => {
              onProjetosClick?.();
              setIsOpen(false);
            }}
          >
            Projetos
          </li>
          <li
            className="hover:text-blue-400 transition duration-300 cursor-pointer"
            onClick={() => {
              onSobreClick?.();
              setIsOpen(false);
            }}
          >
            Sobre mim
          </li>
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            <a href="https://www.youtube.com/@jaerty1" onClick={() => setIsOpen(false)}>
              YouTube
            </a>
          </li>
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            <a href="https://github.com/Jairo-Junior-dev" onClick={() => setIsOpen(false)}>
              GitHub
            </a>
          </li>
          {children && <li>{children}</li>}
        </ul>
      )}
    </nav>
  );
};
