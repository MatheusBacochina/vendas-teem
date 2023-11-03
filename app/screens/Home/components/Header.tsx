import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
const Header = () => {
  const [scrolly, setScrolly] = useState(0);

  useEffect(() => {
    function scroll() {
      setScrolly(window.scrollY);
    }
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <header className="relative overflow-hidden pt-[86px] bg-black sm:pt-[92px] md:pt-[168px] isolate py-[124px] sm:py-[155px] md:py-[171px] lg:py-[186px] xl:py-[202px] 2xl:py-[218px]">
      <Image
        alt="background Header"
        fill
        src={"/bg.png"}
        style={{
          objectFit: "cover",
          transform: `translateY(${
            (scrolly < window.innerHeight ? scrolly : 0) * 0.5
          }px)`,
        }}
        className="-z-40 opacity-30 md:opacity-40"
      />
      <div className="container px-4 mx-auto flex items-center sm:items-start flex-col">
        <Image alt="logo Teem" width={62} height={49} src={"/logo.png"} />
        <h1 className="text-center sm:text-left text-white mt-[22px] text-[24px] sm:text-[28px] md:text-[31px] lg:text-[33px] xl:text-[35px] 2xl:text-[38px] font-black max-w-[692px] font-roboto uppercase leading-snug tracking-wide">
          SEJA APROVADO NO TEEM 2024 E AUMENTE EM 60% SUA RENDA MENSAL!
        </h1>
        <p className="text-center sm:text-left max-w-2xl mt-3 text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] font-normal font-roboto leading-normal">
          Retenha 70% a mais de conteúdo do que qualquer outra metodologia
          precisando de apenas poucas horas por semana para se preparar.
        </p>
        <Link href="#card">
          <button className="px-9 py-5 w-fit bg-orange-600 rounded-xl hover:bg-orange-400 mt-5 transition-colors flex items-center">
            <span className="text-xs font-bold font-roboto uppercase text-white">
              Garanta sua vaga AGORA!
            </span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
