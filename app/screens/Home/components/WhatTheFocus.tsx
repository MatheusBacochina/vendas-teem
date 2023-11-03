import Image from "next/image";
const WhatTheFocus = () => {
  return (
    <div className="px-4 mt-[64px] sm:mt-[80px] flex justify-center md:mt-[88px] lg:mt-[96px] xl:mt-[104px] 2xl:mt-[112px]">
      <div className="container overflow-hidden items-center relative px-10 py-7 flex-col lg:flex-row flex bg-black isolate rounded-[20px] gap-9">
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
            QUAL É O FOCO DO MEDCOF TEEM 2024?
          </h6>
          <h3 className="text-white mt-2 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[27px] xl:text-[28px] 2xl:text-[30px] font-bold font-roboto leading-tight">
            Impactar consideravelmente no crescimento do seu percentual de
            acerto tanto para as provas da 1º Etapa como nas da 2º Etapa.
          </h3>
          <p className="text-white text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-normal font-roboto leading-relaxed mt-4">
            Fazer você ser aprovado no TEEM 2024 sem comprometer seu rendimento
            nos diversos aspectos da sua vida pessoal e profissional. Sem
            sacrifícios desnecessários nem perda de tempo. Tudo de uma maneira
            altamente sustentável e tranquila.
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-[10/6] lg:aspect-[10/6] bg-black relative overflow-hidden rounded-3xl">
            <Image alt="prova" fill src={"/prova.png"} style={{ objectFit: "cover" }} />
          </div>
          <div className="bg-green-500 text-white font-roboto mt-5 flex justify-between rounded-3xl px-[14px] py-2">
            <span>Seus Acertos</span> <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatTheFocus;
