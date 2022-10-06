var memo = {};

const fibonacci = (n) => {
    if (n == null || n.length == 0) {
        return '';
    }

    n = Number.parseInt(n);

    if (isNaN(n)) {
        return 'Não existe fibonacci de um texto';
    }

    if (!Number.isInteger(n) || n < 0) {
        return 'Não existe fibonacci de um número não natural';
    }

    if (n < 2) {
        return n;
    }

    if (memo[n]) {
        return memo[n];
    }

    const nthFib = fibonacci(n - 1) + fibonacci(n - 2);

    memo[n] = nthFib;

    return nthFib;
}

export default fibonacci;