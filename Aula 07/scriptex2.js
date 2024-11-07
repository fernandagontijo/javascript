const contarVogais = (texto) => {
    let totalVogais = 0 //inicialmente meu texto tem zero vogais
    for (let letra of texto){ //defini uma variavel letra dentro da variavel texto numa função for
        console.log(letra) //aqui vai imprimir cada letra
        if (letra === 'a' || letra === 'e')
            totalVogais++ //contador
    }
    console.log(totalVogais) //imprimi o valor do contator TotalVogais
}
contarVogais('amora')