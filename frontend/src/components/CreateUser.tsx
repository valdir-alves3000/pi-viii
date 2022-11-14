import { Cardholder, Envelope, Lock, Phone, User } from "phosphor-react";
import { useContext, useState } from "react";
import { CreateUserContext } from "../contexts/CreateUserContext";
import { formatData } from "../utils/formatData";
import { sweetalert } from "../utils/sweetalert";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Layout } from "./Layout";
import { Loading } from "./Loading";
import { Text } from "./Text";
import { TextInput } from "./TextInput";

export function CreateUser() {
  const {
    cpf,
    createUser,
    email,
    name,
    password,
    phone,
    setCPF,
    setEmail,
    setName,
    setPassword,
    setPhone,
  } = useContext(CreateUserContext);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const disabled =
    email.length < 5 ||
    password.length < 6 ||
    cpf.length < 11 ||
    phone.length < 11 ||
    loading;

  async function handleCreateUser() {
    if (password != confirmPassword) {
      return sweetalert({
        icon: "info",
        title: "Senha não confere",
        text: "A confirmação da senha não confere com a original.",
      });
    }
    setLoading(true);

    await createUser()
      .then((res) => {
        sweetalert({
          icon: "success",
          title: "Usuário cadastrado com Sucesso",
          text: "Este usuário já pode acessar o sistema.",
        });
      })
      .catch((err) => {
        sweetalert({
          icon: "error",
          title: "Falha no Cadastro",
          text: "Usuário não cadastrado. Tente novamente.",
        });
      })
      .finally(() => {
        setCPF("");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setLoading(false);
      });
  }

  return (
    <Layout>
      <div className="w-full flex flex-col gap-4 items-stretch max-w-[700px] mt-10 border border-gray-600 p-12 rounded-lg">
        <Heading
          size="lg"
          className="text-gray-400 text-center bg-blue-800 relative -top-16"
        >
          Cadastrar novo usuário
        </Heading>
        <Text size="lg" className="text-gray-500 text-center relative -top-10">
          Preencha os dados para realizar o cadastro!
        </Text>

        <label htmlFor="name" className="flex flex-col gap-3">
          <Text className="font-semibold text-gray-300">Nome</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>

            <TextInput.Input
              type="text"
              id="name"
              placeholder="digite o nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </TextInput.Root>
        </label>

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

        <label htmlFor="phone" className="flex flex-col gap-3">
          <Text className="font-semibold text-gray-300">Telefone</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Phone />
            </TextInput.Icon>

            <TextInput.Input
              type="text"
              id="phone"
              placeholder="(11) 9 9999-9999"
              value={phone}
              maxLength={11}
              onChange={(e) => setPhone(formatData.formatPhone(e.target.value))}
            />
          </TextInput.Root>
        </label>

        <label htmlFor="name" className="flex flex-col gap-3">
          <Text className="font-semibold text-gray-300">CPF</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Cardholder />
            </TextInput.Icon>

            <TextInput.Input
              type="text"
              id="name"
              placeholder="999.999.999-99"
              value={cpf}
              maxLength={11}
              onChange={(e) => setCPF(formatData.formatCPF(e.target.value))}
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3 mt-2">
          <Text className="font-semibold text-gray-300">Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              maxLength={8}
              onChange={(e) => setPassword(e.target.value)}
            />
          </TextInput.Root>
        </label>

        <label htmlFor="confirm_password" className="flex flex-col gap-3 mt-2">
          <Text className="font-semibold text-gray-300">Confirmar senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="confirm_password"
              placeholder="********"
              value={confirmPassword}
              maxLength={8}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </TextInput.Root>
        </label>

        <Button
          onClick={handleCreateUser}
          className="mt-10 "
          disabled={disabled}
        >
          {loading ? <Loading /> : " Cadastrar"}
        </Button>
      </div>
    </Layout>
  );
}
