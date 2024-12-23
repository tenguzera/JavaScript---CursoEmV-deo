let numF = document.getElementById('num');
let sel = document.getElementById('selnum')
let res = document.getElementById('res');

let numArray = [];

numF.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
}); 

function limpaFormulario() {
    numF.value = '';
    numF.focus();
}

function validaNumero(n) {
    if(n.length == 0 || n.value > 100 || n.value < 1) {
        alert("Insira um número válido!");
        limpaFormulario();
        return 0;
    }

    let num = Number(n.value);
    if(numArray.includes(num)) {
        alert('Esse número já foi adicionado!');
        limpaFormulario();
        return 0;
    } else {
        numArray.push(num);
        return 1;
    }
}

function adicionar() {
    if(validaNumero(numF) == 0) return;

    res.innerHTML = '';
    let item = document.createElement('option');
    item.text = `Valor ${numF.value} adicionado.`;
    item.value = `sel${numF.value}`;
    sel.appendChild(item);

    limpaFormulario();
}

function analisar() {
    if(numArray.length == 0) {
        res.innerHTML = '<p>Nenhum número foi adicionado.</p>';
        return;
    }
    
    numArray.sort(function(a, b){
        return a - b;
    });

    let soma = 0;
    for(let x in numArray) soma += numArray[x];

    let media = soma / numArray.length;

    res.innerHTML = `<p>Ao todo, temos ${numArray.length} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${numArray[numArray.length-1]}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${numArray[0]}.</p>`;
    res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`;
    res.innerHTML += `<p>A média de todos os valores é ${+media.toFixed(2)}.</p>`;
}