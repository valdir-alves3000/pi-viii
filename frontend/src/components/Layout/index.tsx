import { Buildings, MapPinLine, Users } from "phosphor-react";
import { Button } from "../Form/Button";

export function Layout() {
  return (
    <div className="max-w-[1344px] w-full min-h-screen h-auto mx-auto flex flex-col items-center rounded-lg overflow-hidden lg:flex-row">
      <div className="w-[600px] h-[500px] mx-auto mt-8 px-16  bg-blue-500 rounded-lg flex flex-col items-center justify-center gap-10">
        <h2 className="text-4xl font-semibold mb-5 text-zinc-300">
          Buscar dados
        </h2>

        <Button text="Usuários" icon={<Users size={27} />} />
        <Button text="Locais" icon={<Buildings size={27} />} />
        <Button text="Localizações" icon={<MapPinLine size={27} />} />
      </div>
      <img
        className="rounded-full w-80 lg:w-[500px]"
        src="/virus_mask.jpg"
        alt=""
      />
    </div>
  );
}
