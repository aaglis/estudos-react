"use client";

import { useState } from "react";

interface setQtdOnFather {
  setQtd: any;
}

export default function GetValue(props: setQtdOnFather) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">
        Quantidade de numeros que você deseja gerar:
      </h2>
      <div className="flex gap-4 items-center">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-zinc-500 rounded pl-2 h-10 focus:outline-zinc-400 focus:outline-2 focus:outline [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          className="bg-white w-28 h-10 rounded text-black font-bold text-sm"
          onClick={props.setQtd(Number(value))}
        >
          Gerar
        </button>
      </div>
    </div>
  );
}
