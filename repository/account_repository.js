const userRepository = require('./user_repository')


let account = []



function created() {
    const idNumerico = Math.floor(10000000 + Math.random() * 90000000); // Gera um número entre 10000000 e 99999999
    console.log(idNumerico);
}

created()