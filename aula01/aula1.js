console.log("Olá afrocodigos!");

// ~~~~~
var nome = "Lisandra Cruz"; //hoisting
let idade = 21;
const profissao = "professora";

console.log(nome);
console.log(idade);
console.log(profissao);
// ~~~~~

console.log(nome); // não da erro :0
if (1 == 1) {
  var nome = "Lisandra Cruz";
}

// ~~~~~

let idade = 21;
const profissao = "professora";

console.log(nome); // da erro <3
if (1 == 1) {
  let nome = "Lisandra Cruz";
}

// ~~~~~

//o que danado é pda? o que danado é asb?
// talvez hj vc e deux saiba, mas daqui a pouco só ele saberá
const pda = 122;
const asb = "casa";

// Seja semântica e dê nomes que façam sentido
const pesoDoAndaime = 122;
