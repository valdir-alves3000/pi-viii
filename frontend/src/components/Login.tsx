import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Input } from "./Form/Input";

export function Login() {
  const navigate = useNavigate();

  const sweetalert = () => {
    Swal.fire({
      icon: "info",
      title: "Operação Não Permitida",
      text: "Contate um admistrador para realizar seu cadastro",
      background: "#001542",
      color: "#f5f5f0",
      confirmButtonColor: "#000E35",
    });
  };

  const handleRegister = (e: any) => {
    navigate("/register");
  };

  return (
    <div className="max-w-[1344px] w-full min-h-screen h-auto mx-auto flex flex-col items-center rounded-lg overflow-hidden lg:flex-row">
      <div className="w-[600px] h-[500px] mx-auto mt-8 px-8  bg-blue-500 rounded-lg flex flex-col items-center justify-center gap-2">
        <h2 className="text-zinc-400 text-4xl mb-8">Faça o login</h2>
        <Input id="email" type="text" placeholder="Digite seu Email" />
        <Input id="password" type="password" placeholder="Sua Senha" />
        <button
          onClick={handleRegister}
          className="h-12 px-5  bg-transparent rounded-md font-semibold flex items-center text-zinc-400 text-3xl border border-slate-800 hover:text-zinc-200 hover:border-white hover:bg-blue-900 tracking-widest  transition "
        >
          Entrar
        </button>
        <h2 className="cursor-pointer mt-3" onClick={sweetalert}>
          não tem cadastro? <span className="font-bold">Cadastrar agora</span>
        </h2>
      </div>
      <img
        className="rounded-full w-80 lg:w-[500px]"
        src="/virus_mask.jpg"
        alt=""
      />
    </div>
  );
}
