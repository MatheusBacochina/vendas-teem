import Image from "next/image";
const Article = () => {
  return (
    <article>
      <div className="px-4 mx-auto container flex flex-col lg:flex-row mb-[42px] sm:mb-[53px] md:mb-[59px] lg:mb-[64px] xl:mb-[70px] 2xl:mb-[76px] mt-[42px] sm:mt-[53px] md:mt-[59px] lg:mt-[64px] xl:mt-[70px] 2xl:mt-[76px]">
        <div className="basis-[458px]">
          <h6 className="w-[246px] h-[15px] text-orange-600 text-xs font-black font-inter uppercase leading-none">
            UM SALTO NA SUA CARREIRA MÉDICA
          </h6>
          <h3 className="text-zinc-800 mt-2 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[27px] xl:text-[28px] 2xl:text-[30px] font-bold font-roboto leading-tight">
            Segundo a Demografia Médica 2023, o médico detentor do título de
            especialista em endócrino fatura – em média- 60% a mais do que um
            médico generalista.
          </h3>
          <p className="text-zinc-800 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-normal font-roboto leading-relaxed mt-4">
            Prepare-se para elevar sua carreira e sua vida a um novo patamar.
            Conquistando o reconhecimento, o status e o prestígio que você
            merece na comunidade médica.{" "}
          </p>
          <div className="flex sm:flex-row flex-col mt-5">
            <div className="basis-[72px] items-center w-full sm:w-auto justify-start flex sm:items-start flex-shrink-0 flex-grow-0">
              <Image
                width={72}
                height={72}
                alt="cadeado"
                src={"/cadeado.png"}
              />{" "}
            </div>
            <div>
              <div className="h-12 flex items-center">
                <h6 className="text-zinc-800 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-bold font-roboto">
                  ABRA PORTAS
                </h6>
              </div>
              <p className="text-zinc-600 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-normal font-roboto leading-relaxed">
                Desbloqueie o acesso aos melhores serviços médicos e equipes de
                especialistas do país quando o assunto endocrinologia. Sua
                aprovação abrirá as portas para oportunidades de alto nível e
                chances únicas. Seja o médico que lidera a busca por excelência
                na medicina.{" "}
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col mt-2">
            <div className="basis-[72px] items-center w-full sm:w-auto justify-start flex sm:items-start flex-shrink-0 flex-grow-0">
              <Image width={72} height={72} alt="emoji" src={"/emoji.png"} />{" "}
            </div>
            <div>
              <div className="h-12 flex items-center">
                <h6 className="text-zinc-800 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-bold font-roboto">
                  Qualidade de Vida
                </h6>
              </div>
              <p className="text-zinc-600 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] font-normal font-roboto leading-relaxed">
                Conquiste qualidade de vida invejável com o título de
                especialista em endocrinologia! Aumente seus ganhos em 60% e
                diminua sua carga de trabalho, proporcionando mais tempo para a
                família e lazer. Seja o médico que equilibra sucesso
                profissional e bem-estar pessoal. Alcance a vida que você sempre
                sonhou
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex self-stretch items-center">
          <div className="aspect-[5/4] w-full relative">
            <Image
              fill
              src={"/cards.png"}
              alt="cards"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
