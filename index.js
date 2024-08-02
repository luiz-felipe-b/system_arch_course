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

