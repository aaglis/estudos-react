"use client";

import { useState } from "react";
import GerenateNumbers from "./components/generate-numbers";
import GetValue from "./components/get-value";

export default function MegaSena() {
  const [qtd, setQtd] = useState(0);

  function setQtdValue(qtd: number) {
    setQtd(qtd);
  }

  return (
    <div className="h-screen bg-zinc-900 text-white">
      <h1 className="text-2xl font-bold text-center pt-2">Mega Sena</h1>
      <div className="min-h-52 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-700 rounded-3xl p-8">
        <GetValue setQtd={setQtdValue} />
        {qtd ? <GerenateNumbers qtd={qtd} /> : <div></div>}
      </div>
    </div>
  );
}
