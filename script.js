const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

const perguntas = [
    {
        enunciado:
            "Em uma manhã, ao sair de casa, você percebe que há lixo espalhado pelas ruas, poucas áreas verdes e muita poluição. Ao observar aquela situação, você começa a pensar em como suas próprias atitudes poderiam ajudar a cuidar do planeta. Você gostaria de contribuir com o meio ambiente?",
        alternativas: [
            "Sim, estaria feliz em ajudar.",
            "Não tenho interesse."
        ]
    },

    {
        enunciado:
            "Você decide refletir um pouco mais sobre sua escolha. Afinal, muitas pessoas pensam que apenas grandes empresas ou governos podem resolver os problemas ambientais. Mas será que uma única pessoa realmente pode fazer a diferença?",
        alternativas: [
            "Não sei se sozinho consigo fazer diferença.",
            "Tenho consciência de que posso fazer diferença."
        ]
    },

    {
        enunciado:
            "Depois de pensar sobre isso, você percebe que pequenas atitudes também podem contribuir para mudanças importantes. No seu dia a dia, existem várias maneiras de ajudar: economizar água e energia, reduzir o uso de plástico, evitar desperdícios e cuidar melhor da natureza. Você decide começar por uma atitude simples. Qual delas escolheria?",
        alternativas: [
            "Reciclar materiais.",
            "Cuidar de plantas."
        ]
    },

    {
        enunciado:
            "Você pensa na sua escolha e percebe que existem diferentes formas de colocá-la em prática. Se optar pela reciclagem, poderá separar papel, plástico, vidro e metal, evitando que esses materiais sejam descartados de forma incorreta. Se preferir cuidar de plantas, poderá cultivar uma pequena planta em casa ou ajudar a cuidar de uma área verde. Qual dessas atitudes parece mais fácil para você começar hoje?",
        alternativas: [
            "Separar o lixo para reciclagem.",
            "Cuidar de uma planta."
        ]
    },

    {
        enunciado:
            "Depois de escolher sua atitude, você percebe que não precisa fazer tudo de uma vez. O mais importante é começar e manter esse hábito no dia a dia. Você também percebe que pode incentivar sua família, seus amigos e outras pessoas a fazerem pequenas mudanças. Qual será sua decisão a partir de hoje?",
        alternativas: [
            "Ótimo! Começarei hoje mesmo.",
            "Vou fazer e incentivar outras pessoas."
        ]
    }
];

let atual = 0;

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach(function (alternativa) {
        const botao = document.createElement("button");

        botao.textContent = alternativa;

        botao.addEventListener("click", function () {
            atual++;

            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                mostraResultado();
            }
        });

        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.textContent = "Uma pequena atitude pode começar uma grande mudança! 🌱";

    caixaAlternativas.innerHTML = "";

    textoResultado.textContent =
        "Ao longo dessa jornada, você percebeu que cuidar do meio ambiente não depende apenas de grandes ações. Reciclar, cuidar das plantas, economizar recursos e incentivar outras pessoas são atitudes simples que podem fazer parte da nossa rotina. Quando cada pessoa faz a sua parte, todos contribuem para um planeta mais saudável e sustentável. A mudança pode começar com você, hoje. 🌎💚";

    caixaResultado.style.display = "block";
}

function reiniciarHistoria() {
    atual = 0;

    caixaResultado.style.display = "none";

    mostraPergunta();
}

botaoReiniciar.addEventListener("click", reiniciarHistoria);

caixaResultado.style.display = "none";

mostraPergunta();
