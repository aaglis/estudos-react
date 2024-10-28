import React from "react";

// React Fragment é usando quando você não quer envolver elementos em uma 'div inutil'
// podemos usar a tag React.Fragment ou envolver os elementos por uma tag vazia
// <> </>

export default function Fragment() {
  return (
    <React.Fragment>
      <h1>Esses elementos</h1>
      <h2>Adjascentes foram mostrados na tela usando</h2>
      <h3>React.Fragment importando React</h3>
    </React.Fragment>
  );
}
