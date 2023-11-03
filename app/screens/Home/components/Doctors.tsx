import Image from "next/image";
const Doctors = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-12 my-[64px] sm:my-[80px] md:my-[88px] lg:my-[96px] xl:my-[104px] 2xl:my-[112px]">
      <div className="max-w-[920px] mx-auto">
        <h1 className="text-center text-slate-800 text-3xl md:text-4xl  lg:text-[50px] font-urtanist uppercase leading-9">
          <span className="font-bold"> COM QUEM</span>{" "}
          <br className="md:hidden" />
          VOU APRENDER
        </h1>
        <div className="flex mt-14 md:mt-16 flex-col lg:flex-row lg:gap-7 items-center lg:items-end">
          <div className="h-[369px] relative isolate flex justify-center min-w-[252px] shrink-0 grow-0">
            <div className="w-full h-[272px] -z-10 rounded-tl-[120px] rounded-tr-[120px] bg-[#660606] absolute bottom-0" />
            <Image
              alt="doctor"
              src="/doctors/aurea.png"
              width={205}
              height={369}
              className="doctor_shadow"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col max-w-[625px] lg:max-w-full">
            <div className="px-5 py-2.5 self-center lg:self-start mt-7 lg:mt-0 bg-[#660606] rounded-lg justify-start items-center gap-3.5 inline-flex">
              <span className="text-stone-100 text-lg text-center font-normal font-urbanist uppercase leading-snug">
                ENDOCRINOLOGISTA TITULADA -{" "}
                <span className="font-bold">USP</span>
              </span>
            </div>
            <h1 className="text-slate-800 mt-4 text-[30px] md:text-[35px] lg:text-[40px] text-center lg:text-left font-normal font-urbanist">
              Dra. Áurea Magalhães
            </h1>
            <p className="text-slate-800 text-center lg:text-left text-base md:text-lg lg:text-xl font-normal font-urtanist mt-2">
              - Graduação em medicina pela UFRR <br />
              - Residência médica em clínica médica pelo Hospital Moinhos Vento
              <br />
              - Residência médica em endocrinologia e metabologia pelo HCFMUSP
              <br />- Preceptora dos residentes de endocrinologia do HCFMUSP em
              2021
            </p>
          </div>
        </div>
        <div className="max-w-[284px] my-14 h-[1px] mx-auto bg-[#1A2541] bg-opacity-25"></div>
        <div className="flex flex-col lg:flex-row-reverse lg:gap-7 items-center lg:items-end">
          <div className="h-[369px] relative isolate flex justify-center min-w-[252px] shrink-0 grow-0">
            <div className="w-full h-[272px] -z-10 rounded-tl-[120px] rounded-tr-[120px] bg-[#1A2541] absolute bottom-0" />
            <Image
              alt="doctor"
              src="/doctors/natasha.png"
              width={255}
              height={469}
              className="doctor_shadow"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col max-w-[625px] lg:max-w-full">
            <div className="px-5 py-2.5  self-center lg:self-start mt-7 lg:mt-0 bg-[#1A2541] rounded-lg justify-start items-center gap-3.5 inline-flex">
              <span className="text-stone-100 text-lg text-center font-normal font-urbanist uppercase leading-snug">
                ENDOCRINOLOGISTA TITULADA -{" "}
                <span className="font-bold">USP</span>
              </span>
            </div>
            <h1 className="text-slate-800 mt-4 text-[30px] md:text-[35px] lg:text-[40px] text-center lg:text-left font-normal font-urbanist">
              Dra. Natasha Cartollano
            </h1>
            <p className="text-slate-800 text-center lg:text-left text-base md:text-lg lg:text-xl font-normal font-urtanist mt-2">
              - Graduação em medicina pela Escola Paulista de Medicina
              <br />
              - Residência médica em clínica médica pela UNIFESP
              <br />
              - Residência médica em endocrinologia e metabologia pelo HCFMUSP.
              <br />- Primeira colocada no TEEM 2021.
            </p>
          </div>
        </div>
        <div className="max-w-[284px] my-14 h-[1px] mx-auto bg-[#1A2541] bg-opacity-25"></div>
        <div className="flex flex-col lg:flex-row lg:gap-7 items-center lg:items-end">
          <div className="h-[369px] relative isolate flex justify-center min-w-[252px] shrink-0 grow-0">
            <div className="w-full h-[272px] -z-10 rounded-tl-[120px] rounded-tr-[120px] bg-[#660606] absolute bottom-0" />
            <Image
              alt="doctor"
              src="/doctors/anna.png"
              width={255}
              height={469}
              className="doctor_shadow"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col max-w-[625px] lg:max-w-full">
            <div className="px-5 py-2.5  self-center lg:self-start mt-7 lg:mt-0 bg-[#660606] rounded-lg justify-start items-center gap-3.5 inline-flex">
              <span className="text-stone-100 text-lg text-center font-normal font-urbanist uppercase leading-snug">
                ENDOCRINOLOGISTA TITULADA -{" "}
                <span className="font-bold">USP</span>
              </span>
            </div>
            <h1 className="text-slate-800 mt-4 text-[30px] md:text-[35px] lg:text-[40px] text-center lg:text-left font-normal font-urbanist">
              Dra. Anna Louise Stellfeld
            </h1>
            <p className="text-slate-800 text-center lg:text-left text-base md:text-lg lg:text-xl font-normal font-urtanist mt-2">
              - Graduação em medicina pela UFPR <br />
              - Residência médica em clínica médica pelo HCFMUSP <br />-
              Residência médica em endocrinologia e metabologia pelo HCFMUSP{" "}
              <br />
              - Doutoranda em neuroendocrinologia pelo HCFMUSP <br />
            </p>
          </div>
        </div>
        <div className="max-w-[284px] my-14 h-[1px] mx-auto bg-[#1A2541] bg-opacity-25"></div>
        <div className="flex flex-col lg:flex-row-reverse lg:gap-7 items-center lg:items-end">
          <div className="h-[369px] relative isolate flex justify-center min-w-[252px] shrink-0 grow-0">
            <div className="w-full h-[272px] -z-10 rounded-tl-[120px] rounded-tr-[120px] bg-[#1A2541] absolute bottom-0" />
            <Image
              alt="doctor"
              src="/doctors/gabriel.png"
              width={255}
              height={469}
              className="doctor_shadow"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col max-w-[625px] lg:max-w-full">
            <div className="px-5 py-2.5  self-center lg:self-start mt-7 lg:mt-0 bg-[#1A2541] rounded-lg justify-start items-center gap-3.5 inline-flex">
              <span className="text-stone-100 text-lg text-center font-normal font-urbanist uppercase leading-snug">
                ENDOCRINOLOGISTA TITULADO -{" "}
                <span className="font-bold">USP</span>
              </span>
            </div>
            <h1 className="text-slate-800 mt-4 text-[30px] md:text-[35px] lg:text-[40px] text-center lg:text-left font-normal font-urbanist">
              Dr. Gabriel Neimann
            </h1>
            <p className="text-slate-800 text-center lg:text-left text-base md:text-lg lg:text-xl font-normal font-urtanist mt-2">
              - Graduação em medicina pela Escola Bahiana de Medicina <br />
              - Residência médica em clínica médica pelo HCFMUSP <br />-
              Residência médica em endocrinologia e metabologia pelo HCFMUSP{" "}
              <br />- Preceptor dos residentes de endocrinologia da USP em 2023
            </p>
          </div>
        </div>
        <div className="max-w-[284px] my-14 h-[1px] mx-auto bg-[#1A2541] bg-opacity-25"></div>
        <div className="flex flex-col lg:flex-row lg:gap-7 items-center lg:items-end">
          <div className="h-[369px] relative isolate flex justify-center min-w-[252px] shrink-0 grow-0">
            <div className="w-full h-[272px] -z-10 rounded-tl-[120px] rounded-tr-[120px] bg-[#660606] absolute bottom-0" />
            <Image
              alt="doctor"
              src="/doctors/roberta.png"
              width={255}
              height={469}
              className="doctor_shadow"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col max-w-[625px] lg:max-w-full">
            <div className="px-5 py-2.5  self-center lg:self-start mt-7 lg:mt-0 bg-[#660606] rounded-lg justify-start items-center gap-3.5 inline-flex">
              <span className="text-stone-100 text-lg text-center font-normal font-urbanist uppercase leading-snug">
                ENDOCRINOLOGISTA TITULADA -{" "}
                <span className="font-bold">USP</span>
              </span>
            </div>
            <h1 className="text-slate-800 mt-4 text-[30px] md:text-[35px] lg:text-[40px] text-center lg:text-left font-normal font-urbanist">
              Dra. Roberta Andrade
            </h1>
            <p className="text-slate-800 text-center lg:text-left text-base md:text-lg lg:text-xl font-normal font-urtanist mt-2">
              - Graduação em medicina pela FMUSP <br />
              - Residência médica em pediatria pelo HCFMUSP/ICr <br />-
              Residência médica em endocrinologia pediátrica no HCFMUSP/ICr{" "}
              <br />- Preceptora dos residentes de endocrinologia pediátrica no
              HCFMUSP/ICr
            </p>
          </div>
        </div>
        <div className="max-w-[284px] my-14 h-[1px] mx-auto bg-[#1A2541] bg-opacity-25"></div>
        <div className="flex flex-col lg:flex-row-reverse lg:gap-7 items-center lg:items-end">
          <div className="h-[369px] relative isolate flex justify-center min-w-[252px] shrink-0 grow-0">
            <div className="w-full h-[272px] -z-10 rounded-tl-[120px] rounded-tr-[120px] bg-[#1A2541] absolute bottom-0" />
            <Image
              alt="doctor"
              src="/doctors/iza.png"
              width={255}
              height={469}
              className="doctor_shadow"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col max-w-[625px] lg:max-w-full">
            <div className="px-5 py-2.5 self-center lg:self-start mt-7 lg:mt-0 bg-[#1A2541] rounded-lg justify-start items-center gap-3.5 inline-flex">
              <span className="text-stone-100 text-lg text-center font-normal font-urbanist uppercase leading-snug">
                ENDOCRINOLOGISTA TITULADA -{" "}
                <span className="font-bold">USP</span>
              </span>
            </div>
            <h1 className="text-slate-800 mt-4 text-[30px] md:text-[35px] lg:text-[40px] text-center lg:text-left font-normal font-urbanist">
              Dra. Iza Machado
            </h1>
            <p className="text-slate-800 text-center lg:text-left text-base md:text-lg lg:text-xl font-normal font-urtanist mt-2">
              - Graduação em medicina pela Escola Superior de Ciências da Santa
              Casa de Misericórdia de Vitória (EMESCAM) <br />
              - Residência médica em clínica médica pelo HCFMUSP <br />
              - Residência médica em endocrinologia e metabologia pelo HCFMUSP.{" "}
              <br />
              - Preceptora dos residentes de endocrinologia do HCFMUSP em 2022{" "}
              <br />- Doutoranda em Endocrinologia feminina no HCFMUSP.
            </p>
          </div>
        </div>
        <div className="max-w-[284px] my-14 h-[1px] mx-auto bg-[#1A2541] bg-opacity-25"></div>
        <div className="flex flex-col lg:flex-row lg:gap-7 items-center lg:items-end">
          <div className="h-[369px] relative isolate flex justify-center min-w-[252px] shrink-0 grow-0">
            <div className="w-full h-[272px] -z-10 rounded-tl-[120px] rounded-tr-[120px] bg-[#660606] absolute bottom-0" />
            <Image
              alt="doctor"
              src="/doctors/luiz.png"
              width={255}
              height={469}
              className="doctor_shadow"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col max-w-[625px] lg:max-w-full">
            <div className="px-5 py-2.5 self-center lg:self-start mt-7 lg:mt-0 bg-[#660606] rounded-lg justify-start items-center gap-3.5 inline-flex">
              <span className="text-stone-100 text-lg text-center font-normal font-urbanist uppercase leading-snug">
                ENDOCRINOLOGISTA TITULADO -{" "}
                <span className="font-bold">USP</span>
              </span>
            </div>
            <h1 className="text-slate-800 mt-4 text-[30px] md:text-[35px] lg:text-[40px] text-center lg:text-left font-normal font-urbanist">
              Dr. Luiz Fernando
            </h1>
            <p className="text-slate-800 text-center lg:text-left text-base md:text-lg lg:text-xl font-normal font-urtanist mt-2">
            - Graduação em medicina pela UNESP <br />
- Residência médica em clínica médica pelo HCFMUSP <br />
- Residência médica em endocrinologia e metabologia pelo HCFMUSP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
