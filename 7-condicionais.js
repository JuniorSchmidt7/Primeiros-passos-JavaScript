console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio Grande do Sul`,
);
const idadeComprador = 10;
const estaAcompanhada = false;
const temPassagemComprada = true;



console.log("Destinos Possiveis");
console.log(listaDeDestinos);


if (idadeComprador >= 18 || estaAcompanhada) {    //Operador de OU  ||
    console.log("Boa Viagem!");
    listaDeDestinos.splice(0, 1); // removendo item
} else {
  
    console.log("Não é maior de idade, nao posso vender.");
}
    
console.log("Embarque: \n\n");
if(idadeComprador>=18 && temPassagemComprada){   //Operador de E && 
console.log("Boa viagem!");
}else{
    console.log("Você nao pode embarcar.");
}

console.log(listaDeDestinos);


// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18); 


//Atividade

// const salario = 3300.0;

// if(salario < 2600.0) {
//     console.log("A sua aliquota é de 15%");
//     console.log("Você pode deduzir até R$ 350");
// }

// if(salario < 3750.0) {
//     console.log("A sua aliquota é de 22,5%");
//     console.log("Você pode deduzir até R$ 636");
// }