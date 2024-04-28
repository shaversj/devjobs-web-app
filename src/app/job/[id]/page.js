import JobDetails from "@/app/components/JobDetails";
import { getJobById } from "@/app/components/actions";

export const runtime = "edge";

export default async function Page({ params }) {
  let job = await getJobById(params.id);
  return <>{job && <JobDetails job={job[0]} />}</>;
}
