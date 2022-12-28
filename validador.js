/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function mascaraTel(i)
{
    const tel = i.value;
    /*Verifica se não é número*/
    if (isNaN(tel[tel.length - 1])) {
        i.value = tel.substring(0, tel.length - 1);
        return;
    }
    
    i.setAttribute("maxlength", "16");
    
    /*Inclui a máscara do telefone*/
    if (tel.length == 1) {
        i.value = "(" + i.value;
    }
    if (tel.length == 3) {
        i.value += ") ";
    }
    if (tel.length == 6) {
        i.value += " ";
    }
    if (tel.length == 11) {
        i.value += "-";
    }
}

function mascaraCPF(i)
{
    const cpf = i.value;
    
    if (isNaN(cpf[cpf.length - 1])) {
        i.value = cpf.substring(0, cpf.length - 1);
        return;
    }
    
    i.setAttribute("maxlength", "14");
    
    if (cpf.length == 3) {
        i.value += ".";
    }
    if (cpf.length == 7) {
        i.value += ".";
    }
    if (cpf.length == 11) {
        i.value += "-";
    }
}

function mascaraCNPJ(i)
{
    const cnpj = i.value;
    
    if (isNaN(cnpj[cnpj.length - 1])) {
        i.value = cnpj.substring(0, cnpj.length - 1);
        return;
    }
    
    i.setAttribute("maxlength", "18");
    
    if (cnpj.length == 2) {
        i.value += ".";
    }
    if (cnpj.length == 6) {
        i.value += ".";
    }
    if (cnpj.length == 10) {
        i.value += "/";
    }
    if (cnpj.length == 15) {
        i.value += "-";
    }
}

function validar()
{
    var nome = formUser.nome.value;
    
    if (nome == "" || nome.length <= 3) {
        alert("Informe o nome completo!");
        formUser.nome.focus();
        return false;
    }
    
}