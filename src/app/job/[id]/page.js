import JobDetails from "@/app/components/JobDetails";
import { LOCAL_RAW_DATA } from "@/app/constants/data";

// export async function generateStaticParams() {
//   const jobs = localRawData;
//   return jobs.map((job) => ({
//     id: job.id.toString(),
//   }));
// }

export default async function Page({ params }) {
  // let job = await getJobById(params.id);
  // return <>{job && <JobDetails job={job[0]} />}</>;

  let job = LOCAL_RAW_DATA.find((job) => job.id === parseInt(params.id));
  return <JobDetails job={job} />;
}
