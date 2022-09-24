const fs = require('fs')

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')


// const dataJson = dataBuffer.toString();
// const dataParsed = JSON.parse(dataJson);
// console.log(dataParsed)

const vovaData = {
  name: 'Vova',
  planet: 'Saturn',
  age: 36
}

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const dataParsed = JSON.parse(dataJson)

dataParsed.name = vovaData.name;
dataParsed.planet = vovaData.planet;
dataParsed.age = vovaData.age;

stringVova = JSON.stringify(dataParsed)

fs.writeFileSync('1-json.json', stringVova)
