let name = prompt("Coloque o seu nome");

document.getElementById("user").innerHTML = "Olá, " + name + "!";

let test = prompt("Quer iniciar o teste?\nResponda sim para iniciar ou não para fechar a página.");

if (test == "não") {
    
    alert("Obrigada. Você pode fechar a janela!");
    prompt.close();
}

let question1 = prompt("1. O que é CSS?\nA - Linguagem de marcação\nB - Folha de estilo\nC - Linguagem de programação");

if (question1 == "b") {

    document.getElementById("question1-correct").innerHTML = "Questão 1";
} else {

    document.getElementById("question1-wrong").innerHTML = "Questão 1";
}

let question2 = prompt("2. O que '2'+1+5 retorna?\nA - 8\nB- '2'+6\nC- 215?");

if (question2 == "c") {

    document.getElementById("question2-correct").innerHTML = "Questão 2";
} else {

    document.getElementById("question2-wrong").innerHTML = "Questão 2";
}

let question3 = prompt("3. Qual dos seguintes elementos não possui tag de fechamento?\nA - <img>\nB - <p>\nC - <h>")

if (question3 == "a") {

    document.getElementById("question3-correct").innerHTML = "Questão 3";
} else {

    document.getElementById("question3-wrong").innerHTML = "Questão 3";
}
