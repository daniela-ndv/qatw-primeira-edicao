const bcrypt = require('bcrypt');

const senhaDigitada = '147258';
const hashDoBanco = '$2a$10$lFCBOrE/qpQm04UzBhkb1.J7TrSKSnSGBu/0Fbs9I4maHdv2Nn0wa'; 

bcrypt.compare(senhaDigitada, hashDoBanco, (err, result) => {
  console.log(result ? 'Senha correta' : 'Senha incorreta');
});
/*
const saltRounds = 10;

bcrypt.hash(senhaDigitada, saltRounds, (err, hash) => {
  console.log('Novo hash gerado:', hash);
});*/
