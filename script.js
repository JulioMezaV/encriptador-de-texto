const textArea = document.querySelector(".texto-encriptado");
const mensaje = document.querySelector(".texto-Desencriptado");
const copiar = document.querySelector(".botonCopiar");

function Btnencriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }
        
    } 
    return stringEncriptado;
}

function BtnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];   
 stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }
        
    } 
    return stringDesencriptado;
}

function btnCopiar() {
    if(mensaje.value != ""){
        mensaje.select();
        navigator.clipboard.writeText(mensaje.value);
        alert("Mensaje copiado")
        mensaje.value = "";
        mensaje.style.backgroundImage = "url(./imagenes/Muñeco.png)";
    }
    


}
