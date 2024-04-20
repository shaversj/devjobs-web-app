export default function Logo({ logo, company }) {
  let logoBackgroundVarients = {
    Scoot: "[background-color:hsl(36_87%_49%)]",
    Blogr: "[background-color:hsl(12_79%_52%)]",
    Vector: "[background-color:hsl(235_10%_23%)]",
    "Office Lite": "[background-color:hsl(227_62%_48%)]",
    Pod: "[background-color:hsl(216_46%_14%)]",
    Creative: "[background-color:hsl(295_55%_21%)]",
    Pomodoro: "[background-color:hsl(254_71%_45%)]",
    Maker: "[background-color:hsl(218_58%_31%)]",
    Coffeeroasters: "[background-color:hsl(29_60%_87%)]",
    Mastercraft: "[background-color:hsl(0_0%_12%)]",
    Crowdfund: "[background-color:hsl(157_57%_50%)]",
    Typemaster: "[background-color:hsl(22_89%_52%)]",
  };

  return (
    <>
      <div
        className={`absolute z-10 flex h-[50px] w-[50px] translate-y-[-50%] transform items-center justify-center rounded-xl ${logoBackgroundVarients[company]} `}
      >
        <img src={logo.slice(1)} alt={company} />
      </div>
    </>
  );
}
