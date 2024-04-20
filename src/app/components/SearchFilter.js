"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("jobFilter", term);
    } else {
      params.delete("jobFilter");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={"flex h-[80px] -translate-y-1/2 items-center rounded-md bg-white pl-6 pr-4"}>
      <input
        className={"h-[20px] w-[105px] text-secondary-dark-grey focus:outline-none"}
        placeholder={"Filter by title"}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("jobFilter")?.toString()}
      />
      <div className={"ml-auto flex gap-x-6"}>
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
