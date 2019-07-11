// while(condicao){
//    codigo a ser repetido enquanto a condicao for verdadeira 
// }
let signos = ['áries', 'touro', 'gemeos', 'cancer', 'leao', 'virgem', 'libra', 'escorpiao', 'sagitario', 'capricornio', 'aquario', 'peixes']
console.log(signos);
let contador = 0;
//-----------------------Exemplo com While ---------------------
console.log("EXEMPLO COM WHILE");

while(contador < signos.length){
    console.log(signos[contador]);
    // contador = contador + 1;
    // contador += 1;
    contador++;
}

//----------------------Exemplo com For------------------------
// for(inicio; fim; passo){
    
// }
console.log("EXEMPLO COM FOR");
for(let cont = 0; cont < signos.length; cont++){
    console.log(signos[cont]);
}


// let idade = Number(prompt("Digite a sua idade"));
// while (isNaN(idade)){
//     alert("Digite um número");
//     idade = Number(prompt("Digite a sua idade"));
// }

// for(let i in signos){
//     console.log(signos[i]);
// }

for(let signo of signos){
    console.log(signo);
}
