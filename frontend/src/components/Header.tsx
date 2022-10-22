import { Heading } from "./Heading";

export function Header() {
  return (
    <header className="w-full h-24 py-5 flex items-center justify-around bg-gray-700 border-b border-gray-600">
      <Heading className="capitalize">Protection Of Good</Heading>
    </header>
  );
}
