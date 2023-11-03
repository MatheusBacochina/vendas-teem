import Link from 'next/link'
const Nav = () => {
  return (
    <div className="bg-black md:sticky top-0 z-50">
      <div className="container mx-auto flex py-5 px-4 md:gap-9 justify-between gap-4 flex-col md:flex-row items-center">
        <span className=" text-white text-center text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]  font-black font-roboto uppercase">
          Mentoria <span className="text-orange-600 font-black">GRATUITA</span>{" "}
          PARA OS PRIMEIROS 20 INSCRITOS
        </span>
        <div className="w-[calc(100%-32px)] max-w-[376px] md:max-w-[437px] lg:max-w-[466px] overflow-hidden h-[30px] bg-zinc-100 rounded-[17px]">
          <div className="bg-[#FF0505] rounded-sm w-[90%] h-full animation_bar flex items-center">
            <span className="text-white text-sm pl-4 font-roboto">
              Restam apenas 5 vagas!
            </span>
          </div>
        </div>
        <Link href="#card">
        <button  className="px-5 py-4 bg-orange-600 rounded-xl hover:bg-orange-400 transition-colors flex items-center">
          <span className="text-xs min-w-[157px] whitespace-nowrap shrink-0 font-bold font-roboto uppercase text-white">
            Garanta sua vaga AGORA!
          </span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
