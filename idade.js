function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else if (idade < 65) {
        return "Maior de idade";
    } else {
        return "Idoso";
    }
}

console.log(verificarIdade(20));

//atv3 wendel
