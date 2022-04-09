var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
        document.querySelector(".container").classList.toggle("show-menu");

}
document.querySelector("input#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
       
        const prazo = document.querySelector("#prazo").value

        if (prazo == 1){
                document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} Semana`
          } else {
                document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} Semanas`
          }

        atualizarPreco()
})



 function atualizarPreco() {
const qtde = document.querySelector("input#qtde").value
const temJS = document.querySelector("#js").checked
const Laysim = document.querySelector("#layout-sim").checked
const prazo = document.querySelector("#prazo").value

let preco = qtde * 100;
if (temJS) {
     preco = preco * 1.1
} 
 if (Laysim) {
        preco = preco + 500
}

let taxaUrgencia = 1 - prazo*0.1;
preco *= 1 + taxaUrgencia 
document.querySelector("label#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
