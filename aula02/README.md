# Aula 02

```
Profa.: Lisandra Cruz
Monitora: Beatriz Ramerindo
```

<p align="center">
  <img width="400" src="https://pa1.aminoapps.com/6406/ea2d34d3d616fc99105c36657d45bf237012d049_00.gif">
</p>

## 🔠 String
> É a sequência de caracteres, sejam eles textuais, numericos, simbolos e afins;

### Concatenação
  <b>Tradicional: </b> Através do + conseguimos unir textos com variaveis.
  
  <b>Template string: </b> Através do da crase envolvendo toda a frase, adicionando as variaveis dentro do `${}` conseguimos unir textos e variáveis.

```javascript
const nomePais = "Brasil";
const capitalPais= "Brasilia";
const quantidadeEstados = 26;

// Tradicional
console.log("Eu me chamo Lisandra e moro no " + nomePais + " que tem " + capitalPais + " como capital. Aqui sou muito feliz pois tenho "+ quantidadeEstados + " estados para desbravar!");

// Template String
console.log(`Eu me chamo Lisandra e moro no ${nomePais} que tem ${capitalPais} como capital. Aqui sou muito feliz pois tenho ${quantidadeEstados} estados para desbravar!`);
```

### Manipulação de Strings

Existem algumas formas de manipular string: 
- `length` checa o tamanho da string;
- `split` separa uma string definindo um limitador;
- `replace` substitui trechos da string;
- `slice` retorna só um trecho da string;
- `substr` retorna trechos de string informando a posição.
- mais: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 

---

## 🧮 Operadores aritméticos

### Os operadores aritméticos

```javascript
const soma = 21 + 21;
const subtracao = 21 - 21;
const multiplicacao = 21 * 21;
const divisao = 21 / 21;
```

Além dos mais comuns cidatos acima existe também o módulo da divisão que consiste no resto da divisão de dois números.

```javascript
const moduloDaDivisao = 21 % 21;
```

### Operadores de relacionais

```javascript
const estritamenteIgual = 21 === 21;
const estritamenteDiferente = 21 !== 21;
const maiorQue = 21 > 21;
const maiorOuIgualQue = 21 >= 21;
const menorQue = 21 < 21;
const menorOuIgualQue = 21 <= 21;
```

### Operadores lógico
```javascript
const and_e = estritamenteIgual && maiorQue;
const or_ou = maiorQue || estritamenteDiferente;
const not_nao = !estritamenteDiferente;
```
