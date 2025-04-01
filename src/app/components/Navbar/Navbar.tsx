import Image from "next/image";
import ButtonE from "../Buttons/ButtonEntre";

export default function Navbar() {
  return (
    <main>
      <nav className="flex bg-blue-400 shadow-xl shadow-blue-200">
        <div>
          <section>
            <Image
              className="m-2 rounded-full"
              src="/InfoVital.png"
              alt="InfoVitalLogo"
              width={80}
              height={80}
            />
          </section>
        </div>

        <div className="flex justify-end w-full">
          <ul className="flex flex-row font-bold justify-end items-center text-blue-100">
            <li className="mr-5 hover:text-blue-900 transition duration-400">
              <a href="/">Inicio</a>
            </li>
            <li className="mr-5 hover:text-blue-900 transition duration-400">
              <a href="/IMC">Calculadora IMC</a>
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
