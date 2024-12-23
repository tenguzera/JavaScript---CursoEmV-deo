function count() {
    let iniF = document.getElementById("start").value
    let goalF = document.getElementById("end").value
    let stepF = document.getElementById("step").value
    let res = document.getElementById("res")

    if(iniF.length == 0|| goalF.length == 0 || stepF.length == 0) {
        res.innerHTML = `<br>Impossível contar!`
        alert("O valor de início, fim e passo precisam ser indicados!")
        return;
    }

    let ini = Number(iniF)
    let goal = Number(goalF)
    let step = Number(stepF)

    if(step <= 0) {
        alert("O passo não pode ser zero ou negativo! Valor ajustado para 1.")
        step = 1;
    }

    res.innerHTML = `<br>Contando:<br>`

    if(goal < ini) {
        step = step*-1
        for(let x = ini; x >= goal; x += step){
            res.innerHTML += `${x} \u{1F449}`
        }
    } else {
        for(let x = ini; x <= goal; x += step){
            res.innerHTML += `${x} \u{1F449}`
        }
    }

    res.innerHTML += `\u{1F3C1}`        
}