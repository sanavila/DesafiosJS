function encontrarIndicesMaiorEMenor(array) {
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        }

        if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }

    console.log("Índice do maior valor:", indiceMaior);
    console.log("Índice do menor valor:", indiceMenor);
}

// Exemplo de uso:
let arrayNumerico = [5, 10,  3, 8, 1];
encontrarIndicesMaiorEMenor(arrayNumerico);
