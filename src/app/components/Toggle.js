import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className={"flex items-center gap-x-4"}>
        <img src={"/assets/desktop/icon-sun.svg"} alt={"sun"} />
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-white" : "bg-white"} relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${enabled ? "translate-x-6" : "translate-x-1"} inline-block h-3.5 w-3.5 transform rounded-full bg-[#5963df] transition`}
          />
        </Switch>
        <img className={"h-3 w-3"} src={"/assets/desktop/icon-moon.svg"} alt={"moon"} />
      </div>
    </>
  );
}
