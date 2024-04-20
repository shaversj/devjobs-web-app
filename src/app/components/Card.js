import Logo from "@/app/components/Logo";
import Link from "next/link";

export default function Card({ job }) {
  return (
    <>
      <article className={"relative h-[228px] w-[327px] rounded-xl bg-white px-[32px]"}>
        <Link href={`/job/${job.id}`}>
          <Logo logo={job.logo} company={job.company} />
          <div className={"pt-[49px]"}>
            <div className={"flex items-baseline gap-x-[12px] font-light text-secondary-dark-grey"}>
              {job.postedAt} <img src={"/assets/card-oval.svg"} alt={"oval"} /> {job.contract}
            </div>
            <h3 className={"pt-[16px] text-h3 font-bold"}>{job.position}</h3>
            <span className={"text-[17px] font-light text-secondary-dark-grey"}>{job.company}</span>
            <h3 className={"pt-[44px] text-h4 font-bold text-primary-violet"}>{job.location}</h3>
          </div>
        </Link>
      </article>
    </>
  );
}
