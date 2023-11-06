import Image from "next/image";
const Questions = () => {
  return (
    <div className="">
      <div className="container relative flex flex-col items-center lg:items-start px-4 mx-auto mt-20">
        <div className="h-full w-96 absolute right-0 opacity-40 hidden lg:block">
          <Image
            fill
            alt="robo"
            src={"/robo.png"}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="max-w-[586px]">
         
          <h3 className="text-zinc-800 mt-2 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[27px] xl:text-[28px] 2xl:text-[30px] font-bold font-roboto leading-tight">
            Saiba mais detalhes sobre o Banco de Questões Digital (QBank) mais
            completo do Brasil:
          </h3>
          <p className="text-zinc-800 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-normal font-roboto leading-relaxed mt-4">
            O nosso QBank é a ferramenta de questões mais completa e avançada em
            território nacional e o maior Banco de Questões da Área médica da
            América Latina.
          </p>
          <div className="flex py-5 mt-1 gap-4 border-b border-rose-100">
            <Image width={40} height={40} alt="brain" src={"/brain.svg"} />
            <p className="text-black text-base font-normal font-roboto leading-normal">
              Usamos a Inteligência Artificial para maximizar o seu desempenho,
              ajudando na sua evolução através da retenção e aprofundamento dos
              conteúdos.
            </p>
          </div>
          <div className="flex py-5 gap-4 border-b border-rose-100">
            <Image width={40} height={40} alt="person" src={"/person.svg"} />
            <p className="text-black text-base font-normal font-roboto leading-normal">
              São +300 questões comentadas em alto nível - com foco no que mais
              cai no TEEM - em vídeo e texto por endocrinologistas da USP
              titulados! E +100 questões comentadas serão adicionadas todos os
              meses! Totalizando +900 questões até a prova do TEEM 2024
            </p>
          </div>
          <div className="flex py-5 gap-4">
            <Image width={40} height={40} alt="medalha" src={"/meda.svg"} />
            <p className="text-black text-base font-normal font-roboto leading-normal">
              FlashCards com revisões espaçadas. Através dessa
              ferramenta, você pode aumentar suas chances em até 4x mais para
              ser aprovado e reter 70% a mais de conteúdo após ele ser estudado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
