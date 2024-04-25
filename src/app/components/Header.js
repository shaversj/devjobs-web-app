"use client";

import Toggle from "@/app/components/Toggle";

export default function Header() {
  return (
    <header className={"grid h-[136px] [grid-template-areas:box]"}>
      <div className={"grid w-[375px] [grid-area:box] md:w-[768px] lg:w-[1440px]"}>
        <picture className={"[grid-area:box]"}>
          <source media="(min-width: 1440px)" srcSet={"/assets/desktop/bg-pattern-header.svg"} />
          <source media="(min-width: 768px)" srcSet={"/assets/tablet/bg-pattern-header.svg"} />
          <img src={"/assets/mobile/bg-pattern-header.svg"} alt={"bg-pattern-header"} />
        </picture>
        <div className={"mx-6 w-[328px] pt-[32px] [grid-area:box] md:ml-[39px] md:w-[689px] md:pt-[42px] lg:mx-[164px] lg:w-[1110px]  lg:pt-[35px]"}>
          <div className={"flex items-center"}>
            <img src={"/assets/desktop/logo.svg"} alt={"logo"} />
            <div className={"ml-auto "}></div>
            <Toggle />
          </div>
        </div>
      </div>
    </header>
  );
}
