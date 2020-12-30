function triangulo (l1, l2, l3){
    if (l1 === l2 && l2 === l3){
        return `É um triangulo equilátero: Lado 1 (${l1}) - Lado 2 (${l2}) - Lado 3 (${l3}) `
    } else if (l1!== l2 && l2 !== l3 && l3!==l1){
        return `É um triangulo Escaleno: Lado 1 (${l1}) - Lado 2 (${l2}) - Lado 3 (${l3})`
    } else if (l1 == l2 || l2 == l3 || l3 == l1){
        return `Temos aqui um triangulo Isósceles: Lado 1 (${l1}) - Lado 2 (${l2}) - Lado 3 (${l3})`
    } 
}