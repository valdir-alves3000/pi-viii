import { CreditCard, Envelope, Lock, Phone, UserCircle } from "phosphor-react";
import { Button } from "./Button";
import { CheckBox } from "./CheckBox";
import { Heading } from "./Heading";
import { Layout } from "./Layout";
import { Text } from "./Text";
import { TextInput } from "./TextInput";

export function Register() {
  return (
    <Layout>
      <form className="flex flex-col gap-4 items-stretch w-[600px] mt-10 border border-gray-600 p-8 rounded-lg">
        <Heading className="text-center">Cadastrar novo usuário</Heading>

        <Text size="lg" className="text-gray-400 text-center">
          Preencha os dados para realizar o cadastro!
        </Text>

        <label htmlFor="name" className="flex flex-col gap-3 mt-2">
          <Text className="font-semibold">Nome</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <UserCircle />
            </TextInput.Icon>

            <TextInput.Input
              type="text"
              id="name"
              placeholder="Digite seu nome"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-3 mt-2">
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

        <label htmlFor="phone" className="flex flex-col gap-3 mt-2">
          <Text className="font-semibold">Telefone</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Phone />
            </TextInput.Icon>

            <TextInput.Input
              type="text"
              id="phone"
              placeholder="seu telefone"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="cpf" className="flex flex-col gap-3 mt-2">
          <Text className="font-semibold">CPF</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <CreditCard />
            </TextInput.Icon>

            <TextInput.Input type="text" id="cpf" placeholder="CPF" />
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

        <label htmlFor="confirm_password" className="flex flex-col gap-3 mt-2">
          <Text className="font-semibold">Confirmar senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="confirm_password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="role" className="flex items-center gap-3 mt-2">
          <CheckBox id="role" />
          <Text size="sm" className="text-gray-200">
            Admin
          </Text>
        </label>

        <Button type="submit" className="mt-10">
          Entrar
        </Button>
      </form>
    </Layout>
  );
}
