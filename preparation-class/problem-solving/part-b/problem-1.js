function pangkat(base, pangkat) {
    n = 1;
    for (i = 1; i <= pangkat; i++) {
        n *= base
    }
    console.log(n)
}

pangkat(2, 3);
pangkat(5, 2);