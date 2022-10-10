import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  text: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="w-96 h-12 px-5  bg-transparent rounded-md font-semibold flex gap-3 items-center justify-center text-zinc-500 text-3xl border border-slate-800 hover:text-zinc-200 hover:border-white hover:bg-blue-900 tracking-widest  transition"
    >
      <>
        {props.icon}
        {props.text}
      </>
    </button>
  );
}
