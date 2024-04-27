"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

export default function SearchFilter() {
  const [showCheck, setShowCheck] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = (filterName, term, callback) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(filterName, term);
    } else {
      params.delete(filterName);
    }
    replace(`${pathname}?${params.toString()}`);
    if (callback) callback();
  };

  const handleSearch = useDebouncedCallback((term) => handleFilter("jobFilter", term), 0);
  const handleLocation = useDebouncedCallback((location) => handleFilter("locationFilter", location), 100);
  const handleContract = useDebouncedCallback(
    () => handleFilter("contractFilter", searchParams.get("contractFilter") ? null : "Full Time", () => setShowCheck(!showCheck)),
    100,
  );

  return (
    <div
      className={
        "flex h-[80px] -translate-y-1/2 items-center rounded-md bg-white pl-6 pr-4 font-kumbhSans md:w-[689px] md:-translate-y-1/4 lg:w-[1110px] lg:pl-0 lg:pr-0 dark:bg-[#18202e]"
      }
    >
      <img src={"/assets/desktop/icon-search.svg"} alt={"search"} className={"pr-4 lg:pl-[32px]"} />
      <input
        className={
          "h-[20px] w-[105px] text-secondary-dark-grey placeholder:font-light focus:outline-none md:w-[150px] lg:w-[312px] dark:bg-[#18202e]"
        }
        placeholder={"Filter by title"}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("jobFilter")?.toString()}
      />

      <img src={"/assets/tablet/line.svg"} alt={"line"} className={"hidden md:block lg:pl-[119px]"} />

      <img src={"/assets/desktop/icon-location.svg"} alt={"location"} className={"hidden pl-[23px] md:block"} />
      <input
        onChange={(e) => {
          handleLocation(e.target.value);
        }}
        className={
          "hidden h-[20px] w-[150px] pl-6 text-secondary-dark-grey placeholder:font-light focus:outline-none md:block lg:w-[135px] lg:pl-4 dark:bg-[#18202e]"
        }
        placeholder={"Filter by location"}
        defaultValue={searchParams.get("locationFilter")?.toString()}
      />

      <img src={"/assets/tablet/line.svg"} alt={"line"} className={"hidden md:block md:pl-6 lg:pl-[108px]"} />

      <button
        onClick={() => {
          handleContract();
        }}
        className={"ml-5 hidden h-[24px] w-[24px] items-center justify-center bg-[#e7e8e9] md:flex lg:ml-[32px] dark:bg-[#313742]"}
      >
        {showCheck && <img src={"/assets/desktop/icon-check.svg"} alt={"check"} />}
      </button>

      <span className={"hidden text-nowrap pl-4 font-bold text-primary-very-dark-blue md:block dark:text-white"}>Full Time</span>

      <button className={"ml-[26px] hidden h-[48px] rounded-md bg-[#5964e0] font-semibold text-white md:block md:w-[80px] lg:-mr-8 lg:w-[123px]"}>
        Search
      </button>

      <div className={"ml-auto flex gap-x-6 md:hidden"}>
        <button>
          <img className={"h-[20px] w-[20px]"} src={"/assets/search/icon-filter.svg"} alt={"filter"} />
        </button>
        <button>
          <img className={"h-[48px] w-[48px]"} src={"/assets/search/icon-search.svg"} alt={"search"} />
        </button>
      </div>
    </div>
  );
}
