import { ReactNode, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Header />
      <main className="w-full min-h-[75vh] flex flex-col items-center justify-center lg:flex-row ">
        {children}
      </main>
      <Footer />
    </>
  );
}
