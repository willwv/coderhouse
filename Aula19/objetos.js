let transacoes = [100, 200 ,3000, 600.50];
let total = 0;

transacoes.forEach(transacao => {
    total = total + transacao;
});

console.log(total);