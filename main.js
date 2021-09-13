let computador = Math.floor(Math.random(1, 4) * 4);
let jogador = Number(
    prompt("Digíte [1] para pedra [2] para papel e [3] para tesoura")
);

if (jogador == computador) {
    console.log("Deu empate");
} else if (jogador == 1 && computador == 2) {
    console.log("A maquina ganhou");
} else if (jogador == 1 && computador == 3) {
    console.log("A jogador ganhou");
} else if (jogador == 2 && computador == 1) {
    console.log("A jogador ganhou");
} else if (jogador == 2 && computador == 3) {
    console.log("A maquina ganhou");
} else if (jogador == 3 && computador == 1) {
    console.log("A maquina ganhou");
} else {
    // if (jogador == 3 && computador == 2)

    console.log("A jogador ganhou");
}

if (jogador == 1) {
    jogador = "pedra";
} else if (jogador == 2) {
    jogador = "papel";
} else {
    //    (jogador == 3)
    jogador = "tesoura";
}
if (computador == 1) {
    computador = "pedra";
} else if (computador == 2) {
    computador = "papel";
} else {
    //       (computador == 3)

    computador = "tesoura";
}
console.log(`A maquina jogou ${computador}  O jogador jogou ${jogador}`);
