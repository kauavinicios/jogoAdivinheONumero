var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector("#palpites");
var dica = document.querySelector("#dica"); // Verifique se existe um elemento com esse ID no HTML
var baixoAlto = document.querySelector("#baixoAlto"); // Verifique se existe um elemento com esse ID no HTML

var envioPalpite = document.querySelector("#enviarPalpite");
var palpite = document.querySelector("#palpite");
var formulario = document.querySelector("#form");

var chances = 1;
var reiniciar;


envioPalpite.addEventListener("click", conferirPalpite);

function conferirPalpite() {
    var palpiteUsuario = Number(palpite.value);
    if (chances === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }

    palpites.textContent += palpiteUsuario + ", ";

    if (palpiteUsuario === numeroAleatorio) { // Corrigido para comparar com numeroAleatorio
        dica.textContent = "Parabéns! Você acertou!"; // Corrigido para usar textContent
        dica.style.color = "green";
        endgame();
    } else if (chances === 10) {
        dica.textContent = "!! FIM DE JOGO !!";
        dica.style.color = "red";
        endgame();
    } else {
        if (palpiteUsuario > numeroAleatorio) {
            dica.textContent = "Quase lá, este palpite foi muito alto!"; // Corrigido "muinto" para "muito"
        } else if (palpiteUsuario < numeroAleatorio) {
            dica.textContent = "Quase lá, este palpite foi muito baixo!"; // Corrigido "muinto" para "muito"
        }
    }

    chances++;
    palpite.value = "";
    palpite.focus();
}

function endgame() {
    formulario.setAttribute("hidden", ""); // Corrigido para "hidden"
    var botaoReinicio = document.createElement("button");  
    botaoReinicio.textContent = "Novo jogo";               
    document.querySelector("#main").appendChild(botaoReinicio);
    botaoReinicio.setAttribute("id", "reiniciarJogo");
    botaoReinicio.addEventListener("click", reiniciarJogo);
}

function reiniciarJogo() {
    chances = 1;

    var reiniciar = document.querySelectorAll(".reset"); // Corrigido para querySelectorAll
    for (let i = 0; i < reiniciar.length; i++) {
        reiniciar[i].textContent = ""; // Corrigido para acessar o índice i
    }

    botaoReinicio = document.querySelector("#reiniciarJogo");
    botaoReinicio.parentNode.removeChild(botaoReinicio);

    dica.style.color = "black"; // Corrigido para atribuir diretamente

    formulario.removeAttribute("hidden"); // Corrigido para "hidden"
    palpite.value = "";
    palpite.focus();
    numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gera um novo número aleatório
}
