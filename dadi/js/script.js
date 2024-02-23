const num1= (Math.ceil(Math.random ()* 5));
const num2= (Math.ceil(Math.random ()* 5));
console.log(num1,num2)

if(num1>num2){
  console.log('vince il giocatore 1 ')
}
else if(num1<num2)
{
  console.log('vince il giocatore 2 ')
}
else{
  console.log('rigiocare')
}