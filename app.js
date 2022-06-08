
console.clear()
const {multiplicars}= require("./helpers/multiplicar")
const argv = require('./config/yarks')
console.log(argv)
console.log(argv.b)
//const base=4
multiplicars(argv.b,argv.l,argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo, "creado"))
    .catch(err=>console.log(err))



