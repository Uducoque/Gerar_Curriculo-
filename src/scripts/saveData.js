$(document).ready(function () {
  $("#formData").submit(function (e) {
    e.preventDefault(); // Evita o envio do formulário padrão

    // Obter os dados do formulário
    let nomeCompleto = $("#nomeCompleto").val();
    let nascimento = $("#nascimento").val();
    let genero = $("#genero").val();
    let estadoCivil = $("#estadoCivil").val();
    let nacionalidade = $("#nacionalidade").val();
    let cpf = $("#cpf").val();
    let endereco = $("#endereco").val();
    let email = $("#email").val();
    let celular = $("#celular").val();
    let formacao = $("#formacao").val();
    let objetivos = $("#objetivos").val();
    let regiaoInteresse = $("#regiaoInteresse").val();
    let pretensaoSalarial = $("#pretensaoSalarial").val();
    let resumo = $("#resumo").val();
    let habilidades = $("#habilidades").val();
    let idiomas = $("#idiomas").val();


    // Armazena os valores no LocalStorage
    localStorage.setItem("name", nomeCompleto);
    localStorage.setItem("nascimento", nascimento);
    localStorage.setItem("genero", genero);
    localStorage.setItem("estadoCivil", estadoCivil);
    localStorage.setItem("nacionalidade", nacionalidade);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("endereco", endereco);
    localStorage.setItem("email", email);
    localStorage.setItem("celular", celular);
    localStorage.setItem("formacao", formacao);
    localStorage.setItem("objetivos", objetivos);
    localStorage.setItem("regiaoInteresse", regiaoInteresse);
    localStorage.setItem("pretensaoSalarial", pretensaoSalarial);
    localStorage.setItem("resumo", resumo);
    localStorage.setItem("habilidades", habilidades);
    localStorage.setItem("idiomas", idiomas);


    window.location.href = "Curriculo.html";
  });
});
