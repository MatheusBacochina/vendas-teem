import Image from "next/image";
const BeApproved = () => {
  return (
    <div className="pt-80 bg-black  sm:my-0 relative isolate justify-end flex flex-col items-center px-4 py-4 sm:pb-[50px] md:pb-[59px] lg:pb-[68px] xl:pb-[77px] 2xl:pb-[86px]">
      <Image
        alt="background Header"
        fill
        src={"/docs.png"}
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
        className="-z-40 opacity-20 sm:opacity-40"
      />
      <h1 className="text-center leading-tight text-white text-[24px] sm:text-[31px] md:text-[35px] lg:text-[38px] xl:text-[46px] 2xl:text-[56px] font-black font-roboto uppercase">
        SEJA <span className="text-orange-600">APROVADO</span> NO TEEM 2024
      </h1>
      <p className="text-center max-w-[700px] text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-normal font-roboto leading-tight">
        Tenha a garantia de que o seu futuro celebrará a sua escolha de se
        juntar a um grupo seleto de aprovados. Imagine ter um{" "}
        <span className="font-semibold">aumento médio de 60%</span> no seu
        faturamento mensal resultando em mais qualidade de vida,
        <span className="font-semibold">
          {" "}
          trabalhando menos e nas melhores instituições médicas do país.{" "}
        </span>{" "}
      </p>
      <p className="text-center max-w-[700px] mt-3 text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-normal font-roboto leading-tight">
        Visualize a oportunidade de integrar as melhores equipes de
        especialistas em serviços de excelência que exigem o título.{" "}
        <span className="font-semibold">
          Tenha de volta o prestígio social frente aos colegas da sua comunidade
          médica.{" "}
        </span>{" "}
      </p>
    </div>
  );
};

export default BeApproved;
