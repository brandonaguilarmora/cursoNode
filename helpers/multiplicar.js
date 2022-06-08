const fs = require("fs")
let colors = require('colors');
const { string } = require("yargs");
const multiplicars = async(base, listar, hasta)=>{
    try{
        console.clear();
        //console.log(base)
        //console.log(listar)
        let consola=""
        let salida= "=========================\n".green+
                    `Tabla del ${colors.red(base)}\n`.blue+
                    "=========================\n".green

        for(let i=1;i<=hasta;i++){
            consola+=`${base} * ${(i)}  = ${(base*i)}\n`
            salida+=`${(String(base).rainbow)} ${"*".yellow} ${colors.yellow(i)}  = ${String(base*i).rainbow}\n`
        }
        fs.writeFileSync(`./salida/Tabla del ${base}.txt`, consola);
        if(listar){
            console.log(salida)
            return `Tabla del ${base}`
        }
        return `el archivo no a sido creado`
    }catch(err){
        throw err
    }
}

module.exports ={
    multiplicars   
}
