import Image from "next/image";
import Link from "next/link";
const ChoiseCard = () => {
  return (
    <div id="card" className="px-4 flex flex-col items-center">
      <h6 className="h-[15px] mt-6 text-orange-600 text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px] text-center font-black font-inter uppercase leading-none">
        FOCO
      </h6>
      <h4 className="text-center mt-2 text-zinc-800 text-[18px] sm:text-[20px] md:text-[21px] lg:text-[22px] xl:text-[23px] 2xl:text-[24px] font-bold font-roboto">
        INSCREVA-SE NO MEDCOF TEEM 2024
      </h4>
      <div className="max-w-[400px] flex flex-col items-center px-5 mt-[28px] sm:mt-[40px] md:mt-[46px] lg:mt-[52px] xl:mt-[58px] 2xl:mt-[64px] bg-rose-600 rounded-[20px]">
        <Image
          width={98}
          height={76}
          alt="logo"
          src={"/logowhite.png"}
          className="my-5"
        />
        <ul className="mt-5">
          <li className=" text-white text-[13px] font-normal font-roboto gap-2 flex">
            {" "}
            <Image alt="" width={20} height={20} src={"/check.svg"} />
            Curso criado por Subespecialistas gabaritados
          </li>
          <li className=" text-white text-[13px] mt-2 font-normal font-roboto gap-2 flex">
            {" "}
            <Image alt="" width={20} height={20} src={"/check.svg"} />
            Aulas didáticas voltada para Prova do TEEM 2024
          </li>
          <li className=" text-white text-[13px] mt-2 font-normal font-roboto gap-2 flex">
            {" "}
            <Image alt="" width={20} height={20} src={"/check.svg"} />
            Qbank
          </li>
          <li className=" text-white text-[13px] mt-2 font-normal font-roboto gap-2 flex">
            {" "}
            <Image alt="" width={20} height={20} src={"/check.svg"} />
            Resumos das aulas 
          </li>
          <li className=" text-white text-[13px] mt-2 font-normal font-roboto gap-2 flex">
            {" "}
            <Image alt="" width={20} height={20} src={"/check.svg"} />
            Material de apoio
          </li>

          <li className=" text-white text-[13px] mt-2 font-normal font-roboto gap-2 flex">
            {" "}
            <Image alt="" width={20} height={20} src={"/check.svg"} />
            Mentoria mensal para 20 primeiros
          </li>

          <li className=" text-white text-[13px] mt-2 font-normal font-roboto gap-2 flex">
            {" "}
            <Image alt="" width={20} height={20} src={"/check.svg"} />
            Guia Estatístico: análise estatística de desempenho
          </li>
        </ul>
        <span className="text-center mt-6 text-white text-base font-normal font-roboto">
          R$3.497,00
        </span>
        <h1 className="text-center text-white text-[43px] font-bold font-roboto leading-none">
          R$249,75
        </h1>
        <span className="text-center mt-8 text-white text-base font-normal font-roboto">
          em 12x no cartão
        </span>
        <span className="text-center mt-1 text-white text-base font-semibold font-roboto">
          ou R$2.997,00 à vista.
        </span>
        <Link href="https://vendas.grupomedcof.com.br/pay/medcof-teem-2024 " className="w-full">
          <button className="w-full mt-5 hover:shadow-md transition-colors shadow py-3 bg-white mb-4 rounded-md justify-center items-center inline-flex">
            <span className="text-center text-stone-900 text-base font-normal font-roboto">
              Quero ser aprovado
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChoiseCard;
