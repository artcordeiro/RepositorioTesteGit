var agora = new Date()
var horas = agora.getHours()

var div1 = window.document.getElementById('txt1')
var div2 = window.document.getElementById('img1')

horas = 19

if(horas > 12){
    div1.innerHTML = (`Agora são ${horas} horas.`)//boa tarde
    div2.innerHTML = ('<img src="C:\Cursos\JavaScript\CursoGuanabara\ex014\fototarde.png">')
    
}else if(horas > 18){
    div1.innerHTML = (`Agora são ${horas} horas.`) //boa noite
    div2.innerHTML = ('<img src="https://www.imagensbomdia.com/wp-content/uploads/2019/07/boa-noite_080-1-684x1024.jpg">')
}else if(horas < 12){
    div1.innerHTML = (`Agora são ${horas} horas.`)//bom dia
    div2.innerHTML = ('<img src="https://i.pinimg.com/originals/32/fd/39/32fd3974fb593394c26c4fe2adb89bf0.png">')
}



//bom dia 
// https://i.pinimg.com/originals/32/fd/39/32fd3974fb593394c26c4fe2adb89bf0.png

//boa tarde
//https://i.pinimg.com/originals/fd/60/55/fd6055aec921044911e9b1a098ed10d9.jpg

//boa noite
//https://www.imagensbomdia.com/wp-content/uploads/2019/07/boa-noite_080-1-684x1024.jpg










// https://i.pinimg.com/originals/6f/bf/db/6fbfdba0ca56b7694974d327da37e69f.jpg - bom dia
// https://th.bing.com/th/id/OIP.UVP-8ONlfVsq15c1le5sHQHaLV?pid=ImgDet&rs=1 - boa tarde
// https://th.bing.com/th/id/OIP.htkH67C2tJvf55ti2DD3ogHaLF?pid=ImgDet&rs=1 - boa noite