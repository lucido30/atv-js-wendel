function classificarNota(nota) {
    if (nota >= 70) {
        return "Aprovado";
    } else if (nota >= 50) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

console.log(classificarNota(65));

//atv2 wendel
