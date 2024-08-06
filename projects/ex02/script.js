let paragrafo = document.getElementById("fds");
let valor1_gay_Ui = 10;
let valor2 = 15;

function soma (valor1, valor2){
    let result = valor1 + valor2;
    return result;
}

paragrafo.innerText+=soma(valor1, valor2);
