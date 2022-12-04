import { Envelope, Lock } from "phosphor-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { sweetalert } from "../utils/sweetalert";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Layout } from "./Layout";
import { Loading } from "./Loading";
import { Text } from "./Text";
import { TextInput } from "./TextInput";

export function Login() {
  const [loading, setLoading] = useState(false);
  const { signIn, email, password, setEmail, setPassword } =
    useContext(AuthContext);
  const disabled = email.length < 3 || password.length < 8 || loading;
  const navigate = useNavigate();

  async function handleSignIn() {
    setLoading(true);
    await signIn()
      .then(() => navigate("/home"))
      .catch(() => {
        sweetalert({
          icon: "error",
          title: "Usuário ou senha, incorreto",
          text: "Verifique os dados e Tente Novamente.",
        });
      })
      .finally(() => {
        setEmail("");
        setPassword("");
        setLoading(false);
      });
  }

  return (
    <Layout>
      <img
        src="./virus_mask.jpg"
        className="rounded-full w-56 mt-10 opacity-40 border border-blue-400 lg:w-96 lg:mr-16"
      />

      <div className="w-full flex flex-col gap-4 items-stretch max-w-[600px] mt-10 border border-gray-600 p-12 rounded-lg ">
        <Heading size="lg" className="text-center relative -top-16 bg-blue-800">
          Login
        </Heading>
        <Text size="lg" className="text-gray-400 relative -top-10 text-center">
          Faça login para acessar o sistema!
        </Text>

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold text-gray-300">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              type="email"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3 mt-2">
          <Text className="font-semibold text-gray-300">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </TextInput.Root>
        </label>

        <Button onClick={handleSignIn} className="mt-10 " disabled={disabled}>
          {loading ? <Loading /> : "Entrar"}
        </Button>
      </div>
    </Layout>
  );
}
