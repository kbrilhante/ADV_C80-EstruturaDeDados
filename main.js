var arrayAlunos = [];

function enviar() {
    // var nome1 = document.getElementById("aluno1").value;
    // var nome2 = document.getElementById("aluno2").value;
    // var nome3 = document.getElementById("aluno3").value;
    // var nome4 = document.getElementById("aluno4").value;

    // arrayAlunos.push(nome1);
    // arrayAlunos.push(nome2);
    // arrayAlunos.push(nome3);
    // arrayAlunos.push(nome4);

    for (var cont=1; cont<=4; cont++) {
        var nome;
        nome = document.getElementById("aluno" + cont).value;
        console.log(nome);
        arrayAlunos.push(nome);
    }

    console.log(arrayAlunos);
    
    escreveHTML();

    document.getElementById("btnEnviar").style.display = "none";
    document.getElementById("btnOrganizar").style.display = "inline-block";
}

function organizar() {
    arrayAlunos.sort();
    console.log(arrayAlunos);

    // document.getElementById("mostraNomes").innerHTML = arrayAlunos;
    escreveHTML();
}

function escreveHTML() {
    var tamanhoArray = arrayAlunos.length;
    var arrayHTML = [];
    var html = "";

    for (var i=0; i<tamanhoArray; i++) {
        arrayHTML.push("<h4>Nome - " + arrayAlunos[i] + "</h4>");
    }

    console.log(arrayHTML);

    html = arrayHTML.join("");
    console.log(html);

    document.getElementById("mostraNomes").innerHTML = html;
}