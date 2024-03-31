# Aula 03

```
Profa.: Lisandra Cruz
Monitora: Beatriz Ramerindo
```

## 👒 Objetos
Objetos são estruturas de dados nas quais podemos armazenar coleções de propriedade contendo dados e funcionalidades. Um objeto pode ser criado com colchetes {...} (objeto literal) ou usando _new Object()_ (objeto construtor), junto a uma lista opcional de propriedades, destacando que as duas formas de criar objetos geram o mesmo resultado - fica à critério da pessoa desenvolvedora escolher a forma de preferência. Uma propriedade é composta pôr um par `chave: valor` no qual a chave representa uma string que identifica o nome da propriedade. O valor que pode ser qualquer tipo de dado que você queira armazenar. 

Para acessarmos uma propriedade existente em um determinado objeto, podemos fazê-lo de três formas: 
1. Usando o ponto;
2. Passando o nome da propriedade dentro de colchetes;
3. Desestruturando o objeto;

```javascript
const filme = {nome: "Dona Lurdes - O Filme", duracao: "149", genero: "Comédia", ano: 2024, semestre: 1, classificacaoIndicativa: 12, protagonista: "Regina Cazé", producao: "Estudios Globo"}

/* acessando as propriedades */
// usando ponto
console.log(filme.nome)

// usando colchete
console.log(filme[nome])

// desestruturando
const { nome } = filme
```

🏋🏾 Praticando

> Usando o objeto acima, concatene os dados em uma frase que faça sentido.
> 
> Regras:
> 1. Todas as propriedades devem ser utilizadas;
> 2. A duração deve ser expressa em horas caso tenha, ex.: 1 hora e 2 minutos.`

## Array
