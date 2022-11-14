import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CreatePlaceContext } from "../contexts/CreatePlaceContext";
import { IBGEContext } from "../contexts/IBGEContext";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Layout } from "./Layout";
import { Loading } from "./Loading";
import { Text } from "./Text";
import { TextInput } from "./TextInput";

export function Place() {
  const navigate = useNavigate();
  const {
    address,
    city,
    name,
    state,
    setAddress,
    setCity,
    setName,
    setState,
    createPlace,
    loading,
  } = useContext(CreatePlaceContext);

  const { citys, getCitys, states } = useContext(IBGEContext);

  const disabled =
    address.length < 5 || name.length < 3 || loading || city.length < 3;

  return (
    <Layout>
      <div className="flex flex-col gap-4 items-stretch w-[600px] mt-20 border border-gray-600 p-8 rounded-lg">
        <Heading
          size="lg"
          className="bg-blue-800 text-center capitalize relative -top-14"
        >
          cadastrar novo local
        </Heading>

        <Text size="lg" className="text-gray-600 text-center relative -mt-12">
          Preencha os dados para realizar o cadastro!
        </Text>

        <label htmlFor="name" className="flex flex-col gap-3 mt-4">
          <Text className="font-semibold text-gray-400">Nome</Text>
          <TextInput.Root>
            <TextInput.Input
              type="text"
              id="name"
              placeholder="Digite o nome do local"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </TextInput.Root>
        </label>

        <label htmlFor="address" className="flex flex-col gap-3 mt-2">
          <Text className="font-semibold text-gray-400">Endereço</Text>
          <TextInput.Root>
            <TextInput.Input
              type="text"
              id="address"
              placeholder="Digite o endereço"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </TextInput.Root>
        </label>

        <div className="grid grid-cols-2 items-center justify-between gap-3">
          <label htmlFor="state" className="flex flex-col gap-3 mt-2">
            <Text className="font-semibold text-gray-400">Estado</Text>
            <select
              onChange={(e) => {
                setState(e.target.value);
                getCitys(e.target.value);
              }}
              value={state}
              id="state"
              className="h-14 w-full py-4 px-3 bg-gray-800 rounded text-gray-400 placeholder:text-gray-400 focus:text-gray-400 cursor-pointer"
            >
              <option value="">UF</option>
              {states?.map((state) => (
                <option key={state.id} value={state.sigla}>
                  {state.nome}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="city" className="flex flex-col gap-3 mt-2">
            <Text className="font-semibold text-gray-400">Cidade</Text>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-14 w-full py-4 px-3 bg-gray-800 rounded text-gray-400 placeholder:text-gray-400 focus:text-gray-400 cursor-pointer"
            >
              <option value="">Selecione</option>
              {citys?.map((city) => (
                <option key={city.id} value={city.nome}>
                  {city.nome}
                </option>
              ))}
            </select>
          </label>
        </div>
        <Button onClick={createPlace} disabled={disabled} className="mt-10">
          {loading ? <Loading /> : " Cadastrar"}
        </Button>
      </div>
    </Layout>
  );
}
