function calcularDesconto(preco, tipoCliente) {
    if (tipoCliente === "membro") {
        return preco * 0.9;
    }
    return preco;
}

console.log(calcularDesconto(100, "membro"));

//atv1 wendel
