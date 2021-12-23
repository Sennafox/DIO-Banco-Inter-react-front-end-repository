# Instalando o webpack

## 1° Crie um arquivo webpack.config.js
## 2° Copie e cole o seguinte código no arquivo criado

    const path = require('path')
    const HtmlWebPackPlugin = require("html-webpack-plugin");

    module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    },
    module: {
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
    plugins: [
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
        })
    ]
    }

    
## 3° Execute na pasta o comando npm init para criar um arquivo package.json

## 4° execute as seguintes instalações
    - npm i -D webpack webpack-cli
    - Adicionar no package.json -> 
    
    "build": "webpack --mode production"

    - npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

## 5° Criar um index.html
    
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

## 6. Criar um index.js

    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./App";
    
    ReactDOM.render(<App />, document.getElementById("app"));


## 7. Instalar o preset do babel e o react dom

        - npm i react react-dom
        - npm i -D babel-preset-react
        - criar um arquivo .babelrc e adicionar no arquivo:

            {
                "presets": [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            }
## 8. Criar na src uma pasta chamada app.js

    import React from "react";
    import Button from './Button'
    const App = () => {
    return (
        <div>
        <p>Digital Innovation One</p>
        <p>Bem vindo a nossa aula =D.</p>
        <div>Webpack 4</div>
        <Button />
        </div>
    );
    };
    export default App;

## 9. Criar pasta index.js

    import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("app"));

## 10. Adicionar no arquivo package.json:

    "scripts":
        "dev":"webpack --mode development"


## 11. instalar o webpack dev server:
            npm i webpack-dev-server
            - adicionar o package.json
            - "start:dev": "webpack-dev-server"

## 12. Instalar o ESlint:
            - npm i --save-dev eslint @babel/eslint-parser eslint-plugin-react eslint-watch


