import Logo from "@/app/_components/Logo";

export default function Card({ logo, company, postedAt, contract, position, location }) {
  return (
    <>
      <article className={"relative h-[228px] w-[327px] rounded-xl bg-white px-[32px]"}>
        <Logo logo={logo} company={company} />
        <div className={"pt-[49px]"}>
          <div className={"flex items-baseline gap-x-[12px] font-light text-secondary-dark-grey"}>
            {postedAt} <img src={"/assets/card-oval.svg"} alt={"oval"} /> {contract}
          </div>
          <h3 className={"pt-[16px] text-h3 font-bold"}>{position}</h3>
          <span className={"text-[17px] font-light text-secondary-dark-grey"}>{company}</span>
          <h3 className={"pt-[44px] text-h4 font-bold text-primary-violet"}>{location}</h3>
        </div>
      </article>
    </>
  );
}
