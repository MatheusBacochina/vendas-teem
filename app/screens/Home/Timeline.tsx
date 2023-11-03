import Image from "next/image";
import Link from "next/link";
const Timeline = () => {
  return (
    <div className="py-16 container rounded-sm justify-center items-center xl:justify-between flex-col relative xl:flex-row isolate bg-[#E10000] mx-auto mt-[64px] px-16 overflow-hidden sm:mt-[79px] md:mt-[87px] lg:mt-[94px] xl:mt-[102px] 2xl:mt-[110px] flex">
     <Image width={450} height={600} alt="logo" src={"/logo.png"} className="absolute -z-10 top-0 left-5 -translate-y-11 opacity-60" />
      <h1 className="text-white text-[26px] sm:text-[29px] md:text-[31px] lg:text-[32px] xl:text-[34px] 2xl:text-[36px] basis-auto xl:basis-[740px] font-bold font-roboto">
        Descubra o <span className="text-black">Cronograma</span> que vai mudar
        sua carreira!
      </h1>
      <Link href="https://docs.google.com/spreadsheets/d/1hFSLN4UeG5-tK8UXi83llQK7ZjOD1vLteluki-8tVpw/edit">
      <button className="w-[297.94px] mt-5 xl:mt-0 h-[59px] px-14 py-5 bg-white hover:shadow rounded-[50px] shadow border border-white justify-center items-center inline-flex">
        <span className="text-center text-black text-[15px] font-bold font-roboto">CLIQUE PARA VISUALIZAR</span>
      </button>
      </Link>
    </div>
  );
};

export default Timeline;
