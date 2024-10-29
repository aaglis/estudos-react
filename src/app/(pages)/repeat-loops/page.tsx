export default function repeatLoops() {
  const listaUsuarios = ["André", "Felipe", "Juliano", "Gustavo"];
  return (
    <div>
      <h1 className="text-2xl text-center font-bold py-3">
        Laços de Repetição
      </h1>
      <div className="flex flex-col items-center ">
        <h2 className="text-xl font-semibold">Lista de usuários</h2>
        <ul>
          {listaUsuarios.map((item, index) => {
            return (
              <li key={index} className="list-disc font-semibold pt-2">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
