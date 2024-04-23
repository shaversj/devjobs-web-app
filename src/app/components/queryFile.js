import { LOCAL_RAW_DATA } from "@/app/constants/data";

export function getJobsByFiltersFromFile(jobFilter, locationFilter, contractFilter) {
  return LOCAL_RAW_DATA.filter((job) => {
    let jobLocation = job.location.toLowerCase();
    let jobPosition = job.position.toLowerCase();
    let jobContract = job.contract.toLowerCase();
    let jobFilterLower = jobFilter ? jobFilter.toLowerCase() : null;
    let locationFilterLower = locationFilter ? locationFilter.toLowerCase() : null;
    let contractFilterLower = contractFilter ? contractFilter.toLowerCase() : null;

    return (
      (!jobFilterLower || jobPosition.includes(jobFilterLower)) &&
      (!locationFilterLower || jobLocation.includes(locationFilterLower)) &&
      (!contractFilterLower || jobContract.includes(contractFilterLower))
    );
  });
}
