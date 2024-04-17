import Card from "@/app/_components/Card";

export default function CardList({ data }) {
  return (
    <>
      <div className={"space-y-[48px]"}>
        {data.map((job) => (
          <Card key={job.id} logo={job.logo} company={job.company} postedAt={job.postedAt} contract={job.contract} position={job.position} location={job.location} />
        ))}
      </div>
    </>
  );
}
