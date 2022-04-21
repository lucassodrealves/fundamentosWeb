function clique(){
    alert("Você é bem-vindo nesse site!")
}

let nome=window.document.getElementById('nome')
let email=document.querySelector('input#email')  
let assunto=document.querySelector('#assunto')
let mapa=document.querySelector('#mapa')
let nomeOk=false
let emailOk=false 
let assuntoOk=false
/*
Case sensitive

por Tag: getElementByTagName()
por Id: getElementById()
po Nome: getElementsByName()
por Classe:getElementsByClassName()
por Seletor: querySelector() 
*/ 
function enviarI(){
    /*value:ver valor */
    if(nome.value=="" || email.value=="" || assunto.value==""){
        alert("Todos os campos devem ser preenchidos!")
        return false
    }
    else{
         alert("Oi "+nome.value+"!"+" Enviado com sucesso")
         /*nomeOk=true
         emailOk=true
         assuntoOk=true*/
         return true
         

    }
}

function medidaNome(){
    let nom=document.querySelector("div#Tnom")
    if(nome.value.length < 3){
       /* alert(" nome minúsculo!")*/
       nom.innerHTML="Nome minúsculo!"
       nom.style.color="red"
    }
    else{
        nom.innerHTML="Nome mais aceitável"
        nom.style.color="green"
        nomeOk=true
    }
} 

function medidaEmail(){
    let Temail=document.querySelector("div#Tmail")
    if(email.value.indexOf("@")==-1){
        Temail.innerHTML="Email inválido!"
        Temail.style.color="red"
    }
    else{
        Temail.innerHTML="Email válido!"
        Temail.style.color="green"
        emailOk=true
    }
}

function medidaAssunto(){
    let ass= document.querySelector("#Tassunto")

    if(assunto.value.length<=99){
       /* ass.innerHTML="Assunto de tamanho plausível"
        ass.style.color="green"*/
        ass.style.display="none"
        assuntoOk=true
    }
    else{
        ass.innerHTML="Assunto de tamanho desregular"
        ass.style.color="red"
        ass.style.display="block"
        assuntoOk=false
    
    }
}

    function enviar(){
        if(nomeOk==true && emailOk==true && assuntoOk==true){
            alert("Formulário enviado com sucesso!Parabéns")

        }
        else{
            alert("Preencha corretamente todos os campos do formulário cabeça")
        }

    }

function mapaZoom(){
    mapa.style.width='599px'
    mapa.style.height='399px'


}

function mapaNormal(){
    mapa.style.width='200px'
    mapa.style.height='190px'

}







nome.style.width='100%'
email.style.width="100%"

//válidos para a sobre.html
//Variáveis
let temporal=document.querySelector('#tempo')
let espac=document.getElementById('espaco')

//manipulando o Tempo

function insereHTML(){
    temporal.innerHTML="Conteúdo inserido"
    temporal.style.color="red"
}
function timeMsg(){
    setTimeout("insereHTML()",1111)
}

//pegando a URL
function spaceMsg(){
    let url = location.href
    espac.innerHTML=url
    espac.style.color="red"
}

//Imagem que responde
function response(){
    alert("mensagem gerada pela imagem")
}


