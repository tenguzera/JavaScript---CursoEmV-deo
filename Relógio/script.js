function load(){
    let msg = document.getElementById("msg");
    let img = document.getElementById("photo");
    let date = new Date();
    let hours = date.getHours();
    
    msg.innerHTML = `今は${hours}時です。`
    if(hours >= 0 && hours <= 12) {
        msg.innerHTML += "おはようがざいます！"
        img.src = 'dia.jpg'
        document.body.style.backgroundColor = "#fac845"
    } else if(hours <= 18) {
        msg.innerHTML += "こんにちわ！"
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = "#43362c"
    } else {
        msg.innerHTML += "こんばんわ！"
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = "#0c1828"
    }
}