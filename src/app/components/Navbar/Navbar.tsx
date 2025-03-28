import Image from "next/image";
import ButtonE from "../ButtonE/ButtonE";

export default function Navbar() {
  return (
    <main>
      <nav className="flex bg-blue-400 shadow-lg ">
        <div className="flex justify-start">
          <section className="flex p-2 items-center">
            <Image
              className="m-2 rounded-full w-25 h-25"
              src="/InfoVital.png"
              alt="InfoVitalLogo"
              width={100}
              height={100}
            />
          </section>
        </div>

        <div className="flex justify-end w-full">
          <ul className="flex flex-row font-bold justify-end items-center text-blue-100">
            <li className="mr-5 hover:text-blue-900 transition duration-400">
              <a href="/">Inicio</a>
            </li>
            <li className="mr-5 hover:text-blue-900 transition duration-400">
              <a href="/Ultimas">Ultimas 24Hrs</a>
            </li>
            <li className="mr-5 hover:text-blue-900 transition duration-400">
              <a href="/Dicas">Dicas para sua saúde</a>
            </li>
            <li className="mr-5 hover:text-blue-900 transition duration-400">
              <a href="/Monitor">Monitore sua saúde</a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center p-3">
          <ButtonE />
        </div>
      </nav>
    </main>
  );
}
