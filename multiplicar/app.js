const fs = require("fs");
const { request } = require("http");
const { resolve } = require("path");
var colours = require("colors");
//
let listTable = (base, limit = 10) => {
  console.log("============================================".green);
  console.log(`-------------- tabla de ${base} -----------------`.green);
  console.log("============================================".green);
  for (let index = 0; index < limit; index++) {
    console.log(`${base} * ${index} = ${base * index}`);
  }
};
//
let createFile = (base, limit = 10) => {
  return new Promise((resolve, reject) => {
    //
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    }

    //
    let data = "";
    for (let index = 0; index < limit; index++) {
      data += `${base} * ${index} = ${base * index}\n`;
    }

    fs.writeFile(`tabla/tabla-${base}-al-${limit}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}-al-${limit}.txt`);
    });
  });
};

module.exports = {
  createFile,
  listTable,
};
