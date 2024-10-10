function calcularFrete(peso) {
    if (peso <= 5) {
        return 20;
    } else if (peso <= 20) {
        return 50;
    } else {
        return 100;
    }
}

console.log(calcularFrete(12));
