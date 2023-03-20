var idade = 22 //variavel a ser condicionada
if (idade < 16) {
    console.log('Não Vota') // primeira condição
} else if (idade < 18 || idade > 65) { 
    // else if atribui uma segunda condição true, con duas váriaveis {} somente depois de if
    console.log('Voto Opcional')
} else { (idade > 18)
    console.log('Voto Obrigatório') // terceira condição em caso false
}