import { getJobById } from "@/app/components/actions";
import JobDetails from "@/app/components/JobDetails";

export default async function Page({ params }) {
  let job = await getJobById(params.id);
  return <>{job && <JobDetails job={job[0]} />}</>;
}
