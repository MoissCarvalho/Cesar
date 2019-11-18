function cifraCesar(str, num){
    num = num % 26
    var lowerCaseStr = str.toLowerCase()
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var newStr = ''

    for(var i = 0; i < lowerCaseStr.length; i++){
        var  charAtual = lowerCaseStr[i]
        if(charAtual === ' '){
            newStr += charAtual
            continue
        }
        var indiceAtual = alfabeto.indexOf(charAtual)
        var indiceNovo = indiceAtual + num
        if(indiceNovo > 25) indiceNovo = indiceNovo - 26
        if(indiceNovo < 0) indiceNovo = indiceNovo + 26
        if(str[i] === str[i].toUpperCase()){
            newStr += alfabeto[indiceNovo].toUpperCase()
        }
        else newStr += alfabeto[indiceNovo]
    }
    return newStr
}

function decifraCesar(str, num){
    num = num % 26
    var lowerCaseStr = str.toLowerCase()
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var newStr = ''

    for(var i = 0; i < lowerCaseStr.length; i++){
        var  charAtual = lowerCaseStr[i]
        if(charAtual === ' '){
            newStr += charAtual
            continue
        }
        var indiceAtual = alfabeto.indexOf(charAtual)
        var indiceNovo = indiceAtual - num
        if(indiceNovo > 25) indiceNovo = indiceNovo - 26
        if(indiceNovo < 0) indiceNovo = indiceNovo + 26
        if(str[i] === str[i].toUpperCase()){
            newStr += alfabeto[indiceNovo].toUpperCase()
        }
        else newStr += alfabeto[indiceNovo]
    }
    return newStr
}

function cesar(){
    var Texto = document.getElementById("texto").value
    var cifra = document.getElementById("cif").value

    const cripto = cifraCesar(Texto, cifra)

    document.getElementById("cript").innerHTML = "Texto criptografado: "
    document.getElementById("textCript").innerHTML = cripto

    document.getElementById("decript").innerHTML = "Texto descriptografado: "
    document.getElementById("textDecript").innerHTML = decifraCesar(cripto, cifra)

    //console.log('Texto criptografado: ')
    //const cripto = cifraCesar(Texto, cifra)
    //console.log(cripto + '\n')

    //console.log('Texto descriptografado: ')
    //console.log(decifraCesar(cripto, cifra))
}