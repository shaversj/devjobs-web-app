import Logo from "@/app/components/Logo";
import Link from "next/link";

export default function Card({ job }) {
  return (
    <>
      <article className={"relative w-[327px] rounded-xl bg-white pl-[32px] font-kumbhSans md:w-[339px] lg:w-[350px] dark:bg-primary-very-dark-blue"}>
        <Link href={`/job/${job.id}`}>
          <Logo logo={job.logo} company={job.company} />
          <div className={"h-[228px] pt-[49px] md:h-[253px]"}>
            <div className={"flex items-baseline gap-x-[12px] font-light text-secondary-dark-grey"}>
              {job.postedAt} <img src={"/assets/card-oval.svg"} alt={"oval"} /> {job.contract}
            </div>
            <h3 className={"pt-[16px] text-h3 font-bold dark:text-white"}>{job.position}</h3>
            <span className={"text-[17px] font-light text-secondary-dark-grey"}>{job.company}</span>
            <h3 className={"pt-[44px] text-h4 font-bold text-primary-violet"}>{job.location}</h3>
          </div>
        </Link>
      </article>
    </>
  );
}
