// if(condição){
//     comandos
// }else{
//     comandos
// }

// exercicio
// Fazer um login, se usuario digitar a senha e o usuario corretos, uma mensagem de login efetuado com sucesso aparece
// se o usuario digitar o user errado dar uma mensagem de erro de usuario
// se digitar a senha errada aparcer msg de senha errada

// user = joao
// senha = aviao123

let user = 'joao';
let senha = 'aviao123';
let usuario = prompt ("Digite o seu usuario");
let password = prompt("Digite a sua senha");

if (('joao' == usuario || 'Joao' == usuario) && senha == password) {
    alert("Login efetuado com sucesso");
}
else if (user != usuario && senha == password) {
    alert("Usuario Incorreto")
}else if(user == usuario && senha != password){
    alert ("Senha Incorreta")
} else{
    alert("Usuário e senha incorretos")
}
