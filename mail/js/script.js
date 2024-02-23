const listaMail= ['mariorossi@gmail.com','pietrobianchi@gmail.com', 'carloverdi@gmail.com', 'ludovicorossi@gmail.com']
const emailUtente= prompt ('inserisci la tua mail')

for(let i=0 ; i<listaMail.length ; i++){
const mail = listaMail[i];
 console.log(mail)

if (emailUtente === mail) {
  console.log(emailUtente)
  console.log(listaMail[i])
 
  document.getElementById('messaggio').innerHTML='La tua mail è presente nella lista '
}
else{
  document.getElementById('messaggio').innerHTML='La tua mail non è presente nella lista   '

}
}
