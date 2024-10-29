import Pai from "./components/Pai";

export default function componentsInteraction() {
  /*
    Comunicação direta -> através das props
    export default function Pai() {
      return <Filho nome="Felipe" sobrenome="Araujo" />
    }
    export default function Filho(props) {
      return (
        <div>
          <h1>Nome: {props.nome}</h1>
          <h1>Sobrenome: {props.sobrenome}</h1>
        </div>
      )
    }
  */

  // Comunicação indireta -> de um componente filho para um componente pai
  return (
    <div>
      <h1>Interação entre Componentes</h1>
      <div>
        <Pai></Pai>
      </div>
    </div>
  );
}
