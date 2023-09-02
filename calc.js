var numero = document.getElementById('display');

function insert(num){
    numero.value += num
}

function limpar(){
    numero.value = ""
    
}

function back (){
    var resultado = document.getElementById('display').value;
    document.getElementById('display').value = resultado.substring(0, resultado.length - 1) 
    
}

function resultado(){
    var resultado = document.getElementById('display').value;
    if(resultado != ""){
            document.getElementById('display').value = eval(resultado)
            
        }

    }

    function mod(){
        var fundo = document.getElementById('cl');
        var boxs = document.querySelectorAll('box');
        var main = document.getElementById('principal');
        var checkbox = document.getElementById('check');
        if(checkbox = true){
            fundo.style.backgroundColor = 'rgb(0, 0, 0);  ';  
        }
    }


    // tema escuro

const tema = document.getElementById("tema");
const body = document.body;


tema.addEventListener("change", function(){

    if (this.checked) {
        enableDarkTheme();
      } else {
        disableDarkTheme();
      }

})

function enableDarkTheme() {
    body.classList.add("dark-theme");
  }
  
  function disableDarkTheme() {
    body.classList.remove("dark-theme");
  }