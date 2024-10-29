import Button from "@/app/components/Button";

export default function usingComponents() {
  return (
    <div className="w-screen h-screen">
      <h1 className="text-center font-extrabold text-3xl">
        Usando Componentes
      </h1>
      <div className="flex flex-col justify-center items-center bg-zinc-700 p-8">
        <p className="text-xl font-semibold">botão:</p>
        <Button></Button>
      </div>
      <div className="flex flex-col justify-center items-center bg-zinc-700 p-8">
        <p className="text-xl font-semibold">
          Passei o dado name para ser lido pelo texto do botao{" "}
        </p>
        <Button name="teste" />
      </div>
    </div>
  );
}
