export default function JobCard({ job }) {
  return (
    <div className={"pt-[40px] font-kumbhSans md:pt-0 dark:bg-primary-very-dark-blue"}>
      <div className={"flex items-baseline gap-x-[12px] font-light text-secondary-dark-grey"}>
        {job.postedAt} <img src={"/assets/card-oval.svg"} alt={"oval"} /> {job.contract}
      </div>
      <h3 className={"pt-[8px] text-h3 font-bold dark:text-white"}>{job.position}</h3>
      <h3 className={"pt-[12px] text-[14px] font-bold text-primary-violet"}>{job.location}</h3>
    </div>
  );
}
