//const, let e var
//use const para aplicar o princípio do menor privilégio
const constVar = "Luiz";
console.log(constVar);
//let nasce como undefined, podendo ser criada sem valor atribuído
//let cria uma variável do tipo dinâmico, podendo ser atibuída com qualquer valor
//mudar o tipo do valor muda exclusivamente o tipo do valor, a variável continua do tipo dinâmico
let letVar = 2
console.log(letVar);
console.log(typeof(letVar));
letVar = "João";
console.log(letVar);
console.log(typeof(letVar));
//var, assim como o let, é dinâmico
//porém, para mudarmos o valor de uma variável declarada com var, devemos escrever var antes do nome da variável
//além disso, o var ultrapassa o escopo de sua declaração
var varVar = "abc";
console.log(varVar);
var varVar = 123;
console.log(varVar);
if (varVar === 123) {
    var varVar = "Tchau escopo!"
    console.log(varVar);
}
console.log(varVar);
//mecanismo de dupla passagem do javascript
//um interpretador de javascript primeiramente lê todas as declarações do programa (atribuições de valores a variáveis) sem atribuir os
//valores às variáveis. Depois, na segunda leitura, são lidos todas as atribuições e ordens de execução, então podemos ter algo como abaixo:
console.log(duploMecanismo);
var duploMecanismo = "duploMecanismo";
console.log(duploMecanismo);

// coerção
const n1 = 2;
const n2 = '3';
//coerção implícita (não é explicitamente coercido a mudar de tipo)
const n3 = n1 + n2;
console.log(n3);
//coerção explícita (explicitamente coercido a mudar de tipo)
const n4 = n1 + Number(n2);

//comparação == e ===
// "==" compara apenas o valor dos comparandos
console.log(1 == 1); //true
console.log(1 == "1"); //true
// "===" compara o valor e o tipo dos comparandos
console.log(1 === 1); //true
console.log(1 === "1"); //false
// o "==" cria algumas comparações bizarras:
console.log(true == 1); //true
console.log(1 == [1]); //true
console.log(null == null); //true
console.log(null == undefined); //true
// portanto, NUNCA USAR o "=="



//vetores
var v1 = [];
console.log(v1.length); // 0
v1[0] = 3.4;
console.log(v1.length); // 1
v1[10] = "abc";
console.log(v1.length); // 11
v2 = [2, "abc", true];
console.log(v2);
for (let i = 0; i < v2.length; i++) {
    console.log(v2[i]);
}

// vetor constante
const v3 = [1, 2, 3];
console.log(v3);
v3.push(4);
// passa por conta do fato que quando uma variável é constante, quer dizer que não podemos mudar o objeto apontado pela variável
console.log(v3);
v3 = [1, 2, 3];
// não passa por conta do 
console.log(v3);

//funções utilitárias que utilizamos com vetores
const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
//filter
//filtra os elementos de uma array que satisfaça a função parametro (ela deve retornar um booleano)
const apenasComA = nomes.filter((n) => n.startsWith('A'));
console.log(apenasComA);
//output esperado: [ 'Ana Maria', 'Antonio', 'Alex' ]

//map
//passa cada elemento do array pela função parametro
const res = nomes.map((nome) => nome.charAt(0));
console.log(res);
//output esperado: [ 'A', 'A', 'R', 'A', 'C' ]

//every
//determina se todas os elementos do array satisfazem a função parametro
const todosComecamComA = nomes.every((n) => n.startsWith("A"));
console.log(todosComecamComA);
//output esperado: false

//reduce
//executa a função parametro em todos os elementos do array, acumulando o resultado e retornando-o
const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => ac + v)
// o parametro ac é o valor acumulado e o parametro v é o item atual acessado pela função reduce
console.log(soma)



//funções

//funções são declaradas e chamadas respectivamente no seguinte formato:
function hello() {
    console.log('Oi');
}
hello();
//output esperado: 'Oi'
//se quisermos adicionar um parâmetro, o colocamos dentro dos parênteses
//atenção que estamos reescrevendo a função hello() acima, portanto o output dela também irá mudar
function hello(nome) {
    console.log('Oi, ' + nome);
}
hello('Luiz');
//output esperado: 'Oi, Luiz'
//podemos ter vários parâmetros e atribuir o resultado da função em uma variável com a palavra-chave return
function soma(a, b) {
    return a + b;
}
const result = soma(2, 3);
console.log(result);
//output esperado: 5

//funções anônimas
//funções também podem ser declaradas anonimamente e atribuidas a uma variável
const dobro = function (n) {
    return n * 2;
};
const dobrado = dobro(4);
console.log(dobrado);
//output esperado: 8
//podemos definir valores padrões para parametros
const triplo = function (n = 5) {
    return 3 * n;
}
console.log(triplo());
console.log(triplo(10));
//output esperado: 15
//                 30

//arrow functions
//arrow functions são parecidas com funções anônimas, com a diferença de formatação, tendo o característico () => {}
const hello = () => console.log("Hello");
hello();
//output esperado: 'Hello'
const dobro = (valor) => valor * 2;
console.log(dobro(10))
//output esperado: 20
const triplo = (valor) => {
    return valor * 3;
};
console.log(triplo(10));
//output esperado: 30
const ehPar = (n) => {
    res = n % 2;
    return res === 0 ? true : false;
};
console.log(ehPar(10));
//output esperado: true



//closures
//funções são cidadãs de primeira classe no javascript, ou seja, elas podem ser atribuidas a variáveis, devolvidas por funções e
//passadas como parâmetros para outras funções
//existem também funções de alta ordem, são aquelas funções que recebem pelo menos uma função como parâmetro e/ou devolvem
//uma função como parâmetro
let umaFuncao = function () {
    console.log("Fui armazenada em uma variável");
}
umaFuncao();
// f é uma função de alta ordem, pois recebe uma função como parâmetro
// g também é de alta ordem, pois devolve uma função
function f(funcao) {
    funcao()
}
function g() {
    function outraFuncao() {
        console.log('Fui criada por g');
    }
    return outraFuncao;
}
//f pode ser chamada assim:
f (function() {
    console.log('Estou sendo passada para f')
})
//output esperado: 'Estou sendo passada para f'
//e g (que chama outraFuncao) pode ser chamada assim:
const gResult = g();
gResult()
//output esperado: 'Fui criada por g'
//e assim também
g()();
//podemos fazer outros testes com as funções
//f chama g, que apenas devolve uma função, portanto nada é exibido
f(g);
//f chama a função devolvida por g
f(g());
//output esperado: 'Fui criada por g'
//f tenta chamar o retorno da função criada por g, o que resulta em um erro pois ela não retorna nada
f(g()());
//se passarmos um literal como parâmetro também temos um erro
f(1);
