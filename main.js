var arrayAlunos = [];

function enviar() {
    var nome1 = document.getElementById("aluno1").value;
    var nome2 = document.getElementById("aluno2").value;
    var nome3 = document.getElementById("aluno3").value;
    var nome4 = document.getElementById("aluno4").value;

    arrayAlunos.push(nome1);
    arrayAlunos.push(nome2);
    arrayAlunos.push(nome3);
    arrayAlunos.push(nome4);

    console.log(arrayAlunos);
    document.getElementById("mostraNomes").innerHTML = arrayAlunos;

    document.getElementById("btnEnviar").style.display = "none";
    document.getElementById("btnOrganizar").style.display = "inline-block";
}

function organizar() {
    arrayAlunos.sort();
    console.log(arrayAlunos);
    document.getElementById("mostraNomes").innerHTML = arrayAlunos;
}