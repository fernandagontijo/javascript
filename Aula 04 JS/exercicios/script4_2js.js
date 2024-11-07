//Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
//mostrando uma mensagem de erro e voltando a pedir as informações.


//let usuario = prompt('Digite o nome do usuário: ')
//let senha = prompt('Digite a senha desejada: ')

//while (usuario === senha){
   //alert('Usuário nao pode ser igual a senha!')
  //  senha = prompt('Digite novamente a senha: ')
//}

while (true) { //pergunta inifinitamente, porem quero que isso pare quando o usuario for diferente da senha

    
    let usuario = prompt('Digite o nome do usuário: ')
    let senha = prompt('Digite a senha desejada: ')

    if(usuario !== senha){
        alert('cadastro realizado com sucesso')
        break
    }

    alert('O usuario nao pode ser igual a senha!')

}