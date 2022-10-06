const fatorial = (fatorial) => {
    if (fatorial == null || fatorial.length == 0) {
        return '';
    }

    fatorial = Number.parseInt(fatorial);

    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }

    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }

    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }

    var resultado = fatorial;
    var primeiroMultipicador = fatorial - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }

    return resultado;
}

export default fatorial;