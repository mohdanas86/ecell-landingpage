import { PanelLeft } from "./component/sections/PanelLeft";
import { PanelCenter } from "./component/sections/PanelCenter";
import { PanelRight } from "./component/sections/PanelRight";

export default function Home() {
  return (
    <main className="relative z-10 grid w-full lg:max-h-screen min-h-screen grid-cols-3 lg:overflow-hidden">
      <PanelLeft />
      <PanelCenter />
      <PanelRight />
    </main>
  );
}
