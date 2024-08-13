// numero 1

let numbers = [1, 2, 3, 4, 5];
let triplo = numbers.map(x => x * 3);
console.log(triplo);

//numero 2

let num = [1, 2, 3, 4, 5];
let conversao = num.map(x => x.toString());
console.log(conversao);

//numero 3

let frutas = ["maçã", "banana", "laranja"];
let Manipulacao = frutas.map(fruta => fruta.toUpperCase());
console.log(Manipulacao);

// numero 4

let pessoas = [{ nome: "maria", idade: 25 }, { nome: "charles", idade: 30 }, { nome: "luiz", idade: 35 }];
let nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);

// numero 5

let number = [1, 2, 3, 4, 5];
let quadrado = number.map(x => x * x);
console.log(quadrado);

// numero 6

let meuArray = [1, 2, 3];
meuArray[0] = 4;
console.log(meuArray);

let minhaString = "Olá";

//numero  7

 localStorage.setItem('key', 'value');
 let value = localStorage.getItem('key');
 console.log(value);
 key = chave, value = valor



let stringPrimitiva = 'oii';
let referencia = { saudacao: 'oii' };

console.log(stringPrimitiva);      
console.log(referencia.saudacao); 



let arraySimples = [1, 2, 3];
let arrayMulti = [[1, 2], [3, 4]];

console.log(arraySimples);
console.log(arrayMulti); 