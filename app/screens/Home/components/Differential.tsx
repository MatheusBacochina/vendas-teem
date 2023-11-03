import Image from "next/image";
const Differential = () => {
  return (
    <div className="bg-black py-8 isolate relative">
      <Image
        alt="background Header"
        fill
        src={"/bg.png"}
        style={{
          objectFit: "cover",
        }}
        className="-z-40 opacity-20"
      />
      <div className="px-4 container mx-auto items-center text-center lg:text-left lg:items-end flex flex-col">
        <div className="max-w-[790px] w-full">
          <h5 className="text-red-600  text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-black font-inter uppercase leading-none">
            O DIFERENCIAL MEDCOF
          </h5>
          <h2 className="text-white text-[22px] mt-2 sm:text-[24px] md:text-[25px] lg:text-[26px] xl:text-[27px] 2xl:text-[28px] font-extrabold font-roboto uppercase">
            A metodologia que aprova 4x mais.
          </h2>
          <div className="flex flex-wrap w-full gap-[20px] justify-center mt-7">
            <div className="basis-[250px] group relative h-[200px] isolate px-[40px] overflow-hidden flex items-center flex-shrink-0 bg-black rounded-3xl">
              <Image
                alt="Professores"
                fill
                src={"/professores.png"}
                style={{
                  objectFit: "cover",
                }}
                className="-z-40 group-hover:opacity-80 group-hover:scale-105 transition-all"
              />
              <span className="text-center text-white text-[17px] font-bold font-roboto leading-relaxed">
                Todos os Professores são Subespecialistas
              </span>
            </div>
            <div className="basis-[250px] justify-center group relative h-[200px] isolate px-[40px] overflow-hidden flex items-center flex-shrink-0 bg-black rounded-3xl">
              <Image
                alt="QBank"
                fill
                src={"/qbank.png"}
                style={{
                  objectFit: "cover",
                }}
                className="-z-40 group-hover:scale-105 group-hover:opacity-80 transition-all"
              />
              <span className="text-center text-white text-[17px] font-bold font-roboto leading-relaxed">
                Qbank
              </span>
            </div>
            <div className="basis-[250px] group relative h-[200px] isolate px-[40px] overflow-hidden flex items-center flex-shrink-0 bg-black rounded-3xl">
              <Image
                alt="Prova"
                fill
                src={"/prova2.png"}
                style={{
                  objectFit: "cover",
                }}
                className="-z-40 group-hover:opacity-80 group-hover:scale-105 transition-all"
              />
              <span className="text-center text-white text-[17px] font-bold font-roboto leading-relaxed">
                Simulados Específicos
              </span>
            </div>
            <div className="basis-[250px] group relative h-[200px] isolate px-[40px] overflow-hidden flex items-center flex-shrink-0 bg-black rounded-3xl">
              <Image
                alt="Resumo"
                fill
                src={"/Resumo.png"}
                style={{
                  objectFit: "cover",
                }}
                className="-z-40 group-hover:opacity-80 group-hover:scale-105 transition-all"
              />
              <span className="text-center text-white text-[17px] font-bold font-roboto leading-relaxed">
                Resumos e matéria de apoio
              </span>
            </div>
            <div className="basis-[250px] group relative justify-center h-[200px] isolate px-[40px] overflow-hidden flex items-center flex-shrink-0 bg-black rounded-3xl">
              <Image
                alt="guia"
                fill
                src={"/guia.png"}
                style={{
                  objectFit: "cover",
                }}
                className="-z-40 group-hover:opacity-80 group-hover:scale-105 transition-all"
              />
              <span className="text-center text-white text-[17px] font-bold font-roboto leading-relaxed">
                Guia Estatístico
              </span>
            </div>
            <div className="basis-[250px] group relative h-[200px] isolate px-[40px] overflow-hidden flex items-center flex-shrink-0 bg-black rounded-3xl">
              <Image
                alt="Derma"
                fill
                src={"/derma.png"}
                style={{
                  objectFit: "cover",
                }}
                className="-z-40 group-hover:opacity-80 group-hover:scale-105 transition-all"
              />
              <span className="text-center text-white text-[17px] font-bold font-roboto leading-relaxed">
                Aulas didáticas e 100% voltadas para o TEEM 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Differential;
