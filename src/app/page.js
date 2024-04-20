import mydata from "../assets/data.json";
import CardList from "@/app/_components/CardList";
import Header from "@/app/_components/Header";
import Job from "@/app/_components/Job";
import SearchFilter from "@/app/_components/SearchFilter";

export default function Home() {
  return (
    <>
      <div className={"min-h-screen bg-secondary-light-grey px-6"}>
        <SearchFilter />
        {/*<Job />*/}
        {/*<CardList data={mydata} />*/}
      </div>
    </>
  );
}
