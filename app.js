const argv = require("./config/yargs").argv;
var colours = require("colors");
const { createFile, listTable } = require("./multiplicar/app");

//const fs = require("fs");
//console.log("Limite: ", argv.limite);
//
let command = argv._[0];
switch (command) {
  case "list":
    //do something
    listTable(argv.base, argv.limite);
    break;
  case "create":
    //do something
    createFile(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado: ${archivo}`))
      .catch((err) => {
        console.error(`Upss hubo un error al crear el archivo => ${err}`);
      });

    break;
  case "update":
    //do something
    console.log("Update to the console");
    break;
  case "delete":
    //do something
    console.log("Delete to the console");
    break;
  default:
    console.log("This commnand is not recognized");
}
/*const { crearArchivo } = require("./multiplicar/app");
//let base = "11";
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split("=")[1];
//console.log(base);

console.log(argv.base);
console.log(argv2);
let data = "";
for (let index = 0; index < base; index++) {
  data += `${base} * ${index} = ${base * index}\n`;
}
fs.writeFile(`tabla/tabla${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`La tabla del ${base} fue creado exitosamente!`);
});
fs.writeFile("message.txt", "HOLA AMIGOS", (err) => {
  if (err) throw err;
  console.log("File was created successfully!");
});
*/
/*
crearArchivo(base)
  .then((archivo) => console.log(`Archivo creado: ${archivo}`))
  .catch((err) => {
    console.error(`Upss hubo un error al crear el archivo => ${err}`);
  });
*/
