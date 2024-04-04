/* ~~~~~~~~~~~  Verdadeiro ou Falso ~~~~~~~~~~~ */
// 1a. O número 10 é par?
console.log(10 % 2 === 0);

// 1b. A string "Olá" é igual a "oi"?
console.log("Olá" === "oi");

// 1c. O valor `null` é igual a `undefined`?
console.log(null === undefined);

// 1d. A expressão `1 + 1` é menor que 3?
// const soma = 1 + 1;
// console.log(soma < 3);
console.log(1 + 1 < 3);

// 1e. A expressão `5 * 2` é maior ou igual a 10?
console.log(5 * 2 >= 10);

// 1f. O numero 1 é igual a string "1"
console.log(1 === "1");

/* ~~~~~~~~~~~ Operadores Lógicos Básicos ~~~~~~~~~~~ */
// 2a. Escreva uma expressão que seja verdadeira se a variável `x` for maior que 10 e a variável `y` for menor que 5.
// const x = 11;
// const y = 1;
console.log(x > 10 && y < 5);

// 2b. Escreva uma expressão que seja verdadeira se a variável `a` for igual a "verdadeiro" ou a variável `b` for igual a "falso".
// const a = "falso";
// const b = "falso";
console.log(a === "verdadeiro" || b === "falso");

// 2c. Escreva uma expressão que seja falsa se a variável `c` for diferente de 0 e a variável `d` for igual a "Olá".
// const c = 1;
// const d = "Olá";
console.log(!(c !== 0 && d === "Olá"));

/* ~~~~~~~~~~~ Operadores Lógicos Negativos ~~~~~~~~~~~ */
// 3a. Escreva uma expressão que seja verdadeira se a variável `x` não for igual a 10.
// const x = 10;
console.log(x !== 10);

// 3b. Escreva uma expressão que seja falsa se a variável `y` for menor ou igual a 5.
// const y = 1;
console.log(!(y <= 5));

// 3c. Escreva uma expressão que seja verdadeira se a variável `z` não for vazia.
// const z = "não vazia";
// const z = null;
// const z = 1;
console.log(!!z);

/* ~~~~~~~~~~~ Operadores Lógicos Complexos ~~~~~~~~~~~ */
// 4a. Escreva uma expressão que seja verdadeira se a variável `x` for maior que 10 ou a variável `y` for menor que 5, mas não se ambas forem verdadeiras.

// 4b. Escreva uma expressão que seja verdadeira se a variável `a` for igual a "verdadeiro" e a variável `b` for diferente de "falso", ou se a variável `c` for menor que 0.

// 4c. Escreva uma expressão que seja falsa se a variável `d` for igual a "Olá" e a variável `e` não for vazia, ou se a variável `f` for maior ou igual a 10.
