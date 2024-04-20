import Card from "@/app/components/Card";

export default function CardList({ jobs }) {
  return (
    <>
      <div className={"space-y-[48px] md:grid md:grid-cols-2 md:gap-x-[11px] md:gap-y-[40px] md:space-y-0 lg:grid-cols-3 lg:gap-x-[30px]"}>
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
