export default function Header() {
  return (
    <header className={"grid h-[136px] [grid-template-areas:box]"}>
      <picture className={"[grid-area:box]"}>
        <source media="(min-width: 1440px)" srcSet={"/assets/desktop/bg-pattern-header.svg"} />
        <source media="(min-width: 768px)" srcSet={"/assets/tablet/bg-pattern-header.svg"} />
        <img src={"/assets/mobile/bg-pattern-header.svg"} alt={"bg-pattern-header"} />
      </picture>
      <div className={"pl-[24px] pt-[32px] [grid-area:box] md:pl-[40px] md:pt-[42px] lg:pl-[165px] lg:pt-[35px]"}>
        <img src={"/assets/desktop/logo.svg"} alt={"logo"} />
      </div>
    </header>
  );
}
