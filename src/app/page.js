import CardList from "@/app/components/CardList";
import JobDetails from "@/app/components/JobDetails";
import SearchFilter from "@/app/components/SearchFilter";
import { getJobsByFilters } from "@/app/components/actions";

export default async function Home({ searchParams }) {
  let params = new URLSearchParams(searchParams);
  let jobFilter = params.get("jobFilter");
  let locationFilter = params.get("locationFilter");
  let contractFilter = params.get("contractFilter");

  const filteredData = await getJobsByFilters(jobFilter, locationFilter, contractFilter);

  return (
    <>
      <div className={"min-h-screen bg-secondary-light-grey px-6 md:px-[40px] lg:px-[165px]"}>
        <SearchFilter />
        {/*<Job />*/}
        <CardList jobs={filteredData} />
      </div>
    </>
  );
}
