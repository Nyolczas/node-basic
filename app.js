// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send("express pina");
// })

// app.listen(3000);

const fs = require('fs');
const fileName = "target.txt";
//fs.watch(fileName, () => console.log(`A fájl +változott!`));

// const data = fs.readFileSync(fileName);
// console.log(data.toString());
const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

 fs.readFile(fileName, (err, data)=>{
     if(err) errHandler(err);
     dataHandler(data);
 });

console.log('Asynchronous');