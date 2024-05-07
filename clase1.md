# Imprescindibles

conocer el lenguaje
conocer el código y los requisitos

el software de testing

# unit testing

jest

# integracion

supertest

# E2E

puppeteer

los test suelen ser muy descriptivos

jest nació para react
pero se puede usar para back y como front

## Jest

iniciar el proyecto
npm init -y

npm install --save-dev jest

cuando iniciamos un npm ya nos crea un script de test
utiliza como dependencia nuestro node modules
"scripts": {
"test": "jest"
},

con npx jest
o si lo tenemos en el script
npm run test
tenemos que tener el nombre con .test o spec

si falla un unico test, falla todo el testing

# tipado para jest

npm i -D @types/jest

la carpeta @types que esta en node modules es donde estan los tipos
puede que haya una carpeta global fuera de node modules para tipos
de forma global

# los test no se pueden anidar

pero un describe permite crear un grupo pero no anidarlos

# con npm con ci

nos instalara la version del packagelock.json

# se pueden declarar hooks que se pueden ejecutar antes después o mientras los tests

# jest no funciona en principio co ecma modules

nocesitaremos una configuracion para babel

npm install --save-dev babel-jest @babel/core @babel/preset-env

Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

babel.config.js
module.exports = {
presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
puedes usar typscript tambien
mirar documentacion de https://jestjs.io/docs/getting-started

# con npm jest sum

hace los test que mas se aproxime

"scripts": {
"test": "jest",
"test:sum": "jest-sum"
},

si ejecutamos npm run jest-sum ejecutara la sum que es lo que hemos peusto

puede usar el modo --watch que se queda esperando cambios y ejecutando test continuamente

npm init jest@latest podemos hacer configuraciones adicionales

# podemos tener varios expect en una funcion

# para los decimales grandes podemos usar el toBeCloseTo
