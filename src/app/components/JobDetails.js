import CompanyCard from "@/app/components/CompanyCard";
import JobCard from "@/app/components/JobCard";

export default function JobDetails({ job }) {
  return (
    <>
      <div className={"font-kumbhSans md:mx-[48px] md:w-[689px] lg:mx-auto lg:w-[730px]"}>
        <CompanyCard job={job} />

        <div className={"mt-6 w-full rounded-lg bg-white px-6 md:p-[48px] dark:bg-primary-very-dark-blue"}>
          <div className={"md:flex md:items-center"}>
            <JobCard job={job} />
            <button
              className={"mt-[50px] h-[48px] w-[279px] rounded-lg bg-[#5964E0] font-bold text-white md:ml-auto md:mt-0 md:h-[48px] md:w-[141px]"}
            >
              Apply Now
            </button>
          </div>

          <section className={"pt-[32px]"}>
            <p className={"text-secondary-dark-grey"}>{job.description}</p>
          </section>

          <section className={"pt-[40px]"}>
            <h3 className={"text-h3 font-bold text-primary-very-dark-blue dark:text-white"}>Requirements</h3>
            <p className={"pt-[28px] text-secondary-dark-grey"}>{job.requirements.content}</p>
            <ul className={"list-outside list-disc px-[16px] pt-[24px] text-secondary-dark-grey"}>
              {job.requirements.items.map((item, index) => (
                <li className={"pl-[20px]"} key={index}>
                  <span className={""}>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={"pt-[40px]"}>
            <h3 className={"text-h3 font-bold text-primary-very-dark-blue dark:text-white"}>What you will do</h3>
            <p className={"pt-[28px] text-secondary-dark-grey"}>{job.role.content}</p>
            <ul className={"list-outside list-disc px-[16px] pt-[24px] text-secondary-dark-grey"}>
              {job.role.items.map((item, index) => (
                <li className={"pl-[20px]"} key={index}>
                  <span className={""}>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <div className={"-mx-6 mt-[64px] flex h-[96px] items-center justify-center overflow-visible bg-white dark:bg-primary-very-dark-blue"}>
        <div className={"flex items-center justify-center md:w-[689px] md:justify-between lg:w-[730px]"}>
          <div className={"hidden md:block"}>
            <h3 className={"text-h3 font-semibold dark:text-white"}>{job.position}</h3>
            <h4 className={"text-h4 font-light text-secondary-dark-grey"}>So Digital Inc.</h4>
          </div>
          <button className={"h-[48px] w-[327px] rounded-md bg-[#5964E0] font-bold text-white md:w-[141px]"}>Apply Now</button>
        </div>
      </div>
    </>
  );
}
