import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente ("Ricardo", 11122233300);
const cliente2 = new Cliente("Alice", 22233344400);
const cliente3 = new Cliente("Carlos", 33344455500)


const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500)

const conta2 = new ContaCorrente(1002, cliente2);
const conta3 = new ContaCorrente(1003, cliente3);

let valor = 200
conta1.transferir(valor, conta2)

// console

console.log(conta1)
console.log(conta2)
console.log(conta3)

console.log("\nNúmero de contas:", ContaCorrente.numeroDeContas)