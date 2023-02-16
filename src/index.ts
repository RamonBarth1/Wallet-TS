import {Transaction,Wallet} from "./Types"

const myWallet: Wallet = {
 enable:true,
 transactions:[]}

 function addTransaction(parametro:Transaction, wallet:Wallet){
    wallet.transactions.push(parametro)
 }

function printTransactions(wallet:Wallet){
    wallet.transactions.forEach((item ) =>{
         console.log(`Transação: ${item.description} \n Tipo: ${item.type} \n Valor: R$ ${item.value} \n` );
        
    }) 
}

function getBalance(wallet:Wallet):number{
    const {transactions} = wallet;
    let saldo = 0;
   
    transactions.forEach((item =>{
        if(item.type === "C"){
            saldo += item.value
        }else {
            saldo -= item.value
        }
    
    }))
    
    return saldo 
}

addTransaction(
    {
    value:5000,
    description:"Salario",
    type:"C"}
    , myWallet)

    addTransaction(
        {
        value:400,
        description:"Mercado",
        type:"D"}
        , myWallet)

        addTransaction(
            {
            value:3400,
            description:"Computador",
            type:"D"}
            , myWallet)

    
const saldo = getBalance(myWallet)
console.log(`O saldo da sua carteira e de R$ ${saldo}`);

            