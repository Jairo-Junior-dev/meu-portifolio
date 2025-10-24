import imagemCover from "../../../assets/HandlerImageDocs.jpeg";

const Hero = () => {
  return (
    <div className="pt-[100px] grid md:grid-cols-2 gap-6 max-w-6xl mx-auto p-5 items-center">
      <div className="flex justify-center md:justify-start">
        <img
          className="rounded-lg w-80 md:w-96 object-cover"
          src={imagemCover}
          alt="Jairo Pinheiro"
        />
      </div>
      
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-50 mb-4">
          Olá a todos!
        </h1>
        <p className="text-base md:text-xl text-stone-50 leading-relaxed">
          Me chamo Jairo Pinheiro. Sou programador backend, mas às vezes brinco no frontend. 
          Gosto de sempre me atualizar em relação às linguagens e ferramentas, 
          assim como outras áreas da tecnologia: dados e infraestrutura.
        </p>
      </div>
    </div>
  );
};

export default Hero;
