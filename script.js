const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas1 = [
    {
        enunciado: "Cristiano Ronaldo é melhor que o Messi?",
        alternativas: [
            {
                texto: "claro!!!",
            }
        
        "Obviamente!!!"
        ]
    },
    {
        enunciado: "Neymar é mídia?",
        alternativas: [
        "Sim, Neymar é zika",
        "Não, Neymar é paia"
        ]
    },
    {
        enunciado: "Do you like to play footboll?",
        alternativas: [
        "Yes",
        "No"
        ]
    },
    {
        enunciado: "Neymal melhor do mundo?",
        alternativas: [
        "Sim!!!!!",
        "Claro!!!!!"
        ]
    },
    {
        enunciado: "Cistiano de bicicleta ......",
        alternativas: [
        "Minha nossaaaaaa!!!!!!!",
        "Meu Deussssss!!!!!!!!!"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(); {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();