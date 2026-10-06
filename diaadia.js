// ==========================================
// BOMPRACACHORRO - MEU DIA A DIA
// ==========================================


// ==========================================
// CARREGAR TAREFAS SALVAS
// ==========================================

let tarefas = JSON.parse(localStorage.getItem("tarefasDia")) || [];


// ==========================================
// ADICIONAR TAREFA
// ==========================================

function adicionar() {

    const inputTarefa = document.getElementById("tarefaInput");
    const inputHorario = document.getElementById("horarioInput");

    const texto = inputTarefa.value.trim();
    const horario = inputHorario.value;


    // Verificar se a tarefa foi preenchida
    if (texto === "") {

        alert("Digite uma tarefa!");

        inputTarefa.focus();

        return;
    }


    // Criar tarefa
    const novaTarefa = {

        id: Date.now(),

        texto: texto,

        horario: horario,

        concluida: false

    };


    // Adicionar tarefa à lista
    tarefas.push(novaTarefa);


    // Salvar
    salvarTarefas();


    // Limpar campos
    inputTarefa.value = "";
    inputHorario.value = "";


    // Mostrar tarefas
    mostrarTarefas();

}


// ==========================================
// MOSTRAR TAREFAS
// ==========================================

function mostrarTarefas() {

    const lista = document.getElementById("listaTarefa");


    if (!lista) {

        console.error("Lista de tarefas não encontrada.");

        return;

    }


    // Limpar lista
    lista.innerHTML = "";


    // Nenhuma tarefa
    if (tarefas.length === 0) {

        lista.innerHTML = `
            <p style="
                text-align: center;
                color: #777;
                padding: 20px;
            ">
                🐾 Nenhuma tarefa cadastrada ainda.
            </p>
        `;

        return;

    }


    // Ordenar pelo horário
    const tarefasOrdenadas = [...tarefas].sort(function(a, b) {

        return (a.horario || "").localeCompare(
            b.horario || ""
        );

    });


    // Criar cada tarefa
    tarefasOrdenadas.forEach(function(tarefa) {

        const li = document.createElement("li");

        li.className = "tarefa";


        // Classe quando concluída
        if (tarefa.concluida) {

            li.classList.add("tarefa-concluida");

        }


        li.innerHTML = `

            <div class="tarefa-info">

                <strong>
                    ${tarefa.horario || "Sem horário"}
                </strong>

                <span>
                    ${tarefa.texto}
                </span>

            </div>


            <div class="botoes-tarefa">

                <button
                    class="botao-concluir"
                    onclick="concluirTarefa(${tarefa.id})"
                    title="Concluir tarefa"
                >
                    ✓
                </button>


                <button
                    class="botao-excluir"
                    onclick="excluirTarefa(${tarefa.id})"
                    title="Excluir tarefa"
                >
                    🗑️
                </button>

            </div>

        `;


        lista.appendChild(li);

    });

}


// ==========================================
// CONCLUIR TAREFA
// ==========================================

function concluirTarefa(id) {

    tarefas = tarefas.map(function(tarefa) {

        if (tarefa.id === id) {

            tarefa.concluida = !tarefa.concluida;

        }

        return tarefa;

    });


    // Salvar alteração
    salvarTarefas();


    // Atualizar tela
    mostrarTarefas();

}


// ==========================================
// EXCLUIR TAREFA
// ==========================================

function excluirTarefa(id) {

    const confirmar = confirm(
        "Deseja realmente excluir esta tarefa?"
    );


    if (!confirmar) {

        return;

    }


    tarefas = tarefas.filter(function(tarefa) {

        return tarefa.id !== id;

    });


    // Salvar alteração
    salvarTarefas();


    // Atualizar tela
    mostrarTarefas();

}


// ==========================================
// SALVAR TAREFAS
// ==========================================

function salvarTarefas() {

    localStorage.setItem(
        "tarefasDia",
        JSON.stringify(tarefas)
    );

}


// ==========================================
// MENU DE OPÇÕES
// ==========================================

function abrirMenu() {

    const menu = document.getElementById("opcoesMenu");


    if (!menu) {

        return;

    }


    menu.classList.toggle("aberto");

}


// ==========================================
// FECHAR MENU AO CLICAR FORA
// ==========================================

document.addEventListener("click", function(evento) {

    const menu = document.getElementById("opcoesMenu");

    const botao = document.querySelector(".botao-pontos");


    if (!menu || !botao) {

        return;

    }


    if (
        !menu.contains(evento.target) &&
        !botao.contains(evento.target)
    ) {

        menu.classList.remove("aberto");

    }

});


// ==========================================
// CARREGAR TUDO AO ABRIR A PÁGINA
// ==========================================

document.addEventListener("DOMContentLoaded", function() {

    mostrarTarefas();

});