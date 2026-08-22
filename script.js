const inputFoto = document.getElementById("foto");
const previewFoto = document.getElementById("preview-foto");
const inputSenha  = document.getElementById("senha");
const inputConfirmarSenha = document.getElementById("confirmar-senha");
const toggleSenha = document.getElementById("toggle-senha");
const toggleConfirmarSenha = document.getElementById("toggle-confirmar-senha");
const olhoAbertoSenha = document.getElementById("olho-aberto-senha");
const olhoAbertoConfirmarSenha = document.getElementById("olho-aberto-confirmar");
const olhoFechadoSenha = document.getElementById("olho-fechado-senha");
const olhoFechadoConfirmarSenha = document.getElementById("olho-fechado-confirmar");
const inputCPF = document.getElementById("cpf");
const inputTelefone = document.getElementById("telefone");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputDataNascimento = document.getElementById("data-nascimento");
const checkTermos = document.getElementById("termos");
const form = document.getElementById("form-cadastro");
const mensagemSucesso = document.getElementById("mensagem-sucesso");


previewFoto.addEventListener("click", function(){
    inputFoto.click();
})

inputFoto.addEventListener("change", function() {
    const arquivo = inputFoto.files[0];

    if (arquivo) {
        const urlImagem = URL.createObjectURL(arquivo);

        const img = document.createElement("img");
        img.src = urlImagem;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = "cover";
        previewFoto.innerHTML = "";
        previewFoto.appendChild(img);
        previewFoto.classList.add("tem-foto");
    }
});

toggleSenha.addEventListener("click", function(){
    if(inputSenha.type === "password"){
        inputSenha.type = "text";
        olhoAbertoSenha.style.display = "none";
        olhoFechadoSenha.style.display = "flex";
    } else {
        inputSenha.type = "password";
        olhoAbertoSenha.style.display = "flex";
        olhoFechadoSenha.style.display = "none";
    }
});

toggleConfirmarSenha.addEventListener("click", function(){
    if(inputConfirmarSenha.type === "password"){
        inputConfirmarSenha.type = "text";
        olhoAbertoConfirmarSenha.style.display = "none";
        olhoFechadoConfirmarSenha.style.display = "flex";
    } else {
        inputConfirmarSenha.type = "password";
        olhoAbertoConfirmarSenha.style.display = "flex";
        olhoFechadoConfirmarSenha.style.display = "none";
    }
});

function mascaraCPF(valor) {
    valor = valor.replace(/\D/g, '');           // remove tudo que não é dígito
    valor = valor.slice(0, 11);                 // limita a 11 dígitos
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');         // coloca o 1º ponto
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');         // coloca o 2º ponto
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');   // coloca o hífen
    return valor;
}

function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, '');           // remove tudo que não é dígito
    valor = valor.slice(0, 11);                 // limita a 11 dígitos
    valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    return valor;
}

inputCPF.addEventListener("input", function(){
    inputCPF.value = mascaraCPF(inputCPF.value);
})

inputTelefone.addEventListener("input", function (){
    inputTelefone.value = mascaraTelefone(inputTelefone.value);
})


function mostrarErro(idErro, mensagem) {
    document.getElementById(idErro).textContent = mensagem;
}
function limparErro(idErro){
    document.getElementById(idErro).textContent = "";
}
function validarEmTempoReal(input, idErro, funcaoValidacao){
    input.addEventListener("input", function(){
        const erroAtual = document.getElementById(idErro).textContent;
        if (erroAtual !== ""){
            funcaoValidacao();
        }
    });
}

function validarNome(){
    const valor = inputNome.value.trim();

    if (valor === ""){
        mostrarErro("erro-nome", "Nome é obrigatório.")
        return false;
    }
    if (valor.length < 3){
        mostrarErro("erro-nome", "Nome deve ter pelo menos 3 caracteres.")
        return false;
    }
    limparErro("erro-nome");
    return true;
}

inputNome.addEventListener("blur", validarNome);
validarEmTempoReal(inputNome, "erro-nome", validarNome);

function validarEmail(){
    const valor = inputEmail.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(valor === ""){
        mostrarErro("erro-email", "E-mail é obrigatório.")
        return false
    }
    if(!regex.test(valor)){
        mostrarErro("erro-email", "Digite um e-mail válido.");
        return false;
    }
    limparErro("erro-email");
    return true;
}

inputEmail.addEventListener("blur", validarEmail);
validarEmTempoReal(inputEmail, "erro-email", validarEmail);

function validarCPF(){
    const valor = inputCPF.value.replace(/\D/g, '');

    if (valor === "") {
        mostrarErro("erro-cpf", "CPF é obrigatório.");
        return false;
    }
    if (valor.length !== 11) {
        mostrarErro("erro-cpf", "CPF deve ter 11 dígitos.");
        return false;
    }

    // Rejeita CPFs com todos os dígitos iguais (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(valor)) {
        mostrarErro("erro-cpf", "CPF inválido.");
        return false;
    }

    // Cálculo do 1º dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += Number(valor[i]) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== Number(valor[9])) {
        mostrarErro("erro-cpf", "CPF inválido.");
        return false;
    }

    // Cálculo do 2º dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += Number(valor[i]) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== Number(valor[10])) {
        mostrarErro("erro-cpf", "CPF inválido.");
        return false;
    }

    limparErro("erro-cpf");
    return true;
}

inputCPF.addEventListener("blur", validarCPF);
validarEmTempoReal(inputCPF, "erro-cpf", validarCPF);

function validarTelefone() {
    const valor = inputTelefone.value.replace(/\D/g, '');
    if (valor === "") {
        mostrarErro("erro-telefone", "Telefone é obrigatório.");
        return false;
    }
    if (valor.length < 10 || valor.length > 11) {
        mostrarErro("erro-telefone", "Telefone inválido.");
        return false;
    }
    limparErro("erro-telefone");
    return true;
}

inputTelefone.addEventListener("blur", validarTelefone);
validarEmTempoReal(inputTelefone, "erro-telefone", validarTelefone);

function validarDataNascimento() {
    const valor = inputDataNascimento.value;

    if (valor === "") {
        mostrarErro("erro-data-nascimento", "Data de nascimento é obrigatória.");
        return false;
    }

    const dataNascimento = new Date(valor);
    const hoje = new Date();

    // Calcula a data de 18 anos atrás a partir de hoje
    const dezoitoAnosAtras = new Date(
        hoje.getFullYear() - 18,
        hoje.getMonth(),
        hoje.getDate()
    );

    if (dataNascimento > dezoitoAnosAtras) {
        mostrarErro("erro-data-nascimento", "Você deve ter pelo menos 18 anos.");
        return false;
    }

    limparErro("erro-data-nascimento");
    return true;
}

inputDataNascimento.addEventListener("blur", validarDataNascimento);
validarEmTempoReal(inputDataNascimento, "erro-data-nascimento", validarDataNascimento);

function validarSenha() {
    const valor = inputSenha.value;
    const temLetra = /[a-zA-Z]/.test(valor);
    const temNumero = /[0-9]/.test(valor);

    if (valor === "") {
        mostrarErro("erro-senha", "Senha é obrigatória.");
        return false;
    }
    if (valor.length < 8) {
        mostrarErro("erro-senha", "Senha deve ter pelo menos 8 caracteres.");
        return false;
    }
    if (!temLetra || !temNumero) {
        mostrarErro("erro-senha", "Senha deve ter letras e números.");
        return false;
    }
    limparErro("erro-senha");
    return true;
}

function validarConfirmarSenha() {
    const valor = inputConfirmarSenha.value;

    if (valor === "") {
        mostrarErro("erro-confirmar-senha", "Confirmação de senha é obrigatória.");
        return false;
    }
    if (valor !== inputSenha.value) {
        mostrarErro("erro-confirmar-senha", "As senhas não coincidem.");
        return false;
    }
    limparErro("erro-confirmar-senha");
    return true;
}

inputSenha.addEventListener("blur", function (){
    validarSenha();
        // Se confirmação já foi preenchida, revalida ela também
    if (inputConfirmarSenha.value !== "") {
        validarConfirmarSenha();
    }
});

inputConfirmarSenha.addEventListener("blur", validarConfirmarSenha);
validarEmTempoReal(inputSenha, "erro-senha", validarSenha);
validarEmTempoReal(inputConfirmarSenha, "erro-confirmar-senha", validarConfirmarSenha);

function validarTermos() {
    if (!checkTermos.checked) {
        mostrarErro("erro-termos", "Você deve aceitar os termos de uso.");
        return false;
    }
    limparErro("erro-termos");
    return true;
}

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const valido =
        validarNome() &
        validarEmail() &
        validarCPF() &
        validarTelefone() &
        validarDataNascimento() &
        validarSenha() &
        validarConfirmarSenha() &
        validarTermos();

    if (valido) {
        mostrarSucesso();
    }
});


function mostrarSucesso() {
    form.style.display = "none";
    mensagemSucesso.classList.add("ativo");
}
