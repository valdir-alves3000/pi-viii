import { parseCookies } from "nookies";
import { MapPin, Share, Warning } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateMessageContext } from "../contexts/CreateMessageContext";
import { LocationsPlaceProps } from "../data/@types";
import { api } from "../services/api";
import { sweetalert } from "../utils/sweetalert";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Text } from "./Text";

export function Locations() {
  const navigate = useNavigate();
  const { app_protection_token } = parseCookies();
  const [loading, setLoading] = useState(false);

  const dataLocation = useLocation();
  const { date, id, name, address, city, state } = dataLocation.state;

  const { sendMessage, setCountErrSendMessage, setCountSendMessage } =
    useContext(CreateMessageContext);

  const [locationsPlace, setLocationsPlace] = useState<
    LocationsPlaceProps[] | null
  >(null);

  async function getLocations() {
    const getDate = date?.split(" ");
    const day = getDate![1];
    const month = getDate![2];
    const year = getDate![3];

    api(app_protection_token)
      .get(`locations/place_id/${id}?day=${day}&month=${month}&year=${year}`)
      .then((res) => {
        setLocationsPlace(res.data);
      });
  }

  async function handleSendMessage(phone: string, user_name: string) {
    await sendMessage({
      address,
      city,
      date,
      name,
      state,
      phone,
      user_name,
    })
      .then(() => {
        sweetalert({
          icon: "success",
          title: "Alerta Enviado com Sucesso",
          text: "O usuário já recebeu a seu Alerta",
        });
      })
      .catch((error) => {
        sweetalert({
          icon: "error",
          title: "Falha no Envio",
          text: "Usuário não localizado",
        });
      });
  }

  async function handleSendMessageAll() {
    setLoading(true);

    locationsPlace?.map(async (location) => {
      await sendMessage({
        address,
        city,
        date,
        name,
        state,
        phone: location.userId.phone,
        user_name: location.userId.name,
      })
        .then(() => setCountSendMessage((count) => count++))
        .catch(() => setCountErrSendMessage((count) => count++));
    });

    sweetalert({
      icon: "success",
      title: "Alerta Enviado",
      text: `Seu alerta foi enviado para todos os usuários.`,
    });

    setLoading(false);

    navigate(-1);
  }

  useEffect(() => {
    getLocations();
  }, [locationsPlace]);

  return (
    <>
      <header className="w-full h-96 p-10 gap-3 flex items-start justify-end bg-gray-700 border-b border-gray-600">
        <div className="flex flex-col items-end gap-1 mt-7">
          <Text size="lg">{name}</Text>
          <Text className="text-gray-500" size="sm">
            {address}
          </Text>
          <Text className="text-gray-500" size="sm">
            {city}
          </Text>
          <Text className="text-gray-500 font-semibold">{state}</Text>
        </div>
        <MapPin size={50} className="mt-12" />
      </header>
      <ul className="flex flex-col items-center relative -top-52 gap-2">
        <Heading className="mb-5">Usuários que esteve neste local</Heading>

        <li className="grid grid-cols-4 items-center justify-center p-2 w-[95vw] h-16rounded-l">
          <Button
            className="col-start-4 flex justify-center items-center gap-4"
            onClick={handleSendMessageAll}
            disabled={loading}
          >
            <Warning size={32} className="text-orange-300" /> Alertar Todos
          </Button>
        </li>

        <li className="grid grid-cols-4 items-center justify-center p-2 w-[95vw] h-24 bg-gray-100 rounded-lg border-2 border-blue-800">
          <Heading
            size="sm"
            className="text-gray-600 font-serif capitalize text-center"
          >
            data
          </Heading>

          <Heading
            size="sm"
            className="text-gray-600 font-serif capitalize text-center"
          >
            usuário
          </Heading>

          <Heading
            size="sm"
            className="text-gray-600 font-serif capitalize text-center"
          >
            email
          </Heading>

          <Heading
            size="sm"
            className="text-orange-300 font-serif capitalize text-center"
          >
            enviar alerta
          </Heading>
        </li>

        {locationsPlace?.length ? (
          locationsPlace.map((location) => (
            <li className="grid grid-cols-4 items-center justify-center p-2 w-[95vw] h-16 bg-gray-300 rounded-lg transition hover:bg-gray-100 hover:text-gray-500">
              <Text className="text-current text-center">
                {new Date(location.created_at).toLocaleDateString()}
              </Text>

              <Text className="text-current capitalize text-center">
                {location.userId.name}
              </Text>

              <Text className="text-current text-center">
                {location.userId.email}
              </Text>

              <div
                onClick={() =>
                  handleSendMessage(location.userId.phone, location.userId.name)
                }
                className="flex items-center justify-center text-sm cursor-pointer"
              >
                <Share className="w-11 h-11 p-2 mr-2 border border-gray-300 rounded-lg bg-gray- items-center transition  hover:bg-blue-400 hover:text-gray-100  hover:border-gray-500" />
                Individual
              </div>
            </li>
          ))
        ) : (
          <li className="flex items-center justify-center p-2 w-[95vw] h-20 bg-gray-300 rounded-lg border-2 border-blue-800">
            <Text
              size="lg"
              className="w-full text-blue-800 capitalize text-center"
            >
              Sem registro de usuários
            </Text>
          </li>
        )}
      </ul>
    </>
  );
}
