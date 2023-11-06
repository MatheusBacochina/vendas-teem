import Image from "next/image";
import Link from "next/link";
const Wbnt = () => {
  return  <Link href="https://api.whatsapp.com/send/?phone=5511942197690&text=Gostaria+de+falar+com+o+suporte&type=phone_number&app_absent=0">
      <button className="h-[72px] w-[72px] fixed right-7 bottom-7">
        <Image alt="logo" fill src="/wicom.svg" />
      </button>
    </Link>
  
};

export default Wbnt;
