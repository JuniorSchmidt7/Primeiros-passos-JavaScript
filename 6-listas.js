console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const sp = `São Paulo`;
// const rs = `Rio Grande do Sul`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio Grande do Sul`,
);

listaDeDestinos.push(`Curitiba`);
console.log("Destinos Possiveis");
//console.log(salvador, sp, rs,);
console.log(listaDeDestinos);

listaDeDestinos.splice(0,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);