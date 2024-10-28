interface IData {
  nome: string;
}

export default function Lists() {
  const data: IData[] = [
    {
      nome: "Aglis",
    },
    {
      nome: "Luis",
    },
    {
      nome: "Julio",
    },
    {
      nome: "Fernando",
    },
  ];
  return (
    <div className="w-screen h-screen box-border">
      <h1 className="text-2xl font-bold text-center py-4">
        Gerando listas no html com react:
      </h1>
      <p className="text-xl font-bold text-center">Forma padrão:</p>
      <div className="flex flex-col bg-zinc-700 rounded-md p-2">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <p className="text-xl font-bold text-center">Através de uma função:</p>
      <div className="flex flex-col bg-zinc-700 rounded-md p-2">
        {gerarLista()}
      </div>
      <p className="text-xl font-bold text-center">
        Através de um laço ficticio:
      </p>
      <div className="flex flex-col bg-zinc-700 rounded-md p-2">
        {Array.from({ length: 10 }).map((_item, i) => {
          return <span key={i}>{i}</span>;
        })}
      </div>
      <p className="text-xl font-bold text-center">
        Através de um array de objetos:
      </p>
      <div className="flex flex-col bg-zinc-700 rounded-md p-2">
        {data.map((person) => (
          <span key={person.nome}>{person.nome}</span>
        ))}
      </div>
    </div>
  );
}

function gerarLista() {
  const lista = [
    <span>1</span>,
    <span>2</span>,
    <span>3</span>,
    <span>4</span>,
    <span>5</span>,
    <span>6</span>,
    <span>7</span>,
    <span>8</span>,
    <span>9</span>,
    <span>10</span>,
  ];
  return lista;
}
