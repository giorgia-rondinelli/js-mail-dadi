const listaMail= ['mariorossi@gmail.com','pietrobianchi@gmail.com', 'carloverdi@gmail.com', 'ludovicorossi@gmail.com']
const emailUtente= prompt ('inserisci la tua mail')
let  messaggio= 'la tua mail non è sulla lista'
let mailTrovata = false


for(let i=0 ; i< listaMail.length ; i++){
const mail = listaMail[i];
 console.log(mail)


if (mail ===emailUtente ) {
 console.log('mail trovata')
 mailTrovata= true


  
}

}

if (mailTrovata){
  messaggio='la tua mail è sulla lista '
}
document.getElementById('messaggio').innerHTML= messaggio
console.log(mailtrovata)








