import Image from "next/image";
import Link from "next/link";
const ExclusiveAndLimited = () => {
  return (
    <div className="px-4 mt-[64px] sm:mt-[80px] flex justify-center md:mt-[88px] lg:mt-[96px] xl:mt-[104px] 2xl:mt-[112px]">
      <div className="container overflow-hidden items-center relative px-10 py-10 flex-col lg:flex-row flex bg-black isolate rounded-[20px] gap-9">
        <Image
          alt="background Header"
          fill
          src={"/fundoen.png"}
          style={{
            objectFit: "cover",
          }}
          className="-z-40 opacity-20"
        />
        <div className="lg:basis-[430px] basis-auto flex-grow-0">
          <h6 className="h-[15px] text-orange-600 text-xs font-black font-inter uppercase leading-none">
            EXCLUSIVO E LIMITADO
          </h6>
          <h3 className="text-white mt-2 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[27px] xl:text-[28px] 2xl:text-[30px] font-bold font-roboto leading-tight">
            OS 20 PRIMEIROS INSCRITOS VÃO RECEBER 06 MENTORIAS EM GRUPO EXCLUSIVAS
          </h3>
          <p className="text-white text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-normal font-roboto leading-relaxed mt-4">
            A mentoria serve para planejar, organizar e executar ações
            estratégicas específicas adaptadas à sua rotina, para conseguir a
            aprovação no TEEM sem sacrifícios desnecessários.
          </p>
          <p className="text-white text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-normal font-roboto leading-relaxed mt-4">
            O TEEM utiliza diversas bibliografias e Guedlines para seus exames,
            impossíveis de serem estudadas por completo, com a Mentoria vai
            ajustar a sua rotina apertada de estudos a um ensino direcionado e
            orientado ao que realmente cai em cada literatura específica.
          </p>
          <Link href={"/#card"}>
          <button className="border-2 hover:border-orange-400 transition-all border-orange-600 px-12 py-4 flex items-center rounded-3xl mt-6">
            <span className="text-center text-white text-sm font-bold font-roboto uppercase leading-[14px]">Garanta sua vaga AGORA!</span>
          </button>
          </Link>
        </div>
        <div className="flex-1 w-full">
          <p className="text-red-600 text-base font-normal font-roboto leading-normal">
            A Mentoria TEEM 2024, além de aumentar seu rendimento tanto para as
            provas da 1º Etapa quanto as da 2º Etapa, vai otimizar o seu tempo
            através de uma técnica de estudo que aumenta em 70% da sua
            capacidade de reter conteúdos novos.
          </p>

          <div className="aspect-[10/4] bg-black mt-5 relative overflow-hidden rounded-3xl">
            <Image
              alt="escada"
              fill
              src={"/escada.png"}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="bg-zinc-100 overflow-hidden text-white font-roboto mt-5 flex justify-between rounded-3xl">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveAndLimited;
