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
      <Link href="https://docs.google.com/spreadsheets/d/1hFSLN4UeG5-tK8UXi83llQK7ZjOD1vLteluki-8tVpw/edit?_gl=1*1lv0g92*_ga*MjQ1NTU1NTE0LjE2OTUxMzkxMDg.*_ga_37GXT4VGQK*MTY5OTAzMjM3My44Ni4xLjE2OTkwMzIzNzcuMC4wLjA.#gid=1077181146">
      <button className="max-w-[297.94px] mt-5 xl:mt-0 py-4 px-14 bg-white hover:shadow rounded-[50px] shadow border border-white justify-center items-center inline-flex">
        <span className="text-center text-black text-[15px] font-bold font-roboto">CLIQUE PARA VISUALIZAR</span>
      </button>
      </Link>
    </div>
  );
};

export default Timeline;
