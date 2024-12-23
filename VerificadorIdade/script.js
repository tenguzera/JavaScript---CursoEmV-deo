function verify(){
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.getElementById("ano")
    let res = document.getElementById("res")

    if(fAno.value.length == 0 || fAno.value > ano) {
        window.alert("Ano inválido. Verfique os dados e tente novamente!")
    } else {
        let fSex = document.getElementsByName("radsex");
        let idade = ano - Number(fAno.value);

        let img = document.createElement("img");
        img.setAttribute('id', 'photo');

        let gender = "";
        if(fSex[0].checked) {
            gender = "homem"
            if(idade >= 0 && idade <= 12) img.setAttribute('src','childmale.jpg')
            else if(idade <= 24) img.setAttribute('src','youngmale.jpg')
            else if(idade <= 60) img.setAttribute('src','adultmale.jpg')
            else img.setAttribute('src','oldmale.jpg')
        } 
        else {
            gender = "mulher";
            if(idade >= 0 && idade <= 12) img.setAttribute('src','childfemale.jpg')
            else if(idade <= 24) img.setAttribute('src','youngfemale.jpg')
            else if(idade <= 60) img.setAttribute('src','adultfemale.jpg')
            else img.setAttribute('src','oldfemale.jpg')
        }

        res.style.textAlign = "center";
        res.innerHTML = `É um(a) ${gender} com ${idade} anos.`
        res.appendChild(img);
    }
}