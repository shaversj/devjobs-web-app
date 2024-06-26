import Logo from "@/app/components/Logo";

export default function CompanyCard({ job }) {
  return (
    <>
      <div className={"relative z-30 -mt-[18px] dark:bg-primary-very-dark-blue"}>
        <div
          className={
            "flex w-full flex-col items-center rounded-lg bg-white font-kumbhSans md:w-[689px] md:flex-row md:items-center md:rounded-xl lg:w-[730px] dark:bg-primary-very-dark-blue"
          }
        >
          <Logo logo={job.logo} company={job.company} varient={"card"} />

          <div className={"flex flex-col items-start md:pl-[40px]"}>
            <h3 className={"pt-[49px] text-h3 font-semibold md:pt-0 md:text-[22px] md:tracking-wide dark:text-white"}>{job.company}</h3>
            <h3 className={"pt-[8px] font-light text-[#6E8098]"}>scoot.com</h3>
          </div>
          <button
            className={
              "mb-[32px] mt-6 h-[48px] w-[147px] rounded-md bg-[#eeeffc] font-semibold md:mb-0 md:ml-auto md:mr-[40px] md:mt-0 dark:bg-[#303641]"
            }
          >
            <span className={"text-[#5964E0] dark:text-white"}>Company Site</span>
          </button>
        </div>
      </div>
    </>
  );
}
