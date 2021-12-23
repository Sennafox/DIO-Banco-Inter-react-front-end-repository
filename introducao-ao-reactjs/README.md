# Instalando o webpack

1° Crie um arquivo webpack.config.js
2°Copie e cole o seguinte código no arquivo criado

        const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname,'dist'),
            filename: 'bundle.js'
        } 
    };
3° Execute na pasta o comando npm init para criar um arquivo package.json

4° execute as seguintes instalações
    - npm i -D webpack webpack-cli
    - Adicionar no package.json -> 
    
    "build": "webpack --mode production"

    - npm i @babel/core babel-loader @babel/present-env @babel/present-react --save-dev
    - Adiconar no webpack.config.js ->

    module.exports = {
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ] 
    },

    5° Criar um index.html
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>webpack 4 + babel</title>
    </head>
    <body>
        <div id ="app">

        </div>
    </body>
    </html> 

    6. Criar um index.js

    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    ReactDOM.render(
    <App />,
    document.getElementById('app')

    7. Instalar o preset do babel e o react dom

        - npm i react react-dom
        - npm i -D babel-preset-react
        - criar um arquivo .babelrc e adicionar no arquivo:

            {
                "presets": [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            }
    8. Criar na src uma pasta chamada app.js

    import React from 'react';

    const App = () => {
    return (
        <div>
        <p>Hello world</p>
        <p>teste deu certo!</p>
        </div>
    );
    };

    export default App;

    9. Criar pasta index.js

    import React from 'react';
    import ReactDOM from 'react-dom';
    import Button from './Button';
    import './index.css';

    function soma(a,b){
    alert(a + b)
    }

    function primeiroJSX() {
    return(
        <div  className="teste">
        
        <Button onClick={() => soma(10,5)} name={"Soma"}/>
        </div>
    )
    }


    const App = () =>{

    return (
        <div className="App">
        {primeiroJSX()}

        </div>
    )
    }

    10. Adicionar no arquivo package.json:

    "scripts":
        "dev":"webpack --mode development"

    const rootElement =   document.getElementById("root")
    ReactDOM.render(<App />, rootElement)
    11. Adicionar no webpack.config.js o plugin HTML:

    const HtmlWebPackPlugin = require("html-webpack-plugin");

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        })
    ]

    12. instalar o webpack dev server:
            npm i webpack-dev-server
            - adicionar o package.json
            - "start:dev": "webpack-dev-server"


