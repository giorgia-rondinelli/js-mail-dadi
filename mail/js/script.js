const listaMail= ['mariorossi@gmail.com','pietrobianchi@gmail.com', 'carloverdi@gmail.com', 'ludovicorossi@gmail.com']
const emailUtente= prompt ('inserisci la tua mail')

for(let i=0 ; i<listaMail.length ; i++){
const mail = listaMail[i];
 console.log(mail)
 let falso= 'la tua mail non è presente nella lista '
 let vero='la tua mail è presente sulla lista'
if (emailUtente === mail) {
 console.log(vero)
 const presente= 'presente'
 document.getElementById('messaggio').innerHTML='la tua mail è presente nella lista '
  
}

else{
  console.log(falso)
  const assente='assente'
  document.getElementById('messaggio').innerHTML='la tua mail non è presente nella lista'

}
}





