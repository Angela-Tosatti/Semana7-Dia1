// 1 - Escreva uma função chamada forEach(), que deverá obedecer as seguintes premissas:
// Recebe uma array como primeiro parametro e;
// Recebe uma função como segundo parametro;
// Percorre, utilizando um for, cada item da array;
// Para cada item da array, executa a função de callback, passando o item como argumento: callback(item);

const array = [1, 2, 3, 4];

function forEach(array, retorno) {
    for (var num = 0; num < array.length; num++) {
        retorno(array[num])
    }
}

function retorno(num) {
    let soma = num + num;
    console.log(soma);
}
forEach(array, retorno);

// 2 - Escreva uma função chamada map(), que deverá obedecer as seguintes premissas:
// Recebe uma array como primeiro parâmetro e;
// Recebe uma função como segundo parâmetro;
// Percorre, utilizando um for, cada item da array;
// Para cada item da array, executa a função de callback, passando o item como argumento: callback(item). Essa função de callback deverá retornar alguma informação, para satisfazer o próximo item;
// Retorna uma nova array, sendo que cada item dessa array, é o resultado da função de callback;

const array2 = [3, 6, 9, 12];

function map(array2, retorno2) {
    const arr = [];
    for (var numero = 0; numero < array2.length; numero++) {
        var nome = retorno2(array2[numero])
        arr.push(nome)
    }
    return arr
}

function retorno2(numero) {
    let dobro = numero * 2;
    return dobro
}
var consulta = map(array2, retorno2)
console.log(consulta);

// 3 - Escreva uma função chamada findIndex(), que deverá obedecer as seguintes premissas:
// Recebe uma array como primeiro parametro e;
// Recebe uma função como segundo parâmetro, essa função deverá ser uma função de comparação, exemplo:
// function acharNumero2(num) {
// 	if (num == 2) {
// 		return true;
// 	}
// }
// Percorre, utilizando um for, cada item da array, chamando a função comparativa de callback acima;
// Ao encontrar um item que satisfaça a comparação, retorna o índice (posição do item na array) daquele item;

const array3 = [1, 2, 6, 8];

function findIndex(array3, acharNumero) {
    for (let i = 0; i < array3.length; i++) {
        var abc = acharNumero(array3[i]);
        if (abc == true) {
            return i
        }
    }
}

function acharNumero(i) {
    if (i == 1) {
        return true
    } else {
        return false
    }

}
var resultado = findIndex(array3, acharNumero)
console.log(resultado);