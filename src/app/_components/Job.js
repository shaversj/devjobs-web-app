import Logo from "@/app/_components/Logo";
import CompanyCard from "@/app/_components/CompanyCard";
import JobCard from "@/app/_components/JobCard";

export default function Job() {
  const data = {
    id: 1,
    company: "Scoot",
    logo: "./assets/logos/scoot.svg",
    logoBackground: "hsl(36, 87%, 49%)",
    position: "Senior Software Engineer",
    postedAt: "5h ago",
    contract: "Full Time",
    location: "United Kingdom",
    website: "https://example.com/scoot",
    apply: "https://example.com/scoot/apply",
    description:
      "Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.",
    requirements: {
      content:
        "The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.",
      items: [
        "5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate significant impact that your work has had on the product and/or the team.",
        "Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.",
        "Extremely data-driven.",
        "Ability to debug complex systems.",
      ],
    },
    role: {
      content:
        "We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.",
      items: [
        "This role is for someone who is excited about the early stage - you’ll be responsible for turning the platform vision into reality through smart, efficient building and testing.",
        "Translate the product roadmap into engineering requirements and own the engineering roadmap",
        "Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.",
        "Collaborate with product, design, and external engineering teammates as needed.",
      ],
    },
  };

  return (
    <>
      <div className={""}>
        <CompanyCard data={data} />

        <div className={"mt-6 rounded-lg bg-white px-6"}>
          <JobCard data={data} />
          <button className={"mt-[50px] h-[48px] w-[279px] rounded-lg bg-[#5964E0] font-bold text-white"}>Apply Now</button>

          <section className={"pt-[32px]"}>
            <p className={"text-secondary-dark-grey"}>{data.description}</p>
          </section>

          <section className={"pt-[40px]"}>
            <h3 className={"text-h3 font-bold text-primary-very-dark-blue"}>Requirements</h3>
            <p className={"pt-[28px] text-secondary-dark-grey"}>{data.requirements.content}</p>
            <ul className={"list-outside list-disc px-[16px] pt-[24px] text-secondary-dark-grey"}>
              {data.requirements.items.map((item, index) => (
                <li className={"pl-[20px]"} key={index}>
                  <span className={""}>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={"pt-[40px]"}>
            <h3 className={"text-h3 font-bold text-primary-very-dark-blue"}>What you will do</h3>
            <p className={"pt-[28px] text-secondary-dark-grey"}>{data.role.content}</p>
            <ul className={"list-outside list-disc px-[16px] pt-[24px] text-secondary-dark-grey"}>
              {data.role.items.map((item, index) => (
                <li className={"pl-[20px]"} key={index}>
                  <span className={""}>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <div className={"-mx-6 mt-[64px] flex h-[96px] items-center justify-center overflow-visible bg-white"}>
        <button className={"h-[48px] w-[327px] bg-[#5964E0] font-bold text-white"}>Apply Now</button>
      </div>
    </>
  );
}
