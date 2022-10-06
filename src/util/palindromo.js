import removerAcentos from './removerAcentos';

const palindromo = (palindromo) => {
    if (palindromo == null || palindromo.length < 2) {
        return '';
    }

    palindromo = removerAcentos(palindromo.toString().toLowerCase().trim());

    for (let index = 0; index < palindromo.length / 2; index++) {
        var oposto = palindromo.length - index - 1;

        if (palindromo[index] != palindromo[oposto]) {
            return 'Não é um palíndromo';
        }
    }

    return 'É um palíndromo';
}

export default palindromo;