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

previewFoto.addEventListener("click", function(){
    inputFoto.click();
})

inputFoto.addEventListener("change", function() {
    const arquivo = inputFoto.files[0];

    if (arquivo){
        const reader = new FileReader();

        reader.onload = function(e){
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = "cover";
            previewFoto.innerHTML = "";
            previewFoto.appendChild(img);
            previewFoto.classList.add("tem-foto");
        }
        reader.readAsDataURL(arquivo);
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
