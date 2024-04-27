import JobDetails from "@/app/components/JobDetails";
import { getJobById } from "@/app/components/actions";

export const runtime = "edge";
export default async function Page({ params }) {
  let job = await getJobById(params.id);
  return <>{job && <JobDetails job={job[0]} />}</>;

  // let job = LOCAL_RAW_DATA.find((job) => job.id === parseInt(params.id));
  // return <JobDetails job={job} />;
}
