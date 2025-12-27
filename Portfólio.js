
const Mudar_Sessao = document.getElementById("Mudar_Xp");

const sobre_mim = document.getElementById("Sobre_mim");

const Trabalhos = document.getElementById("Trabalhos");

const Portfolio = document.getElementById("Portfolio");


function home_Sessao() {

    Trabalhos.style.display = "none";
    
    sobre_mim.style.display = "none";

    Mudar_Sessao.style.display = "block";

    Portfolio.style.display = "none";
   
}

function Mudar_Info() {

    Trabalhos.style.display = "none";

    Mudar_Sessao.style.display = "none";

    sobre_mim.style.display = "block";

    Portfolio.style.display = "none";

}

function Mudar_Trabalhos() {

    Mudar_Sessao.style.display = "none";

    sobre_mim.style.display = "none";

    Trabalhos.style.display = "block";

    Portfolio.style.display = "none";
}

function Mudar_Curriculo() {

    Mudar_Sessao.style.display = "none";

    sobre_mim.style.display = "none";

    Trabalhos.style.display = "none";

    Portfolio.style.display = "block";
}
