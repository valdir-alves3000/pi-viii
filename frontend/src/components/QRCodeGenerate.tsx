import { useEffect, useState } from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";

import QRCode from "qrcode";
import { useLocation } from "react-router-dom";

export function QRCodeGenerate() {
  const dataLocation = useLocation();
  const [src, setSrc] = useState("");

  const { id, name, address, city, state } = dataLocation.state;

  function qrCodeGenerate() {
    QRCode.toDataURL(id)
      .then((url) => {
        setSrc(url);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    qrCodeGenerate();
  }, [src]);

  return (
    <div className="w-full bg-no-repeat bg-center h-screen flex flex-col items-center justify-center ">
      <Heading>{name}</Heading>

      <img
        src={src}
        alt="QRCode do Local"
        className="w-72 h-72 rounded-lg p-1 bg-blue-500 "
      />
      <Text size="sm" className="m-2">{`${address}`}</Text>
      <Text className="uppercase">{`${city} - ${state}`}</Text>
    </div>
  );
}
