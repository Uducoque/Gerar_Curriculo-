// Recupera os valores do Local Storage
let nomeCompleto = localStorage.getItem("name");
let nascimento = localStorage.getItem("nascimento");
let genero = localStorage.getItem("genero");
let estadoCivil = localStorage.getItem("estadoCivil");
let nacionalidade = localStorage.getItem("nacionalidade");
let cpf = localStorage.getItem("cpf");
let endereco = localStorage.getItem("endereco");
let email = localStorage.getItem("email");
let celular = localStorage.getItem("celular");
let formacao = localStorage.getItem("formacao");
let objetivos = localStorage.getItem("objetivos");
let regiaoInteresse = localStorage.getItem("regiaoInteresse");
let pretensaoSalarial = localStorage.getItem("pretensaoSalarial");
let resumo = localStorage.getItem("resumo");

// Imprime os valores na tela
$("#nomeCompleto").text(nomeCompleto);
$("#nascimento").text(nascimento);
$("#genero").text(genero);
$("#estadoCivil").text(estadoCivil);
$("#nacionalidade").text("Nacionalidade: " + nacionalidade);
$("#cpf").text("CPF: " + cpf);
$("#endereco").text("Endereço: " + endereco);
$("#email").text("Email: " + email);
$("#celular").text("Celular: " + celular);
$("#formacao").text(formacao); // Correção realizada nesta linha
$("#objetivos").text(objetivos);
$("#regiaoInteresse").text(regiaoInteresse);
$("#pretensaoSalarial").text(pretensaoSalarial);
$("#resumo").text(resumo);
