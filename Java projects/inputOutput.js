"use strict";

const prompt = require('prompt-sync')();

let name = prompt("Enter your name : ");
let institution = prompt("Enter your institution : ");
let githubUser = prompt("Enter your github username : ");

console.log("My name is",name,"a student at",institution,"my Github username is",githubUser);
