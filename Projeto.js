const prompt = require("prompt-sync")({ sigint: true });

var opcao = 0;
var clientes = [];
var eventos = [];
var tipoCardapio = " ";
var valorOrcamento = 0;
const valorCoquetel = 30;
const valorJantar = 45;

//Função para solicitar cadastro do cliente
function solicitarCadastroInicial() {
    var nome = prompt("Digite seu nome: ");
    var telefone = prompt("Digite seu telefone: ");
    var email = prompt("Digite seu e-mail: ");

    var cliente = {
        Nome: nome,
        Email: email,
        Telefone: telefone
    }
    clientes.push(cliente)
    console.log("Cadastro realizado com sucesso! \n");
}

//Função para solicitar informações sobre o evento
function solicitarInformacaoEvento() {
    var data = prompt("Informe a data do evento: ");
    var horario = prompt("Informe o horário: ");
    var local = prompt("Informe o local: ");
    var numeroPessoas = prompt("Informe a quantidade de pessoas convidadas: ");

    // Chamada para selecionar o tipo de cardápio
    selecionarTipoCardapio(); 
    
    // Cálculo do orçamento baseado no número de pessoas e tipo de cardápio
    if (tipoCardapio == 1) {
        valorOrcamento = valorCoquetel * numeroPessoas;
    } else {
        valorOrcamento = valorJantar * numeroPessoas;
    }

    console.log("O orçamento do seu evento é: R$ " + valorOrcamento);
    var evento = {
        Data: data,
        Horario: horario,
        Local: local,
        NumeroPessoas: numeroPessoas,
        ValorOrcamento: valorOrcamento
    }
    eventos.push(evento);

    // E-mail de confirmação do agendamento do evento
    console.log("Parabéns " + clientes[clientes.length - 1].Nome + ", seu evento para " + numeroPessoas + " pessoas foi agendado para o dia " + eventos[eventos.length - 1].Data + " às " + eventos[eventos.length - 1].Horario + " na casa de eventos " + eventos[eventos.length - 1].Local);
    console.log("");
}

//Função para que o cliente escolha entre os 2 tipos de cardápio
function selecionarTipoCardapio() {
    console.log("Temos 2 opções de tipo de cardápio: ");
    console.log(" - Opção 1: Coquetel - R$ " + valorCoquetel);
    console.log(" - Opção 2: Jantar - R$ " + valorJantar);
    tipoCardapio = prompt("Selecione o tipo do cardápio do seu evento (digite 1 ou 2): ");
    console.log("");
}


while (opcao < 3) {
    console.log("Olá, o que você gostaria de fazer?");
    console.log("Opção 1: Realizar cadastro");
    console.log("Opção 2: Realizar reserva");
    console.log("Opção 3: Sair");

    opcao = prompt("Digite aqui a opção desejada (1, 2, ou 3): ");

    if (opcao == 1) {
        solicitarCadastroInicial();

    } else if (opcao == 2) {
        solicitarInformacaoEvento();
    
    }
}
