import Logo from "@/app/components/Logo";

export default function CompanyCard({ job }) {
  return (
    <>
      <div className={"relative z-30 -mt-[18px]"}>
        <div className={"flex w-full flex-col items-center rounded-lg bg-white"}>
          <Logo logo={job.logo} company={job.company} />
          <h3 className={"pt-[49px] text-h3 font-bold"}>{job.company}</h3>
          <span className={"pt-[8px] font-light text-[#6E8098]"}>scoot.com</span>

          <button className={"mb-[32px] mt-6 h-[48px] w-[147px] bg-[#eeeffc] font-semibold"}>
            <span className={"text-[#5964E0] "}>Company Site</span>
          </button>
        </div>
      </div>
    </>
  );
}
