import { MagnifyingGlass, UserCircle } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserProps } from "../data/@types";
import { formatData } from "../utils/formatData";
import { Heading } from "./Heading";
import { Text } from "./Text";

export function User() {
  const navigate = useNavigate();
  const dataLocation = useLocation();
  const user = dataLocation.state.user as UserProps;

  return (
    <>
      {user && (
        <header className="w-full h-72 p-10 gap-3 flex items-center justify-end bg-gray-700 border-b border-gray-600">
          <div className="flex flex-col items-end gap-1">
            <Text size="lg">{user.name}</Text>
            <Text className="text-gray-400" size="sm">
              {user.name == "Valdir" || "Alvaro"
                ? "(11) ? ????????"
                : formatData.formatPhone(user.phone)}
            </Text>
            <Text className="text-gray-300"> {user.email} </Text>
          </div>
          <UserCircle size={50} />
        </header>
      )}

      <ul className="flex flex-col items-center relative -top-28 gap-2">
        <>
          <Heading className="mb-5">Histórico de Localizações</Heading>
          <li className="grid grid-cols-12 items-center justify-center p-2 w-[95vw] h-24 bg-gray-100 rounded-lg border-2 border-blue-800">
            <Heading
              size="sm"
              className="text-gray-600 font-serif capitalize text-center"
            >
              data
            </Heading>

            <Heading
              size="sm"
              className="col-span-2 text-gray-600 font-serif capitalize text-center"
            >
              local
            </Heading>

            <Heading
              size="sm"
              className="col-span-4 text-gray-600 font-serif capitalize text-center"
            >
              endereço
            </Heading>

            <Heading
              size="sm"
              className="col-span-2 text-gray-600 font-serif capitalize text-center"
            >
              cidade
            </Heading>

            <Heading
              size="sm"
              className="col-span-2 text-gray-600 font-serif capitalize text-center"
            >
              estado
            </Heading>

            <Heading
              size="sm"
              className="text-gray-600 font-serif capitalize text-center"
            >
              detalhes
            </Heading>
          </li>
          {user.locations.length > 0 ? (
            user.locations.map((location) => (
              <li
                key={location.id}
                className="grid grid-cols-12 items-center justify-center p-2 w-[95vw] h-16 bg-gray-300 rounded-lg transition hover:bg-gray-100 hover:text-gray-500"
              >
                <Text className="text-current text-center">
                  {`${new Date(location.created_at).toLocaleDateString()}`}
                </Text>

                <Text className="col-span-2 text-current text-center">
                  {`${location.placeId.name}`}
                </Text>

                <Text className="col-span-4 text-current text-center">
                  {`${location.placeId.address}`}
                </Text>

                <Text className="col-span-2 text-current text-center">
                  {`${location.placeId.city}`}
                </Text>

                <Text className="col-span-2 text-current text-center">
                  {`${location.placeId.state}`}
                </Text>
                <div className="flex items-center justify-center">
                  <MagnifyingGlass
                    onClick={() => {
                      navigate("/locations", {
                        state: {
                          id: location.placeId.id,
                          name: location.placeId.name,
                          city: location.placeId.city,
                          address: location.placeId.address,
                          state: location.placeId.state,
                          date: location.created_at,
                        },
                      });
                    }}
                    className="w-11 h-11 p-2 border border-gray-400 rounded-lg hover:bg-blue-400 hover:text-gray-100 items-center hover:border-gray-500 transition cursor-pointer"
                  />
                </div>
              </li>
            ))
          ) : (
            <li className="flex items-center justify-center p-2 w-[95vw] h-20 bg-gray-300 rounded-lg border-2 border-blue-800">
              <Text
                size="lg"
                className="w-full text-blue-800 capitalize text-center"
              >
                Sem registro de localizações
              </Text>
            </li>
          )}
        </>
      </ul>
    </>
  );
}
