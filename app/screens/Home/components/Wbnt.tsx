import Image from "next/image";
import Link from "next/link";
const Wbnt = () => {
  return  <Link href="https://api.whatsapp.com/send/?phone=5511942197690&text=Gostaria+de+falar+com+o+suporte&type=phone_number&app_absent=0">
      <button className="h-[52px] sm:h-[59px] md:h-[63px] lg:h-[67px] xl:h-[71px] 2xl:h-[75px] w-[52px] sm:w-[59px] md:w-[63px] lg:w-[67px] xl:w-[71px] 2xl:w-[75px] fixed right-7 bottom-7">
        <Image alt="logo" style={{fill: 'blue'}} fill src="/wicom.svg" />
      </button>
    </Link>
  
};

export default Wbnt;
