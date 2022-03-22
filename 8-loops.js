console.log(`\n Trabalhando com loops`);
const listaDeDestinos = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio Grande do Sul`,
);

const idadeComprador = 20;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio Grande do Sul "

console.log("\n Destinos Possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; //Operador de OU  ||

let contador = 0;
let destinoExiste = false;
// while (contador < 3) {
//     if (listaDeDestinos[contador] == destino) {
//         destinoExiste = true;
//         break;
//     }
//     contador += 1;
// }

for (let cont = 0; cont < 3; cont++){
    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;
        break;
    }

}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}


