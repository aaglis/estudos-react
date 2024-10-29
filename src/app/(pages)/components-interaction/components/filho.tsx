"use client";

interface IFalarComOPai {
  falarComOPai: any;
}

export default function Filho(props: IFalarComOPai) {
  let contador = 0;

  function incrementar() {
    contador++;
    props.falarComOPai(contador);
  }

  return (
    <div>
      <h1>Eu sou o componente filho</h1>
      <button
        onClick={incrementar}
        className="bg-zinc-600 rounded p-2 text-white"
      >
        {" "}
        Falar Com o Pai
      </button>
    </div>
  );
}
