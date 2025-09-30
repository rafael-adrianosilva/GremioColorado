function validarCadastro(){
    var obj_form = {
        nome: "",
        email: "",
        telefone: "", 
        idade: "",
        turma: "",
        esporte: ""
    }
    var el_nome = document.getElementById("nome");
    obj_form.nome = el_nome.value;

    var el_email = document.getElementById("email");
    obj_form.email = el_email.value;

    var el_telefone = document.getElementById("telefone");
    obj_form.telefone = el_telefone.value;

    var el_idade = document.getElementById("idade");
    obj_form.idade = el_idade.value;

    var el_turma = document.getElementById("turma");
    obj_form.turma = el_turma.value;

    var el_esporte = document.getElementById("esporte");
    obj_form.esporte = el_esporte.value;

    var json = JSON.stringify(obj_form, null, "");
    document.write("<h1>Dados para Json</h1>");
    document.write(json);
}

function validaForm(){
    const nomeRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefoneRegex = /^\d{10,}$/;

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    if (!nomeRegex.test(nome)){
        alert("Nome está inválido. Insira o nome corretamente");
        return false;
    }
    
    if (!emailRegex.test(email)){
        alert("E-mail está inválido. Insira o email corretamente");
        return false;
    }
    
    if (!telefoneRegex.test(telefone)){
        alert("Numero Inválido. Insira o número corretamente");
        return false;
    }

    return true;
}
