import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      
      className="bg-zinc-300 border-none py-3 px-4 rounded text-lg placeholder:text-zinc-600 text-zinc-800 w-full m-5"
    />
  );
}
