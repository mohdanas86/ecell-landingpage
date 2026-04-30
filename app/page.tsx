import { PanelLeft } from "./component/sections/PanelLeft";
import { PanelCenter } from "./component/sections/PanelCenter";
import { PanelRight } from "./component/sections/PanelRight";

export default function Home() {
  return (
    <main className="relative z-10 grid w-full flex-1 min-h-0 grid-cols-3 lg:overflow-hidden">
      <PanelLeft />
      <PanelCenter />
      <PanelRight />
    </main>
  );
}
