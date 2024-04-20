import Card from "@/app/components/Card";

export default function CardList({ jobs }) {
  return (
    <>
      <div className={"space-y-[48px]"}>
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
