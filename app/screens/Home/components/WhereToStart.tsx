import Image from "next/image";
const WhereToStartSection = () => {
  return (
    <div
      className="px-4 flex bg-black isolate flex-col overflow-hidden relative items-center mt-6 py-[64px] sm:py-[82px] md:py-[92px] lg:py-[101px] xl:py-[110px] 2xl:py-[120px] "
    >
      <Image
        alt="background Header"
        fill
        src={"/bg2.png"}
        style={{ objectFit: "cover" }}
        className="-z-20 opacity-10"
      />
      <h1 className="text-center max-w-[500px] leading-tight text-white text-[26px] sm:text-[28px] md:text-[30px] lg:text-[31px] xl:text-[32px] 2xl:text-[34px] font-black font-roboto uppercase tracking-wide">
        VOCÊ SENTE QUE <br />
        <span className="text-orange-600">
          NÃO SABE COMO E NEM POR ONDE COMEÇAR
        </span>{" "}
        <br /> A ESTUDAR PARA O TEEM?
      </h1>
      <p className="text-center max-w-lg text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] mt-3 font-normal font-roboto leading-normal">
        Além do exame ter uma alta taxa de reprovação (76% em 2023), a
        quantidade de assunto e falta de estratégia na hora de criar seu
        programa de preparação são os principais fatores que te desmotivam no
        início dessa caminhada.{" "}
      </p>
    </div>
  );
};

export default WhereToStartSection;
