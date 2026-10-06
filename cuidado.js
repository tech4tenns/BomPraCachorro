let cachorro =
    JSON.parse(localStorage.getItem("cachorro")) || null;

let historico =
    JSON.parse(localStorage.getItem("historico")) || [];


// ===============================
// ELEMENTOS
// ===============================

const formCachorro =
    document.getElementById("formCachorro");

const formEvento =
    document.getElementById("formEvento");


// ===============================
// CADASTRAR CACHORRO
// ===============================

formCachorro.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const raca =
        document.getElementById("raca").value;

    const nascimento =
        document.getElementById("nascimento").value;

    const arquivo =
        document.getElementById("foto").files[0];


    // Se escolheu uma foto
    if (arquivo) {

        const leitor = new FileReader();

        leitor.onload = function(e) {

            cachorro = {
                nome: nome,
                raca: raca,
                nascimento: nascimento,
                foto: e.target.result
            };

            salvarCachorro();
        };

        leitor.readAsDataURL(arquivo);

    } else {

        cachorro = {
            nome: nome,
            raca: raca,
            nascimento: nascimento,
            foto: ""
        };

        salvarCachorro();
    }
});


// ===============================
// SALVAR CACHORRO
// ===============================

function salvarCachorro() {

    localStorage.setItem(
        "cachorro",
        JSON.stringify(cachorro)
    );

    mostrarCachorro();
}


// ===============================
// MOSTRAR CACHORRO
// ===============================

function mostrarCachorro() {

    if (!cachorro) {
        return;
    }

    document.getElementById("perfil").hidden = false;
    document.getElementById("areaHistorico").hidden = false;
    document.getElementById("historico").hidden = false;


    document.getElementById("nomeCachorro")
        .textContent = cachorro.nome;

    document.getElementById("racaCachorro")
        .textContent = cachorro.raca;

    document.getElementById("nascimentoCachorro")
        .textContent = formatarData(cachorro.nascimento);

    document.getElementById("idadeCachorro")
        .textContent = calcularIdade(cachorro.nascimento);


    const imagem =
        document.getElementById("fotoCachorro");


    if (cachorro.foto) {

        imagem.src = cachorro.foto;

    } else {

        imagem.src =
            "https://placehold.co/300x300?text=🐶";
    }


    mostrarHistorico();
}


// ===============================
// ADICIONAR EVENTO
// ===============================

formEvento.addEventListener("submit", function(event) {

    event.preventDefault();


    const data =
        document.getElementById("dataEvento").value;

    const tipo =
        document.getElementById("tipoEvento").value;

    const descricao =
        document.getElementById("descricaoEvento").value;


    const evento = {

        id: Date.now(),

        data: data,

        tipo: tipo,

        descricao: descricao
    };


    historico.push(evento);


    localStorage.setItem(
        "historico",
        JSON.stringify(historico)
    );


    formEvento.reset();

    mostrarHistorico();
});


// ===============================
// MOSTRAR HISTÓRICO
// ===============================

function mostrarHistorico() {

    const lista =
        document.getElementById("listaHistorico");

    lista.innerHTML = "";


    if (historico.length === 0) {

        lista.innerHTML = `
            <div class="vazio">
                🐾 Ainda não existem acontecimentos.
            </div>
        `;

        return;
    }


    // Ordenar do mais recente para o mais antigo

    const eventos =
        [...historico].sort(
            (a, b) =>
                new Date(b.data) - new Date(a.data)
        );


    eventos.forEach(function(evento) {

        const div =
            document.createElement("div");

        div.className = "evento";


        div.innerHTML = `
            <div class="data">
                📅 ${formatarData(evento.data)}
            </div>

            <h3>${evento.tipo}</h3>

            <p>${evento.descricao}</p>

            <button
                class="excluir"
                onclick="excluirEvento(${evento.id})">
                🗑️ Excluir
            </button>
        `;


        lista.appendChild(div);
    });
}


// ===============================
// EXCLUIR EVENTO
// ===============================

function excluirEvento(id) {

    historico =
        historico.filter(
            evento => evento.id !== id
        );


    localStorage.setItem(
        "historico",
        JSON.stringify(historico)
    );


    mostrarHistorico();
}


// ===============================
// FORMATAR DATA
// ===============================

function formatarData(data) {

    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}


// ===============================
// CALCULAR IDADE
// ===============================

function calcularIdade(dataNascimento) {

    const nascimento =
        new Date(dataNascimento + "T00:00:00");

    const hoje = new Date();


    let idade =
        hoje.getFullYear() -
        nascimento.getFullYear();


    const mes =
        hoje.getMonth() -
        nascimento.getMonth();


    if (
        mes < 0 ||
        (
            mes === 0 &&
            hoje.getDate() < nascimento.getDate()
        )
    ) {
        idade--;
    }


    return idade + " anos";
}

function abrirMenu() {

    const menu = document.getElementById("opcoesMenu");

    menu.classList.toggle("aberto");

}

