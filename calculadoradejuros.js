import dados from 'readline-sync';

console.log("Aplicação de Juros");

let valor=dados.question("Informe o Valor devido: R$");
if(valor>0){
    let dias =dados.question("Informe quantos dias se passaram desde o vencimento do boleto:\n");
    if (dias<1){
        console.log("Não haverá juros para o seu pagamento.")
    }
    let juros=(dias>=15)? 0.10 : 0.05;
    juros=(dias==0) ? 0 : juros;
    console.log("Valor original da dívida:"+valor);
    console.log("Dias de atraso:"+dias);
    console.log("Taxa de Juros:"+(juros*100)+"%");
    console.log("Valor final: R$"+(Number(valor)+(valor*juros)));
}
else{
    console.log("para que seja calulado o juros para pagamento é necessario um valor maior do zero.")
}
