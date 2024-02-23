const listaMail= ['mariorossi@gmail.com','pietrobianchi@gmail.com', 'carloverdii@gmail.com', 'ludovicorossi@gmail.com']

const emailUtente= prompt ('inserisci la tua mail')
for(let i=0 ; i<listaMail.length; i++){
if (listaMail[i]!=emailUtente) {
  console.log(emailUtente)
  console.log(listaMail[i])
  document.getElementById('messaggio').innerHTML='La tua mail non è presente nella lista '
}
else{
  document.getElementById('messaggio').innerHTML='La tua mail è presente nella lista   '

}
}
