"use client";

import { useState } from "react";

export default function ComponentsWithState() {
  const [count, setCount] = useState(0);

  function incrementar() {
    setCount(count + 1);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Componentes com Estado</h1>
      <p className="text-lg">valor do contador atual: {count}</p>
      <button
        className="p-3 bg-black rounded text-white font-semibold mt-2"
        onClick={incrementar}
      >
        Incrementar
      </button>
    </div>
  );
}
