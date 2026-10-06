const perguntas = [

    // =========================
    // ALIMENTAÇÃO
    // =========================

    {
        categoria: "Alimentação",
        pergunta: "Seu cachorro está comendo normalmente?",
        opcoes: [
            { texto: "Sim, normalmente", pontos: 0 },
            { texto: "Está comendo um pouco menos", pontos: 1 },
            { texto: "Está comendo muito menos", pontos: 2 },
            { texto: "Não está querendo comer", pontos: 3 }
        ]
    },

    {
        categoria: "Alimentação",
        pergunta: "Ele demonstra interesse pela comida quando chega a hora de comer?",
        opcoes: [
            { texto: "Sim, normalmente", pontos: 0 },
            { texto: "Um pouco menos interessado", pontos: 1 },
            { texto: "Quase não demonstra interesse", pontos: 2 },
            { texto: "Não demonstra interesse", pontos: 3 }
        ]
    },

    {
        categoria: "Alimentação",
        pergunta: "Você percebeu alguma mudança repentina na quantidade de comida que ele come?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Uma pequena mudança", pontos: 1 },
            { texto: "Uma mudança considerável", pontos: 2 },
            { texto: "Uma mudança muito grande", pontos: 3 }
        ]
    },

    {
        categoria: "Alimentação",
        pergunta: "Ele está aceitando normalmente os alimentos que costumava gostar?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Às vezes recusa", pontos: 1 },
            { texto: "Recusa com frequência", pontos: 2 },
            { texto: "Está recusando quase tudo", pontos: 3 }
        ]
    },

    // =========================
    // ÁGUA
    // =========================

    {
        categoria: "Hidratação",
        pergunta: "Seu cachorro está bebendo água normalmente?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Um pouco mais", pontos: 1 },
            { texto: "Muito mais", pontos: 2 },
            { texto: "Muito menos", pontos: 3 }
        ]
    },

    {
        categoria: "Hidratação",
        pergunta: "Você percebeu alguma mudança recente no consumo de água?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Pequena mudança", pontos: 1 },
            { texto: "Mudança considerável", pontos: 2 },
            { texto: "Mudança muito grande", pontos: 3 }
        ]
    },

    // =========================
    // ENERGIA
    // =========================

    {
        categoria: "Energia e comportamento",
        pergunta: "Ele está com a mesma energia de sempre?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Um pouco menos ativo", pontos: 1 },
            { texto: "Bem menos ativo", pontos: 2 },
            { texto: "Está muito quieto", pontos: 3 }
        ]
    },

    {
        categoria: "Energia e comportamento",
        pergunta: "Ele ainda demonstra vontade de brincar?",
        opcoes: [
            { texto: "Sim, normalmente", pontos: 0 },
            { texto: "Um pouco menos", pontos: 1 },
            { texto: "Quase não quer brincar", pontos: 2 },
            { texto: "Não demonstra interesse", pontos: 3 }
        ]
    },

    {
        categoria: "Energia e comportamento",
        pergunta: "Ele está dormindo aproximadamente como costumava?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Dormindo um pouco mais", pontos: 1 },
            { texto: "Dormindo muito mais", pontos: 2 },
            { texto: "Mudança muito grande", pontos: 3 }
        ]
    },

    {
        categoria: "Energia e comportamento",
        pergunta: "Você percebeu alguma mudança no jeito dele agir?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Uma pequena mudança", pontos: 1 },
            { texto: "Uma mudança perceptível", pontos: 2 },
            { texto: "Uma mudança muito grande", pontos: 3 }
        ]
    },

    {
        categoria: "Energia e comportamento",
        pergunta: "Ele continua reagindo normalmente às pessoas da casa?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Está um pouco diferente", pontos: 1 },
            { texto: "Está evitando algumas pessoas", pontos: 2 },
            { texto: "Mudou bastante o comportamento", pontos: 3 }
        ]
    },

    // =========================
    // HIGIENE
    // =========================

    {
        categoria: "Higiene",
        pergunta: "O banho do seu cachorro está sendo feito com a frequência habitual?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Está um pouco atrasado", pontos: 1 },
            { texto: "Está bastante atrasado", pontos: 2 },
            { texto: "Não sei informar", pontos: 1 }
        ]
    },

    {
        categoria: "Higiene",
        pergunta: "A tosa está sendo feita normalmente, quando necessária para ele?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Está um pouco atrasada", pontos: 1 },
            { texto: "Está bastante atrasada", pontos: 2 },
            { texto: "Não se aplica ao meu cachorro", pontos: 0 }
        ]
    },

    {
        categoria: "Higiene",
        pergunta: "Você percebeu alguma mudança no cheiro do cachorro?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Uma pequena mudança", pontos: 1 },
            { texto: "Uma mudança perceptível", pontos: 2 },
            { texto: "Uma mudança forte e diferente", pontos: 3 }
        ]
    },

    {
        categoria: "Higiene",
        pergunta: "A pelagem parece estar como de costume?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Pequena mudança", pontos: 1 },
            { texto: "Mudança perceptível", pontos: 2 },
            { texto: "Mudança muito grande", pontos: 3 }
        ]
    },

    // =========================
    // PELE E PELOS
    // =========================

    {
        categoria: "Pele e pelos",
        pergunta: "Você percebeu queda de pelos diferente do normal?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Um pouco mais", pontos: 1 },
            { texto: "Bem mais que o normal", pontos: 2 },
            { texto: "Uma mudança muito grande", pontos: 3 }
        ]
    },

    {
        categoria: "Pele e pelos",
        pergunta: "Você percebeu alguma alteração na pele?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Uma pequena alteração", pontos: 1 },
            { texto: "Uma alteração perceptível", pontos: 2 },
            { texto: "Uma alteração importante", pontos: 3 }
        ]
    },

    {
        categoria: "Pele e pelos",
        pergunta: "Ele está se coçando mais do que costumava?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Um pouco mais", pontos: 1 },
            { texto: "Bastante mais", pontos: 2 },
            { texto: "Muito mais", pontos: 3 }
        ]
    },

    // =========================
    // NECESSIDADES
    // =========================

    {
        categoria: "Hábitos",
        pergunta: "As fezes estão com aparência semelhante ao habitual?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Pequena mudança", pontos: 1 },
            { texto: "Mudança perceptível", pontos: 2 },
            { texto: "Mudança muito grande", pontos: 3 }
        ]
    },

    {
        categoria: "Hábitos",
        pergunta: "A frequência com que ele faz cocô mudou?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Mudou um pouco", pontos: 1 },
            { texto: "Mudou bastante", pontos: 2 },
            { texto: "Mudou muito", pontos: 3 }
        ]
    },

    {
        categoria: "Hábitos",
        pergunta: "A frequência com que ele faz xixi mudou?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Mudou um pouco", pontos: 1 },
            { texto: "Mudou bastante", pontos: 2 },
            { texto: "Mudou muito", pontos: 3 }
        ]
    },

    // =========================
    // ATIVIDADE
    // =========================

    {
        categoria: "Atividade",
        pergunta: "Ele continua gostando de passear?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Um pouco menos", pontos: 1 },
            { texto: "Muito menos", pontos: 2 },
            { texto: "Não quer passear", pontos: 3 }
        ]
    },

    {
        categoria: "Atividade",
        pergunta: "Durante os passeios, ele está se comportando como normalmente?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Pequena mudança", pontos: 1 },
            { texto: "Mudança perceptível", pontos: 2 },
            { texto: "Mudança muito grande", pontos: 3 }
        ]
    },

    {
        categoria: "Atividade",
        pergunta: "Ele consegue realizar as atividades habituais dele?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Com um pouco menos de disposição", pontos: 1 },
            { texto: "Com bastante dificuldade", pontos: 2 },
            { texto: "Está evitando atividades", pontos: 3 }
        ]
    },

    // =========================
    // SOCIAL
    // =========================

    {
        categoria: "Comportamento",
        pergunta: "Ele continua procurando carinho e atenção como antes?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Um pouco menos", pontos: 1 },
            { texto: "Muito menos", pontos: 2 },
            { texto: "Mudou completamente", pontos: 3 }
        ]
    },

    {
        categoria: "Comportamento",
        pergunta: "Ele está mais irritado ou incomodado que o habitual?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Um pouco", pontos: 1 },
            { texto: "Bastante", pontos: 2 },
            { texto: "Muito", pontos: 3 }
        ]
    },

    {
        categoria: "Comportamento",
        pergunta: "Ele está se escondendo ou evitando contato mais do que antes?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Um pouco", pontos: 1 },
            { texto: "Com frequência", pontos: 2 },
            { texto: "Muito frequentemente", pontos: 3 }
        ]
    },

    // =========================
    // ROTINA
    // =========================

    {
        categoria: "Rotina",
        pergunta: "A rotina diária do seu cachorro mudou recentemente?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Mudou um pouco", pontos: 1 },
            { texto: "Mudou bastante", pontos: 2 },
            { texto: "Mudou completamente", pontos: 3 }
        ]
    },

    {
        categoria: "Rotina",
        pergunta: "Ele está se adaptando normalmente à rotina atual?",
        opcoes: [
            { texto: "Sim", pontos: 0 },
            { texto: "Com pequenas dificuldades", pontos: 1 },
            { texto: "Com bastante dificuldade", pontos: 2 },
            { texto: "Não parece estar se adaptando", pontos: 3 }
        ]
    },

    {
        categoria: "Rotina",
        pergunta: "Você percebeu alguma mudança que não estava esperando?",
        opcoes: [
            { texto: "Não", pontos: 0 },
            { texto: "Uma mudança pequena", pontos: 1 },
            { texto: "Uma mudança importante", pontos: 2 },
            { texto: "Várias mudanças importantes", pontos: 3 }
        ]
    }

];

let perguntaAtual = 0;
let respostas = [];
let pontuacaoTotal = 0;

const perguntaElemento = document.getElementById("pergunta");
const opcoesElemento = document.getElementById("opcoes");
const proximoBotao = document.getElementById("proximo");
const progress = document.getElementById("progress");
const contador = document.getElementById("contador");
const categoria = document.getElementById("categoria");

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent = pergunta.pergunta;

    categoria.textContent = pergunta.categoria;

    contador.textContent =
        `${perguntaAtual + 1} / ${perguntas.length}`;

    const porcentagem =
        ((perguntaAtual) / perguntas.length) * 100;

    progress.style.width = `${porcentagem}%`;

    opcoesElemento.innerHTML = "";

    proximoBotao.disabled = true;

    pergunta.opcoes.forEach((opcao, indice) => {

        const botao = document.createElement("button");

        botao.classList.add("opcao");

        botao.textContent = opcao.texto;

        botao.addEventListener("click", () => {

            document
                .querySelectorAll(".opcao")
                .forEach(elemento => {
                    elemento.classList.remove("selecionada");
                });

            botao.classList.add("selecionada");

            respostas[perguntaAtual] = {
                categoria: pergunta.categoria,
                pontos: opcao.pontos
            };

            proximoBotao.disabled = false;
        });

        opcoesElemento.appendChild(botao);
    });
}

proximoBotao.addEventListener("click", () => {

    if (respostas[perguntaAtual] === undefined) {
        return;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        finalizarQuiz();

    }

});

function finalizarQuiz() {

    document
        .getElementById("quiz-container")
        .classList.add("escondido");

    document
        .getElementById("resultado")
        .classList.remove("escondido");

    pontuacaoTotal = respostas.reduce(
        (total, resposta) => total + resposta.pontos,
        0
    );

    mostrarResultado();
}

function mostrarResultado() {

    const maximo = perguntas.length * 3;

    const porcentagem =
        (pontuacaoTotal / maximo) * 100;

    let nivel;
    let mensagem;

    if (porcentagem <= 15) {

        nivel = "Baixo";
        mensagem =
            "As respostas indicam poucas mudanças percebidas na rotina do seu cachorro.";

    } else if (porcentagem <= 35) {

        nivel = "Moderado";
        mensagem =
            "Algumas mudanças foram percebidas. Vale continuar observando a rotina do seu cachorro.";

    } else if (porcentagem <= 60) {

        nivel = "Atenção";
        mensagem =
            "Foram identificadas várias mudanças. É importante acompanhar esses sinais e observar se continuam.";

    } else {

        nivel = "Atenção elevada";
        mensagem =
            "Foram relatadas diversas mudanças na rotina e no comportamento. Considere conversar com um veterinário, especialmente se as mudanças forem recentes, intensas ou persistentes.";
    }

    document.getElementById("pontuacao").textContent = nivel;

    document.getElementById("mensagem-final").textContent = mensagem;

    gerarResumoCategorias();
}

function gerarResumoCategorias() {

    const categorias = {};

    respostas.forEach(resposta => {

        if (!categorias[resposta.categoria]) {
            categorias[resposta.categoria] = {
                pontos: 0,
                quantidade: 0
            };
        }

        categorias[resposta.categoria].pontos += resposta.pontos;

        categorias[resposta.categoria].quantidade++;
    });

    const resultado =
        document.getElementById("categorias-resultado");

    resultado.innerHTML = "";

    Object.keys(categorias).forEach(nome => {

        const dados = categorias[nome];

        const media =
            dados.pontos / dados.quantidade;

        let status;

        if (media < 0.8) {
            status = "Poucas mudanças percebidas";
        } else if (media < 1.7) {
            status = "Algumas mudanças percebidas";
        } else {
            status = "Muitas mudanças percebidas";
        }

        const div = document.createElement("div");

        div.classList.add("categoria-result");

        div.innerHTML = `
            <h3>${nome}</h3>
            <p>${status}</p>
        `;

        resultado.appendChild(div);

    });
}

function reiniciarQuiz() {

    perguntaAtual = 0;
    respostas = [];
    pontuacaoTotal = 0;

    document
        .getElementById("resultado")
        .classList.add("escondido");

    document
        .getElementById("quiz-container")
        .classList.remove("escondido");

    mostrarPergunta();
}

mostrarPergunta();

function abrirMenu() {

    const menu = document.getElementById("opcoesMenu");

    menu.classList.toggle("aberto");

}

