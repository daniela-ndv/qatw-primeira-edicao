const bcrypt = require('bcrypt');

const senhaDigitada = '147258';
const hashDoBanco = '$2b$10$HIKNTauslvemHNxMd/XVvuWE362ByRjJT20RQKtEeN9/eicFc9EUm'; 

bcrypt.compare(senhaDigitada, hashDoBanco, (err, result) => {
  console.log(result ? 'Senha correta' : 'Senha incorreta');
});

/*
const bcrypt = require('bcrypt');

const senha = '147258';
const saltRounds = 10;

bcrypt.hash(senha, saltRounds, (err, hash) => {
  console.log('Novo hash gerado:', hash);
});*/
