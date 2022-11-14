export function Footer() {
  return (
    <>
      <footer className="flex flex-col py-6 mt-10 border-t-2 border-gray-600 items-center w-full justify-center md:mx-6 md:w-auto">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <span className="text-gray-400 leading-relaxed">
            Copyright ©
            <a href="https://github.com/valdir-alves3000">Valdir Alves</a>{" "}
            {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
}
