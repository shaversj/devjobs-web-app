import Card from "@/app/components/Card";

export default function CardList({ jobs }) {
  return (
    <>
      <div
        className={
          "space-y-[48px] pt-[32px] md:grid md:grid-cols-2 md:gap-x-[11px] md:gap-y-[70px] md:space-y-0 md:pt-[45px] lg:grid-cols-3 lg:gap-x-[30px] lg:pt-[80px]"
        }
      >
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
