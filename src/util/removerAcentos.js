const removerAcentos = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]|\s/g, "");
}

export default removerAcentos;