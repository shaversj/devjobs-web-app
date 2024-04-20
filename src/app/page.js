import mydata from "../assets/data.json";
import CardList from "@/app/_components/CardList";
import Header from "@/app/_components/Header";
import Job from "@/app/_components/Job";
import SearchFilter from "@/app/_components/SearchFilter";
import { getJobsByTitle } from "@/app/_components/actions";

export default async function Home({ searchParams }) {
  let params = new URLSearchParams(searchParams);
  let term = params.get("jobFilter");

  const filteredData = await getJobsByTitle(term, mydata);

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
