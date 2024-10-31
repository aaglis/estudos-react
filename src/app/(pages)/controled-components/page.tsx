"use client";

import { useState } from "react";

export default function ControledComponent() {
  /*
    Controled Component: por padrão, se você quiser mapear o valor
    de um input usando useState, ex:

    const [value, setValue] = useState("")

    return <input type="text" value={value} />

    ele faz a vinculação da variavel com o value do input, porém ele
    acaba o input não é mais digitável, pois, para verificar um estado,
    primeiro ele tem que ser alterado para que ocorra a mudança.
    ou seja, para tornar ele um input controlado, tem que se usar o atributo onChange,
    para que ele se torne mapeável e digitável, já que você vai conseguir notificar as
    mudanças para que o estado seja mapeado

    segue o exemplo abaixo:

  */

  const [value, setValue] = useState("");

  function getValues() {
    console.log(value);
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="font-bold text-xl pb-3">Componente Controlado</h1>
      <div className="flex flex-col items-center gap-4">
        <input
          className="border-b border-black focus:outline-none "
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="w-36 h-12 bg-black font-semibold text-white rounded"
          onClick={getValues}
        >
          pegar valor
        </button>
      </div>
    </div>
  );
}
