import Image from "next/image";

export default function Navbar() {
  return (
    <main>
        <Image
        className="m-2 rounded-full"
          src="/InfoVital.png"
          alt="InfoVitalLogo"
          width={100}
          height={100}
        />
    </main>
  );
}
