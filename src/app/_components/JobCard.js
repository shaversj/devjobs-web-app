export default function JobCard({ data }) {
  return (
    <div className={"pt-[40px]"}>
      <div className={"flex items-baseline gap-x-[12px] font-light text-secondary-dark-grey"}>
        {data.postedAt} <img src={"/assets/card-oval.svg"} alt={"oval"} /> {data.contract}
      </div>
      <h3 className={"pt-[8px] text-h3 font-bold"}>{data.position}</h3>
      <h3 className={"pt-[12px] text-[14px] font-bold text-primary-violet"}>{data.location}</h3>
    </div>
  );
}
