import React from "react";
import Button from './Button'

const buttonA = <button>Primeiro Botão</button>
const buttonB = <button>Segundo botão</button>
const hasConstumer = false;

const App = () => {
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>Webpack 4</div>
      {hasConstumer && (
      <div>
        Clique no botão abaio para visualizar o histórico de clientes {buttonA}
      </div>
      )}
      {buttonB}
      
    </div>
  );
};
export default App;