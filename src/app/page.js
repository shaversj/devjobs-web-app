import CardList from "@/app/_components/CardList";
import Job from "@/app/_components/Job";
import SearchFilter from "@/app/_components/SearchFilter";
import { getJobsByFilters } from "@/app/_components/actions";

export default async function Home({ searchParams }) {
  let params = new URLSearchParams(searchParams);
  let jobFilter = params.get("jobFilter");
  let locationFilter = params.get("locationFilter");
  let contractFilter = params.get("contractFilter");

  const filteredData = await getJobsByFilters(jobFilter, locationFilter, contractFilter);

  return (
    <>
      <div className={"min-h-screen bg-secondary-light-grey px-6"}>
        <SearchFilter />
        {/*<Job />*/}
        <CardList data={filteredData} />
      </div>
    </>
  );
}
