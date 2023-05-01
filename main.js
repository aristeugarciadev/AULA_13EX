
function calc_nascimento(){
var txnasc = window.document.getElementById('nascimento')
var nasc = Number(txnasc.value)
var data = new Date;
var hoje = data.getFullYear()
var resul = hoje - nasc
var resultado = window.document.getElementById('resultado')
var fsex = window.document.getElementsByName('radiosex')
var genero = ''
var img = window.document.createElement('img')
img.setAttribute('id' , 'foto')

if (nasc > hoje)  {
    alert("[ERROR] DATA INVÁLIDA")
    
} else if (nasc < 1900) {
    alert("[ERROR] DATA INVÁLIDA")
     
}else{
    if (fsex[0].checked) {
        var genero = 'homem'
        if (resul >= 0 && resul < 6) {
            img.setAttribute('src', 'homem-2-anos.jpg')
        }else if (resul >= 6 && resul < 14 ){
            img.setAttribute('src', 'homem-14-anos.jpg')
        }else if(resul >= 14 && resul < 24 ){
            img.setAttribute('src', 'homem-24-anos.jpg')
        }else if (resul >= 24 && resul < 40){
            img.setAttribute('src', 'homem-40-anos.jpg')
        }else{
            img.setAttribute('src', 'homem-60-anos.jpg')
        }
                
    } else if(fsex[1].checked){
        var genero = 'mulher'
        if (resul >= 0 && resul < 6) {
            img.setAttribute('src', 'mulher-2anos.jpg')
        }else if (resul >= 6 && resul < 14 ){
            img.setAttribute('src', 'mulher-14anos.jpg')
        }else if(resul >= 14 && resul < 24 ){
            img.setAttribute('src', 'mulher-25anos.jpg')
        }else if (resul >= 24 && resul < 40){
            img.setAttribute('src', 'mulher-40anos.jpg')
        }else{
            img.setAttribute('src', 'mulher-60anos.jpg')
        }
    
    }else{
        alert("[ERROR] GENERO INVÁLIDO")
    }
    resultado.innerHTML = `Detectamos ${genero} com <strong> ${resul}</strong> anos`
}   resultado.appendChild(img)

}

