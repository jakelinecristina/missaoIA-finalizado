const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o impacto mais comum do uso excessivo das redes sociais?",
        alternativas: [
            {
                texto: " Ansiedade e comparação social",
                afirmacao: "O uso excessivo das redes sociais pode causar ansiedade e comparação social"
            },
            {
                texto: "Melhoria da saúde mental",
                afirmacao: "O uso constante das redes sociais melhora a saúde mental"
            }
        ]
    },
    {
        enunciado: "O cyberbullying acontece principalmente:",
        alternativas: [
            {
                texto: "Em redes sociais",
                afirmacao: "A maioria dos casos de cyberbullying ocorre em redes sociais"
            },
            {
                texto:"Em livros didáticos",
                afirmacao: "O cyberbullying ocorre principalmente em livros e materiais escolares"
            }
        ]
    },
    {
        enunciado: "Uma vantagem das redes sociais é:",
        alternativas: [
            {
                texto:"Comunicação instantânea com o mundo todo",
                afirmacao: "Uma grande vantagem das redes sociais é a comunicação instantânea global"
            },
            {
                texto:"Redução do acesso à informação",
                afirmacao: "As redes sociais reduzem o acesso das pessoas à informação"
            }
        ]
    },
    {
        enunciado: "O tempo de uso das redes sociais deve ser:",
        alternativas: [
            {
                texto:"Limitado e equilibrado",
                afirmacao: "O tempo nas redes sociais deve ser controlado e equilibrado para a saúde mental"
            },
            {
                texto:" Sem controle, pois é uma diversão",
                afirmacao: "O uso das redes sociais não precisa de controle, pois é apenas diversão"
            }
        ]
    },
    {
        enunciado: "Influencers podem impactar:",
        alternativas: [
            {
                texto:"Opiniões e decisões de consumo",
                afirmacao: "Influenciadores digitais podem afetar a opinião e o consumo das pessoas"
            },
            {
                texto:" Apenas seus próprios amigos",
                afirmacao: "Influenciadores só impactam seus amigos próximos e conhecidos"
            }
        ]
    },   
]; 

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();