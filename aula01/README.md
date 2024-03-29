# Aula 01

```
Profa.: Lisandra Cruz
Monitora: Beatriz Ramerindo
```

## Preparando o ambiente de desenvolvimento

<p align="center">
  <img width="400" src="https://64.media.tumblr.com/ebc88add3f40107dc41f289ee05c865d/660c3fe096ab7c4c-59/s540x810/855b97698e377f23d0054518f62262571bedfa24.gif">
</p>

Para o bem geral da nação e felicidade da pessoa programadora, hoje iremos configurar nosso ambiente de desenvolvimento, para que durante as proximas aulas tenhamos apenas que nos preocupar com aprender JavaScript e fazer nosso código funcionar! Para isso seguiremos alguns passos.

1. Baixe o [Node](https://nodejs.org/en/) e instale no seu computador
<p align="center">
  <img alt="Print do site de instalação do node" src="https://user-images.githubusercontent.com/7760933/216825981-a27d4a76-f5a2-4da5-bdfd-6946f7fae20b.png" width=400 />
</p>

Normalmente vamos nos deparar com dois tipos de downloads. O primeiro é o **LTS**, que é uma sigla para **Long Term Support**, isso quer dizer que é uma versão segura, estável e confiável para uso. O segundo é a **Current**, que é a versão atual em que a equipe está trabalhando e abarca as novidades e atualizações, no entanto, não há garantia de estabilidade.

> Vamo de LTS né minha bença?! No momento a não precisamos de dor de cabeça com a versão do Node.

2. Vamos conferir se deu tudo certo! Abra o terminal do seu computador e digite o seguinte comando: `node --version`, você deve receber uma resposta com o numero da versão que você instalou como mostrado no print abaixo. Se você receber um erro como `command not found` isso significa dizer que ⚠️ deu algo errado ⚠️ na sua instalação.

  <p align="center">
    <img alt="Print do site de instalação do node" src="https://user-images.githubusercontent.com/7760933/216827338-3364a1a9-c92a-4ce6-b88f-1a806175f912.png" width=400 />
  </p>

3. Agora vamos baixar o [Visual Studio Code](https://code.visualstudio.com/download), basta escolher o seu sistema operacional e seguir com a instalação.

4. Muito bem pequeno gafanhoto, se você chegou até aqui já é sucesso! Vamos ver as coisas na prática? Seguindo a tradição, precisamos começar com o `Olá Mundo/Hello World` para que não sejamos amaldiçoados pela deusa da programação.

   - Abra o Visual Studio
   - Crie um arquivo `primeiro-programa.js`
   - Escreva o código abaixo e em seguida salve seu arquivo
     ```javascript
     console.log("Olá Mundo, eu to no Afrocódigos o/");
     ```

5. Agora enfim, vamos chamar o Node para rodar nosso código. Preparadas?

   - Abra o terminal do Visual Studio Code
   - Digite o seguinte comando: `node primeiro-programa.js`
   - Se der tudo certo, você vai ver no terminal a mensagem que você inseriu dentro do console.log :D
   - Dias de glória maravideusianes! 🎉

6. Agora a coisa vai melhorar mais ainda, saca só.. o VS Code é abarrotado de plugins massa e vamos fazer uso de um deles. O `Code Runner`, e que danado isso vai fazer? Facilitar a sua vida! hehehehhe. Vá em extensões, pesquise por `Code Runner` e instale.

  <p align="center">
    <img alt="Print da tela de instalação do code runner" src="https://user-images.githubusercontent.com/7760933/216828456-9eebad67-3388-4543-bea4-4fa4bf0bd04f.png" width=600 />
  </p>

7. Dias de Glória! Agora, sempre que quisermos rodar nosso programa, basta clicar no icone de ▶️ no canto superior direito do seu visual code.

`Aconteceu qualquer problema?`
Use o [Replit](https://replit.com/~) até conseguir resolver, dessa forma você não fica de fora das atividades!

---

## Front end

<p align="center">
  <img src="https://github.com/afrocodigos/TF-JS-I/assets/7760933/aca954ca-cf7d-48a7-8009-e18f5fc74dfc">
  
[leia mais..](https://medium.com/@ist.stevkovski/is-it-front-end-or-front-end-or-frontend-3ae717cae4aa)
</p>

✨ front-end é um adjetivo composto, segundo o dicionário de [Cambridge](https://dictionary.cambridge.org/pt/dicionario/ingles/front-end) é `usado como adjetivo composto para descrever outro substantivo`.

✨ front end é um substantivo composto, segundo o dicionário de [Cambridge](https://dictionary.cambridge.org/pt/dicionario/ingles/front-end) refere-se `as partes de um computador, software ou site que são vistas e usadas diretamente pelo usuário`.

✨ frontend não é citado no dicionário 🥲

### E o que faz uma pessoa front-end?

Desenvolve o front end das apliçaões 🥹✌🏾 [leia mais](https://ebaconline.com.br/blog/desenvolvedor-front-end-o-que-faz)

## JavaScript

JavaScript é uma linguagem de programação originalmente desenvolvida para trazer maior interatividade a websites. Ela tornou possível o desenvolvimento de aplicações atuais da web, ao permitir que você interaja diretamente sem precisar recarregar a página a cada ação. Ela também é usada em sites mais tradicionais, para fornecer interatividades mais inteligentes. Mais sobre a origem dessa linguagem [aqui](https://www.alura.com.br/apostila-html-css-javascript/38CA-eventos-com-javascript).

O JavaScript foi criado para atender a demandas de front. À medida que a demanda pela linguagem acompanhava o crescimento tecnológico, surgiu a ideia de utilizar uma mesma linguagem no cliente e no servidor que conseguisse otimizar processos e serviços. O Node.JS tornou-se uma alternativa à programação back-end ao oferecer um ambiente de desenvolvimento de linguagem JavaScript. Um Node é um runtime, um conjunto de códigos e APIs (Interface de Programação de Aplicativos) que nos ajuda a obter informações. Nodes funcionam como bibliotecas: são responsáveis pelo tempo de execução (que faz o seu programa rodar) e agem como interpretador de JavaScript fora do ambiente de navegação web.

As funcionalidades do Node motivaram o engenheiro de software Ryan Dahl a desenvolver um ambiente que trabalhasse com linguagem JavaScript fora do navegador e pelo lado do servidor, como um programa instalável no computador via terminal, de forma menos restritiva.

## 🎲 Tipos de Dados

- `Number` representa um conjunto de dados numéricos positivos ou negativos, inteiros, reais ou decimais;

- `String` é a sequência de caracteres, sejam eles textuais, numericos, simbolos e afins;

- `Boolean` é uma variável que recebe um dado lógico com apenas duas possibilidades: ser verdadeiro ou falso (true or false);

- `Null` representa uma variável vazia ou nula que não armazena nada.

## 📦 Variáveis e Constantes

As variáveis tem o poder de armazenar informações inseridas em nossos códigos. A forma que escolhemos determinará se será uma variável de escopo local ou escopo global. Mas como assim?

- <b>Escopo global</b> quer dizer que uma vez declarada, essa variável estará “viva” durante toda a aplicação e poderá ser acessada em toda a aplicação.

- <b>Escopo local</b>, o escopo das variáveis locais é vinculado ao bloco onde elas são declaradas. Sendo assim, elas “morrem” ao final da instrução em que estão sendo executadas.

### Declarando variáveis e constantes

- `var` declara uma variável, opcionalmente, inicializando-a com um valor. [USO NÃO RECOMENDADO]

- `let` declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

- `const` declara uma constante de escopo de bloco, apenas de leitura.

🐼 🐼 🐼

`Todas as vezes que uma variável é criada com o VAR, um panda morre. Atualmente o seu uso está depreciado e não é considerado uma boa prática. Salvem os pandas, não usem VAR.`

🐼 🐼 🐼

<p align="center">
  <img width="600" src="https://miro.medium.com/max/1200/0*mYuuRwjUfUOAdHpo.jpg">
</p>

### Padrões de nomeclatura

`Iremos utilizar o camelCaseNoCurso`

<p align="center">
  <img width="400" src="https://juniortoexpert.com/wp-content/uploads/naming-convention-snake-case-kebab-case-camel-case.png">
</p>

#### 🏋🏽 Bora praticar

Abra o Visual Studio

<details>
<summary>Pratica 1: crie 3 constantes e mostre no console o valor salvo nelas</summary>

```javascript
const fruta1 = "banana";
const fruta2 = "maçã";
const fruta3 = "laranja";
console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
```

</details>
    
    
<details>
<summary>Pratica 2: Declare e insira os valores nas seguintes variáveis ou constantes: Nome do país, Pontos turísticos, Capital do país, Quantidade de estados, O país é da América Latina?
</summary>

```javascript
const nomePais = "Brasil";
let pontosTuristicos = "Pelorinho, Cristo Redentor";
const capitalPais = "Brasilia";
const quantidadeEstados = 26;
const eDaAmericaLatina = true;
```

</details>

```

Também é possível declarar muitas variáveis em uma declaração:

let pessoa = "Jess", idade = "25", signo = "Escorpião";

```

---

<p align="center">Isso é tudo pessoaaal!</p>
