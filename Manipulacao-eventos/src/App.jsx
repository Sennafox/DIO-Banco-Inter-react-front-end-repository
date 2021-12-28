import React from "react";

const showEvent = (e) => {
  console.log('Clicado')
  console.log(e)
}

const Button = <button onClick={showEvent}>Mostrar evento</button>

const App = () => {

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>Manipulação de eventos</div>  
      {Button}
    </div>
  );
};
export default App;