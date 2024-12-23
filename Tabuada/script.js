function tabuada() {
    let numF = document.getElementById("num").value
    let tab = document.getElementById("seltab")

    if(numF.length == 0) {
        alert("Insira um número válido.")
        return;
    }

    let num = Number(numF)
    tab.innerHTML = ""
    
    for(let x = 1; x <= 10; x++) {
        let item = document.createElement('option')
        item.text = `${num} x ${x} = ${num*x}`
        item.value = `tab${x}`
        tab.appendChild(item)
    }
}
