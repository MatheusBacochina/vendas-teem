import Image from "next/image";
import Link from "next/link";
const Wbnt = () => {
  return  <Link href="https://www.grupomedcof.com.br/suporte-whatsapp">
      <button className="h-[52px] sm:h-[59px] md:h-[63px] w-[52px] sm:w-[59px] md:w-[63px]  fixed right-7 bottom-7">
        <Image alt="logo" style={{fill: 'blue'}} fill src="/wicom.svg" />
      </button>
    </Link>
  
};

export default Wbnt;
