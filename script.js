//objetos
let pessoa = {};

pessoa.nome = "";
pessoa.sbbrenome = "";
pessoa.idade = 0;

console.table(pessoa);

let myObject = {
    a: 5,
    b: 6
}

console.table(myObject);

let myNewObject = { 
    hello: 'world',
    bye: 'bye'
}

pessoa.c = myNewObject;

console.log(pessoa);

myNewObject = 'Hello World';

console.log(pessoa.c.bye);
console.log(myNewObject);


    let idade1 = prompt('Escreva a idade do usuario 1');
    let idade2 = prompt('Escreva a idade do usuario 2');
   if(idade1 > idade2){
    alert(`Olá Yuliana a sua ideade é ${idade1}`)
    alert("Olá Yuliana a sua idade é: " + idade1)
   }else if (idade1 < idade2) {
    alert(" O usuario 1 é mais novo que o usuario 2")
   }else{

   }
// Validação usando if
if (nome.length < 2){
    alert("o nome deve conter pelo menos 3 carateres")
}else {
    alert()
}
//Funções

function sumar(x,y){
    let resultado = x + y; //trocar para var e ver as diferenças
    return resultado // variavél de escopo local   
}

for (let i = 0; i < 2; i++){
    console.log(i)   
}
console.log(i) 

let numero1 = Number(prompt("Digite um numero"))
let numero2 = prompt("Digite um numero")

console.log(sumar(numero1,numero2));

function nomeCompleto(nome,sobrenome){
    let nomeCompleto = `${nome} ${sobrenome}`;
    return nomeCompleto;
}

console.log(nomeCompleto("Genesys","Rondon"))

//Arrays

let listaCompras = [
    'batata',
    'arroz',
    'carne',
    'bananas',
    'maçã'
];
console.log(listaCompras.length);
console.log(listaCompras[3]);

listaCompras.push(prompt("Adicione um novo produto"));

for (let i = 0; i < listaCompras.length; i++){
    console.log(listaCompras[i]);
}
console.log("-------------------------")
listaCompras.pop();
for (let produto of listaCompras){
    console.log(produto);
}

listaCompras.pop();
if (listaCompras.includes('bananas')){
    alert("Temos bananas")
}
console.log("-------------------------")
function mostrarItem(produto){
console.log(`O produto é: ${produto}`);
}

 listaCompras.forEach(mostrarItem);

 //contexto this

 function sayHello(){
    console.log(`Olá me chamo ${this.nomeAnimal}`)
 }

 function Person(nome, idade){
    this.nome = nome;
    this.idade = idade;
 }

 function Animal(nome, idade){
    this.nomeAnimal = nome;
    this.idadeAnimal = idade;
 }

 Animal.prototype.sayHello = function() {
    console.log(`Olá me chamo ${this.nomeAnimal} ${this.idadeAnimal}`)
 }

//  let me = new Person('Lucas',22);
//  me.sayHello();
 let myanimal = new Animal('Tigre',10)
 myanimal.sayHello();
