import ButtonCal from "@/app/components/Buttons/ButtonCal";

export default function Input() {
  return (
    <main>
      <div>
        <h1 className="ml-50 text-blue-100 font-bold text-2xl">
          Para calcular o seu IMC informe o que é pedido abaixo
        </h1>
        <div className="ml-50">
          <input placeholder="Digite o seu peso" type="text" />
          <input placeholder="Digite a sua altura" type="text" />
        </div>
        <div>
          <ButtonCal />
        </div>
      </div>
    </main>
  );
}
