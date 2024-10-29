"use client";

import Filho from "./filho";

export default function Pai() {
  function receberValor(numero: number) {
    alert(`valor recebido pelo componente filho: ${numero}`);
  }

  return (
    <div>
      <h1>Eu sou o elemento pai</h1>
      <div>
        <Filho falarComOPai={receberValor}></Filho>
      </div>
    </div>
  );
}
