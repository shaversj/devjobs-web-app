import { getJobById } from "@/app/components/actions";
import JobDetails from "@/app/components/JobDetails";
import localRawData from "@/app/utils/data.json" with { type: "json" };

// export async function generateStaticParams() {
//   const jobs = localRawData;
//   return jobs.map((job) => ({
//     id: job.id.toString(),
//   }));
// }

export default async function Page({ params }) {
  // let job = await getJobById(params.id);
  // return <>{job && <JobDetails job={job[0]} />}</>;

  let job = localRawData.find((job) => job.id === parseInt(params.id));
  return <JobDetails job={job} />;
}
