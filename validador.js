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
    /*Verifica se não é número*/
    if (isNaN(cpf[cpf.length - 1])) {
        i.value = cpf.substring(0, cpf.length - 1);
        return;
    }
    
    i.setAttribute("maxlength", "14");
    
    /*Inclui a máscara do CPF*/
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
    /*Verifica se não é número*/
    if (isNaN(cnpj[cnpj.length - 1])) {
        i.value = cnpj.substring(0, cnpj.length - 1);
        return;
    }
    
    i.setAttribute("maxlength", "18");
    
    /*Inclui a máscara do CNPJ*/
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
    var email = formUser.email.value;
    var telefone = formUser.fone.value;
    var endereco = formUser.end.value;
    var cpf = formUser.cpf.value;
    var cnpj = formUser.cnpj.value;
    var senha = formUser.senha.value;
    var confSenha = formUser.confSenha.value;

    /*Valida o nome*/
    if (nome == "" || nome.length <= 3) 
    {
        alert("Informe o nome completo!");
        formUser.nome.focus();
        return false;
    }

    /*Valida o e-mail*/
    if (email == "" || email.length <= 8)
    {
        alert("E-mail inválido!")
        formUser.email.focus();
        return false;
    }

    /*Valida o telefone*/
    if (telefone == "" || telefone.length != 16)
    {
        alert("Informe o telefone completo!");
        formUser.fone.focus();
        return false;
    }
    
    /*Valida o endereço*/
    if (endereco == "" ||  endereco.length <= 5)
    {
        alert("Informe o endereço completo!");
        formUser.end.focus();
        return false;
    }

    /*Valida o CPF e CNPJ*/
    if (!formUser.tpPessoa[0].checked && !formUser.tpPessoa[1].checked)
    {
        alert("Informe o CPF ou CPNJ!");
        return false;
    }
    if (formUser.tpPessoa[0].checked)
    {
        if (cpf == "" || cpf.length != 14)
        {
            alert("Informe o CPF completo!");
            formUser.cpf.focus();
            return false;
        }
    }
    if (formUser.tpPessoa[1].checked)
    {
        if (cnpj == "" || cnpj.length != 18)
        {
            alert("Informe o CNPJ completo!");
            formUser.cnpj.focus();
            return false;
        }
    }

    /*Valida a senha*/
    if ( senha != "")
    {
        if (senha != confSenha)
        {
            alert("As senhas são diferentes!");
            formUser.senha.focus();
            return false;
        }
    }
    else
    {
        alert("Digite uma senha!");
        formUser.senha.focus();
        return false;
    }
}