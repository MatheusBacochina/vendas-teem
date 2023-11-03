import Image from "next/image";
const Stamp = () => {
  return (
    <div className="mt-[64px] py-4 relative isolate bg-black sm:mt-[79px] md:mt-[87px] overflow-hidden lg:mt-[94px] xl:mt-[102px] 2xl:mt-[110px] ">
      <Image
        alt="background Header"
        fill
        src={"/bg.png"}
        style={{
          objectFit: "cover",
        }}
        className="-z-40 opacity-30"
      />
      <div className="container mx-auto px-4 relative flex flex-col lg:flex-row justify-center gap-6 items-center">
        <Image alt="" width={540} height={435} src="/selo.png" />
        <div className="basis-auto lg:basis-[627px]">
        <h1 className="text-white text-center lg:text-left text-[20px] leading-tight sm:text-[23px] md:text-[24px] lg:text-[26px] xl:text-[27px] 2xl:text-[29px]  font-bold font-roboto">
          Durante os próximos 7 dias, você poderá acessar à nossa plataforma com
          vários conteúdos sem qualquer compromisso financeiro - tudo graças a
          nossa <span className="text-orange-600">garantia incondicional</span>{" "}
          de 07 dias
        </h1>
        <p className="text-white text-[14px] text-center lg:text-left sm:text-[15px] mt-5 md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px]  font-normal font-roboto leading-normal">
          Caso depois desse período, você acredite que não está preparado para
          ser mais um dos MEDCOFERS APROVADOS NO TEEM, basta solicitar o seu
          reembolso – e você receberá seu dinheiro de volta imediatamente, sem
          perguntas e sem precisar dar justificativas.{" "}
        </p>
        </div>
      </div>
    </div>
  );
};

export default Stamp;
