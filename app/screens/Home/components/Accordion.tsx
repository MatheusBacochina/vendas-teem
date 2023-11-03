import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from 'next/link'
const AccordionEl = () => {
  return (
    <div className="mt-[28px] sm:mt-[38px] md:mt-[44px] lg:mt-[49px] xl:mt-[54px] 2xl:mt-[60px] pb-24">
      <div className="container mx-auto px-4 flex items-center flex-col md:flex-row gap-7">
        <div className="md:basis-[360px] basis-auto flex-shrink-0">
          <span className="text-orange-600 text-xs font-black font-inter uppercase">
            F.A.Q.
          </span>
          <h1 className="text-zinc-800 mt-2 text-[28px] leading-tight font-bold font-roboto">
            Ficou mais alguma dúvida? Entre em contato com o nosso suporte
            abaixo 🙂
          </h1>
          <Link href="https://api.whatsapp.com/send/?phone=5511942197690&text=Gostaria+de+falar+com+o+suporte&type=phone_number&app_absent=0" >
          <button className="bg-green-400 mx-auto md:mx-0 w-full hover:bg-green-300 transition-colors justify-center flex gap-3 items-center py-4 max-w-[300px] rounded-[39px] mt-[24px] sm:mt-[26px] md:mt-[28px] lg:mt-[29px] xl:mt-[30px] 2xl:mt-[32px]">
            <Image width={18} height={18} alt="logo" src={"/ww.svg"} />{" "}
            <span className="text-white text-[17px] font-normal font-roboto">
              Suporte
            </span>
          </button>
          </Link>
        </div>
        <Accordion variant="light">
          <AccordionItem
            key="1"
            aria-label="Eu não tenho material para estudar, o curso é para mim?"
            title="Eu não tenho material para estudar, o curso é para mim?"
          >
            Para quem ainda não tem material específico de estudo, temos um
            curso completamente voltado e completo para o TEEM 2024. Todos os
            materiais, atualizações, Guidelines que você precisa nós vamos
            disponibilizar.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Ainda dá tempo de me preparar para o TEEM 2024? "
            title="Ainda dá tempo de me preparar para o TEEM 2024? "
          >
            Claro que sim! Todo o cronograma de estudo vai levar em consideração
            não apenas os pontos que mais caem na sua prova e que não devem ser
            esquecidos, mas também quanto tempo você tem disponível para estudar
            diariamente ou semanalmente, além de adequar todo o seu estudo de
            acordo com o tempo que falta para a realização das provas.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Tenho pouco tempo por dia para estudar, o MEDCOF TEEM 2024 vai me ajudar?"
            title="Tenho pouco tempo por dia para estudar, o MEDCOF TEEM 2024 vai me ajudar?"
          >
            Vamos ser bem claros e transparentes com você: é claro que estudar
            demanda certa dedicação. Mas dentro da sua disponibilidade de tempo
            é possível, sim, otimizar e melhorar sua performance de estudos com
            a mentoria.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionEl;
