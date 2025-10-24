function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Alexus Technology. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition">Sobre</a>
          <a href="#" className="hover:text-blue-400 transition">Contato</a>
          <a href="#" className="hover:text-blue-400 transition">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
