const deposito = 5;
const objetivo = 100;
const rendimentoAnual = 0.2;
let conta = 0;
let meses = 0;
while (conta < objetivo){
  conta += deposito;
  conta += conta * rendimentoAnual/12;
  meses += 1;
  
}
console.log ("Demorou", meses, "meses");