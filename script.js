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
                texto: "claro!!!"
                afirmacao: "afirmacao"
            }
            {
                texto: "Obviamente!!!"
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "Neymar é mídia?",
        alternativas: [
            {
                texto: "Sim, Neymar é zika",
                afirmacao: "afirmacao"
            }
            {
                texto: "Não, Neymar é paia"
                afirmacao: "afirmacao"
            }
              
        ]
    },
    {
        enunciado: "Do you like to play footboll?",
        alternativas: [
            {
                texto: "Yes",
                afirmacao: "afirmacao"
            }
            {
                texto: "No"
                afirmacao: "afirmacao"
            }
               
        ]
    },
    {
        enunciado: "Neymar melhor do mundo?",
        alternativas: [
            {
                texto: "Sim!!!!!",
                afirmacao: "afirmacao"
            }
            {
                texto:  "Claro!!!!!"
                afirmacao: "afirmacao"
            }
       
        ]
    },
    {
        enunciado: "Cistiano de bicicleta ......",
        alternativas: [
            {
                texto: "Minha nossaaaaaa!!!!!!!",
                afirmacao: "afirmacao"
            }
            {
                texto: "Meu Deussssss!!!!!!!!!"
                afirmacao: "afirmacao"
            }
             
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
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();