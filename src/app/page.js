import mydata from "../assets/data.json";
import CardList from "@/app/_components/CardList";
import Header from "@/app/_components/Header";
import Job from "@/app/_components/Job";

export default function Home() {
  return (
    <>
      <div className={"min-h-screen bg-secondary-light-grey px-6"}>
        <Job />
        {/*<CardList data={mydata} />*/}
      </div>
    </>
  );
}
