// Nome

console.log(process.argv);

const args = process.argv.slice(2);

console.log(args);

const nome = args[0];

console.log(nome);

const idade = args[1];

console.log(idade);

console.log(`O nome é ${nome} e a idade é ${idade}`); // O nome é undefined e a idade é undefined
