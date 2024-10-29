import Item from "./components/Item";
import Lista from "./components/lista";

export default function childComponents() {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl pt-4">
        Lista de Elementos Filhos
      </h1>
      <div className="flex justify-center text-xl font-bold">
        <Lista>
          <Item content="testando 1" />
          <Item content="testando 2" />
          <Item content="testando 3" />
          <Item content="testando 4" />
          <Item content="testando 5" />
          <Item content="testando 6" />
        </Lista>
      </div>
    </div>
  );
}
