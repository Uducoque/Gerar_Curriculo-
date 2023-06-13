$(document).ready(function () {
  $("#buttonPrevious").click(function () {
    let currentClass = $("#stepForm").attr("class");
    let previousClass = "";

    if (currentClass === "") {
      previousClass = "Person"; // Não há etapa anterior, mantém a mesma classe
    } else if (currentClass === "Person") {
      previousClass = "Person"; // Não há etapa anterior, mantém a mesma classe
    } else if (currentClass === "Objective") {
      previousClass = "Person";
    } else if (currentClass === "Resume") {
      previousClass = "Objective";
    } else if (currentClass === "Formation") {
      previousClass = "Resume";
    }

    // Altera a classe da div
    $("#stepForm").removeClass().addClass(previousClass);
  });

  $("#buttonNext").click(function () {
    let currentClass = $("#stepForm").attr("class");
    let nextClass = "";

    if (currentClass === "") {
      nextClass = "Person"; // Não há etapa anterior, mantém a mesma classe
    } else if (currentClass === "Person") {
      nextClass = "Objective";
    } else if (currentClass === "Objective") {
      nextClass = "Resume";
    } else if (currentClass === "Resume") {
      nextClass = "Formation";
    } else if (currentClass === "Formation") {
      nextClass = "Formation"; // Não há próxima etapa, mantém a mesma classe
    }

    // Altera a classe da div
    $("#stepForm").removeClass().addClass(nextClass);
  });
});
