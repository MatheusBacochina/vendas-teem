import Image from "next/image";
const Focus = () => {
  return (
    <div className="container mx-auto px-4 mt-[40px] sm:mt-[53px] md:mt-[60px] lg:mt-[66px] xl:mt-[73px] 2xl:mt-[80px]">
      <h6 className="h-[15px] text-orange-600 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] text-center font-black font-inter uppercase leading-none">
        FOCO
      </h6>
      <h3 className="text-zinc-800 text-center mt-2 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[27px] xl:text-[28px] 2xl:text-[30px] font-bold font-roboto leading-tight">
        PILARES DA APROVAÇÃO
      </h3>
      <div className="flex flex-wrap gap-6 mt-4 justify-center sm:mt-[54px] md:mt-[57px] lg:mt-[59px] xl:mt-[61px] 2xl:mt-[64px]">
        <div className="basis-[320px] flex flex-col items-center p-6">
          <h6 className="text-center h-auto lg:h-[46px] xl:h-[51px] 2xl:h-[56px]  text-black text-lg font-extrabold font-roboto">
            APRENDIZAGEM DIRECIONADA
          </h6>
          <div className="min-h-[220px]">
            <p className="text-center text-black text-sm font-normal font-roboto mt-3">
              O aluno será direcionado para o caminho da aprovação com aulas
              didáticas e 100% voltadas para o TEEM 2024.
            </p>
            <p className="text-center text-black text-sm font-normal font-roboto mt-5">
              Uma vez que o conteúdo pragmático do curso é inteiramente baseado
              nos temas da prova através de um Guia Estatístico, com ênfase nos
              assuntos mais prevalentes.
            </p>
          </div>
          <Image
            width={80}
            height={340}
            alt="pilar"
            src={"/pilar.png"}
            className="mt-5"
          />
        </div>
        <div className="basis-[320px] flex flex-col items-center p-6">
          <h6 className="text-center h-auto md:h-[41px] lg:h-[46px] xl:h-[51px] 2xl:h-[56px]  text-black text-lg font-extrabold font-roboto">
            SEDIMENTAÇÃO E APLICAÇÃO DO CONTEÚDO
          </h6>
          <div className="min-h-[220px]">
            <p className="text-center text-black text-sm font-normal font-roboto mt-3">
              Através do QBank, nosso banco de questões que contará com mais de
              900 questões específicas sobre endocrinologia. Por meio dos
              Simulados exclusivos, o aluno acompanhara suas estatísticas,
              avaliando sua evolução e ajustará, ao longo das aulas e do curso,
              seus pontos fracos garantindo qualidade no aprendizado.
            </p>
          </div>
          <Image
            width={80}
            height={340}
            alt="pilar"
            src={"/pilar.png"}
            className="mt-5"
          />
        </div>
        <div className="basis-[320px] flex flex-col items-center p-6">
          <h6 className="text-center h-auto lg:h-[46px] xl:h-[51px] 2xl:h-[56px]  text-black text-lg font-extrabold font-roboto">
            SEGURANÇA PARA A PROVA
          </h6>
          <div className="min-h-[220px]">
            <p className="text-center text-black text-sm font-normal font-roboto mt-3">
              Nosso aluno será ensinado através dos melhores métodos por
              professores subespecialistas experientes que passaram recentemente
              pelo mesmo processo que você está passando e foram bem-sucedidos.
              Além disso, você terá resumos e matérias de apoio que te ajudarão
              a revisar todo o conteúdo em qualquer lugar, no meio do plantão,
              no ambulatório ou durante algum compromisso.
            </p>
          </div>
          <Image
            width={80}
            height={340}
            alt="pilar"
            src={"/pilar.png"}
            className="mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Focus;
