import { Envelope, Lock } from "phosphor-react";
import { Button } from "./Button";
import { Layout } from "./Layout";
import { Text } from "./Text";
import { TextInput } from "./TextInput";

export function Login() {
  return (
    <Layout>
      <img
        src="src/assets/virus_mask.jpg"
        className="rounded-full w-56 mr-16 mt-10 opacity-40 border border-blue-400 lg:w-96"
      />

      <form className="flex flex-col gap-4 items-stretch w-[600px] mt-10 border border-gray-600 p-12 rounded-lg">
        <Text size="lg" className="text-gray-400 mb-8 text-center">
          Faça login para acessar o sistema!
        </Text>

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3 mt-2">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <Button type="submit" className="mt-10">
          Entrar
        </Button>
      </form>
    </Layout>
  );
}
