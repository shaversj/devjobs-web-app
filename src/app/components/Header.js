export default function Header() {
  return (
    <header className={"grid h-[136px] [grid-template-areas:box]"}>
      <picture className={"[grid-area:box]"}>
        <source media="(min-width: 1440px)" srcSet={"/assets/desktop/bg-pattern-header.svg"} />
        <source media="(min-width: 768px)" srcSet={"/assets/tablet/bg-pattern-header.svg"} />
        <img src={"/assets/mobile/bg-pattern-header.svg"} alt={"bg-pattern-header"} />
      </picture>
      <div className={"self-center px-6 [grid-area:box]"}>
        <img src={"/assets/desktop/logo.svg"} alt={"logo"} />
      </div>
    </header>
  );
}
