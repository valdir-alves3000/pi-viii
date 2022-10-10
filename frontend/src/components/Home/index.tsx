import { MagnifyingGlass } from "phosphor-react";
import { Input } from "../Form/Input";

export function Home() {
  return (
    <div className="max-w-[1344px] w-full min-h-screen h-auto mx-auto flex flex-col items-center rounded-lg overflow-hidden lg:flex-row">
      <div className="w-[600px] h-[500px] mx-auto mt-8 px-16  bg-blue-500 rounded-lg flex flex-col items-center justify-center gap-7">
        <h2 className="text-4xl font-semibold mb-5 text-zinc-300">
          Buscar dados de Paciente
        </h2>
        <Input
          id="cpf"
          type="text"
          placeholder="CPF do Paciente"
          onChange={(e) => {}}
        />
        <button
          // onClick={}
          className="h-12 px-5  bg-transparent rounded-md font-semibold flex gap-3 items-center text-zinc-400 text-3xl border border-slate-800 hover:text-zinc-200 hover:border-white hover:bg-blue-900 tracking-widest  transition"
        >
          <MagnifyingGlass size={32} />
          Buscar
        </button>
      </div>
      <img
        className="rounded-full w-80 lg:w-[500px]"
        src="/virus_mask.jpg"
        alt=""
      />
    </div>
  );
}
