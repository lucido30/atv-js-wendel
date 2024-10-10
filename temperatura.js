function classificarTemperatura(temperatura) {
    if (temperatura < 15) {
        return "Frio";
    } else if (temperatura <= 25) {
        return "Agradável";
    } else {
        return "Quente";
    }
}

console.log(classificarTemperatura(22));

//atv5 wendel
