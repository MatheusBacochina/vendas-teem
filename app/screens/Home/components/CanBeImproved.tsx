import Image from "next/image";
const CanBeImproved = () => {
  return (
    <div className="px-4 container mx-auto mt-[64px] sm:mt-[72px] md:mt-[77px] lg:mt-[81px] xl:mt-[85px] 2xl:mt-[90px] flex flex-col items-center justify-center">
      <h6 className="text-orange-600 text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  font-black font-inter uppercase ">
        O que pode ser medido, pode ser melhorado
      </h6>
      <h4 className="max-w-[590px] text-center text-zinc-800 text-[24px] sm:text-[26px] md:text-[27px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] mt-2 font-bold font-roboto leading-tight">
        Todo o seu estudo pode ser monitorado para que seja possível aferir seu
        desempenho e – se necessário – realizar ajustes na sua preparação.
      </h4>
      <p className="text-center max-w-lg mt-4 text-zinc-800 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  font-normal font-roboto leading-relaxed">
        O foco do nosso preparatório é justamente nos fatores mais importante e
        que reprovam certa de 89% dos candidatos:{" "}
      </p>

      <div className="flex flex-wrap w-full mt-12 gap-7 justify-center lg:justify-between xl:justify-center">
        <div className="self-center basis-[300px] py-5 flex flex-col items-center gap-5 text-black text-base font-medium font-roboto leading-normal">
          <Image
            alt="dna"
            width={50}
            height={50}
            src={"/dna.svg"}
            style={{
              objectFit: "cover",
            }}
          />
          <span className="text-center h-[100px]">
            Foco em Questões envolvendo fisiologia e genética
          </span>
        </div>
        <div className="basis-[500px] 2xl:hidden lg:basis-[300px] xl:block -order-1 lg:order-none relative aspect-[10/8] py-5 flex flex-col items-center gap-5 text-black text-base font-medium font-roboto leading-normal">
          <Image
            alt="notebook"
            fill
            src={"/note.png"}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="self-center basis-[300px] py-5 flex flex-col items-center gap-5 text-black text-base font-medium font-roboto leading-normal">
          <Image
            alt="Ponteiro"
            width={50}
            height={50}
            src={"/point.svg"}
            style={{
              objectFit: "cover",
            }}
          />
          <span className="text-center  h-[100px]">
            Atualização de acordo com Surgimento de Guidelines novos de outras
            sociedades que divergem do conteúdo dos Guidelines brasileiros.
          </span>
        </div>
        <div className="self-center basis-[300px] py-5 flex flex-col items-center gap-5 text-black text-base font-medium font-roboto leading-normal">
          <Image
            alt="Livro"
            width={50}
            height={50}
            src={"/livrinho.svg"}
            style={{
              objectFit: "cover",
            }}
          />
          <span className="text-center h-[100px]">
            Foco em Questões que cobram detalhes de publicações recentes,
            sobretudo do ano anterior
          </span>
        </div>
        <div className="self-center basis-[300px] py-5 flex flex-col items-center gap-5 text-black text-base font-medium font-roboto leading-normal">
          <Image
            alt="mapa"
            width={50}
            height={50}
            src={"/mapa.svg"}
            style={{
              objectFit: "cover",
            }}
          />
          <span className="text-center h-[100px]">
            Mapeamos os conteúdos de subáreas muito extensas.
          </span>
        </div>
        <div className="self-center basis-[300px] py-5 flex flex-col items-center gap-5 text-black text-base font-medium font-roboto leading-normal">
          <Image
            alt="art"
            width={50}
            height={50}
            src={"/art.svg"}
            style={{
              objectFit: "cover",
            }}
          />
          <span className="text-center h-[100px]">
            Questões “multidisciplinares”
          </span>
        </div>
      </div>
    </div>
  );
};

export default CanBeImproved;
