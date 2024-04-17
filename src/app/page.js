import Card from "@/app/_components/Card";
import mydata from "../assets/data.json";
import CardList from "@/app/_components/CardList";

export default function Home() {
  return (
    <>
      <div className={"min-h-screen bg-secondary-light-grey"}>
        <header>
          <h1>Home</h1>
        </header>
        <div className={""}>
          <h1>Search</h1>
        </div>

        <CardList data={mydata} />
      </div>
    </>
  );
}
