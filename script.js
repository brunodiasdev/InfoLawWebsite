function teste (num, div = 3 ){
    if (num % div === 0){
        console.log(`${num} é divisível por ${div}!`)
    } else{
        console.log(`OPS! ${num} Não é divisível por ${div}!`)
    }
}
teste(9)