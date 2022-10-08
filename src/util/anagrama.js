import { removerAcentos, removeItemOnce } from './util';

const anagrama = (palabra1, palabra2) => {
    if (palabra1 == null || palabra1.length < 2 || palabra2 == null || palabra2.length < 2) {
        return '';
    }

    if (palabra1.length != palabra2.length) {
        return 'Não são anagramas';
    }

    palabra1 = Array.from(removerAcentos(palabra1.toString().toLowerCase().trim()));
    palabra2 = Array.from(removerAcentos(palabra2.toString().toLowerCase().trim()));

    for (let i = 0; i < palabra1.length; i++) {
        var exist = false;

        for (let j = 0; j < palabra1.length; j++) {
            if (palabra1[i] == palabra2[j]) {
                palabra2 = removeItemOnce(palabra2, palabra2[j]);

                exist = true;
                break;
            }
        }

        if (!exist) {
            return "Não são anagramas";
        }
    }

    return "São anagramas";
}

export default anagrama;