import { parseCookies } from "nookies";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { formatData } from "../utils/formatData";
import { sweetalert } from "../utils/sweetalert";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Layout } from "./Layout";
import { Loading } from "./Loading";
import { Text } from "./Text";
import { TextInput } from "./TextInput";

export function Home() {
  const { app_protection_token } = parseCookies();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [cpf, setCPF] = useState("");

  const disabled = cpf.length < 11 || loading;

  async function handleSearchPatient() {
    setLoading(true);

    await api(app_protection_token)
      .get(`/users/${formatData.clearFormat(cpf)}`)
      .then(({ data }) => {
        navigate("/user", {
          state: {
            user: data,
          },
        });
      })
      .catch(() => {
        sweetalert({
          icon: "error",
          title: "Paciente não Localizado",
          text: "Verifique os dados e Tente Novamente.",
        });
      })
      .finally(() => {
        setCPF("");
        setLoading(false);
      });
  }

  return (
    <Layout>
      <img
        src="src/assets/virus_mask.jpg"
        className="rounded-full w-56 mr-16 mt-10 opacity-40 border border-blue-400 lg:w-96"
      />

      <div className="flex flex-col gap-4 items-stretch w-[600px] mt-10 border border-gray-600 p-12 rounded-lg">
        <Heading className="text-center relative -top-16 bg-blue-800">
          Buscar dados do paciente
        </Heading>

        <label htmlFor="cpf" className="flex flex-col gap-3">
          <Text className="font-semibold text-gray-300">CPF do paciente</Text>
          <TextInput.Root>
            <TextInput.Input
              type="text"
              id="cpf"
              placeholder="Digite seu o CPF"
              value={cpf}
              maxLength={11}
              onChange={(e) => {
                setCPF(formatData.formatCPF(e.target.value));
              }}
            />
          </TextInput.Root>
        </label>

        <Button
          onClick={handleSearchPatient}
          className="mt-10 "
          disabled={disabled}
        >
          {loading ? <Loading /> : "Buscar"}
        </Button>
      </div>
    </Layout>
  );
}
