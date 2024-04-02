/* ~~~~~~~~~~~  Manipulação de strings ~~~~~~~~~~~ */
const palavra = "Gambiarra";
//               0@2345678
const frase = "Num ninho de mafagafos há sete mafagafinhos.";

// 1. Mostre a quantidade de caracteres das strings palavra e frase.
// console.log("A constante palavra contem " + palavra.length + " caracteres.");
// console.log("A constante frase contem " + frase.length + " caracteres.");

// 2. Mostre palavra substituindo a primeira ocorrência de a pelo caractere @
const indice = palavra.indexOf("a");
// console.log(palavra.replace("a", "@"));
// console.log(palavra.substring(0, indice) + "@" + palavra.substring(indice + 1));

// 3. Mostre a posição em que a substring mega aparece em frase
// console.log(frase.indexOf("mega"));

// 4.Mostre o valor de frase com todos os caracteres maiusculos e sem espaço entre as palavras.
console.log(frase.replaceAll(" ", "").toUpperCase());

// 5. Assumindo o número de caracteres existentes em palavra como valor um indice,
// mostre qual caractere encontra-se na posição do índice em frase

// 6.Levando em consideração o numero de caracteres de frase, insira "* " + palavra + " * "
// exatamente na metade de frase e mostre a nova sentença formada.

// 7. Mostre o valor de palavra de trás para frente
