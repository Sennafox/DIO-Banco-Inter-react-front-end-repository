import React from "react";
import Button from './Button'

const buttonA = <button>Histórico de cliente</button>
const buttonB = <button>Cadastrar cliente</button>
const hasConstumer = true;

const App = () => {

  const renderShowHistory = () => (
    <div>
        Clique no botão abaio para visualizar o histórico de clientes {buttonA}
    </div>
  )
  
  const renderAddCostumer = () => (
    <div>
        Clique aqui para cadastrar clientes{buttonB}
    </div>
  )

  const costumer = 'Paulo Senna'

  const showCostumer = () => {
    if(!hasConstumer) return null

    return (
      <div>
        <h1>Nome do cliente: {costumer}</h1>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>Webpack 4</div>
      {hasConstumer ? (renderShowHistory()) : (renderAddCostumer())}  
      <div>
        {showCostumer()}
      </div>
    </div>
  );
};
export default App;