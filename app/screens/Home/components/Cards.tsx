import Image from "next/image";
const Cards = () => {
  return (
    <div className="z-50">
      <div className="container mx-auto px-4 flex flex-wrap gap-7 justify-center items-start -m-10">
        <div className="relative shadow bg-black border-b-4 border-red-600 basis-96 flex flex-col items-center px-8 py-12">
          <div className="h-16 w-16 relative">
            <Image
              alt="logo"
              fill
              src={"/livro.svg"}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className=""
            />
          </div>
          <p className="text-center mt-8 h-24 text-white text-base font-normal font-roboto leading-normal">
            Por ser uma área muito ampla, esse direcionamento será crucial para
            você alcançar a porcentagem de acerto necessária e obter o seu
            sonhado título de especialista.
          </p>
        </div>
        <div className="relative shadow order-none lg:order-1 xl:order-none bg-white border-b-4 border-red-400 basis-96 flex flex-col items-center px-8 py-12">
          <div className="h-16 w-16 relative">
            <Image
              alt="logo"
              fill
              src={"/premio.svg"}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className=""
            />
          </div>
          <p className="text-center mt-8 text-stone-500 text-base font-normal font-roboto leading-normal">
            Domine o TEEM com nossa metodologia de aprendizagem ativa! Aumente
            sua retenção de conteúdo em 70% em comparação com outras
            metodologias com o maior banco de questões da América Latina.
            Prepare-se de forma inteligente e eficaz para alcançar o sucesso no
            exame de título.
          </p>
          <button className="bg-red-500 hover:bg-red-400 transition-colors rounded px-7 py-3 mt-7 text-center text-white text-[15px] font-roboto">Garantir minha vaga</button>
        </div>
        <div className="relative shadow bg-black border-b-4 border-red-600 basis-96 flex flex-col items-center px-8 py-12">
          <div className="h-16 w-16 relative">
            <Image
              alt="logo"
              fill
              src={"/iconp.svg"}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className=""
            />
          </div>
          <p className="text-center mt-8 h-24 text-white text-base font-normal font-roboto leading-normal">
            Com o MEDCOF TEEM 2024, você vai priorizar o que realmente importa e
            o que fará diferença na hora da sua aprovação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
