import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
const Header = () => {
  const [scrolly, setScrolly] = useState(0);
  const [heigth, setHeigth] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const refHeader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeigth(window.innerHeight);
    if (refHeader.current) {
      setOffsetTop(refHeader.current.offsetTop);
    }
    function scroll() {
      setScrolly(window.scrollY);
    }
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [offsetTop]);

  return (
    <header
      ref={refHeader}
      className="relative overflow-hidden bg-black isolate py-[66px] sm:py-[100px] md:py-[113px] lg:py-[125px] xl:py-[137px] 2xl:py-[150px]"
    >
      <Image
        alt="background Header"
        fill
        src={"/bg.png"}
        style={{
          objectFit: "cover",
          transform: `translateY(${
            (scrolly >= offsetTop ? scrolly - offsetTop : 0) * 0.5
          }px)`,
        }}
        className="-z-40 opacity-30 md:opacity-40"
      />
      <div className="container mx-auto gap-8 justify-between lg:flex-row flex-col items-center px-4 flex">
        <div className="xl:basis-[630px] lg:basis-[530px] flex items-center lg:items-start flex-col">
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
        <div className="aspect-video w-full lg:basis-[600px] 2xl:basis-[700px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/EI-4rrvebrQ?si=tSxhqCSLg4E6D5VR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </header>
  );
};

export default Header;
