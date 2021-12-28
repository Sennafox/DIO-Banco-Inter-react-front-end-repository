import React from "react";
import Button from './Button'


const listCostumer = [
  {
    id: 1,
    name: 'Paulo Senna',
    skills: ['HTML', 'CSS', 'Javacript', 'React']
  },
  {
    id: 2,
    name: 'Ursula Almeida',
    skills: ['Angular', 'NodeJS', 'TypeORM', 'API']
  },
  {
    id: 3,
    name: 'Pipeta Bittencourt',
    skills: ['AWS', 'Azure']
  },
  {
    id: 4,
    name: 'Penelope Almeida',
    skills: ['Python']
  },
]

const App = () => {

  const handlerClick = (e, id) => {
    console.log('deletar cliente')
    alert(`ID do cliente: ${id}`)
  }

  const renderCostumer = (costumer, index) => {
    return (
      <div key={`costumer ${costumer.id}`}>
      <li>{costumer.name} <button onBlur={(e) => handlerClick(e, costumer.id)}>Deletar cliente</button></li>
      {costumer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => 
      <div style= {{ paddingLeft: '30px' }} key = {`skill ${index}`}>
        <li>{skill}</li>
      </div>

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>Webpack 4</div>  
      <div>
        <ul>
          {listCostumer.map(renderCostumer)}
        </ul>
      </div>
    </div>
  );
};
export default App;