export const removeItemOnce = (arr, value) => {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

export const removerAcentos = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]|\s/g, "");
}