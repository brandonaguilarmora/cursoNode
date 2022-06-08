const argv = require('yargs')
                    .option('b',{
                        alias:"base",
                        type:'number',
                        demandOption:true,
                        describe: 'Es la base de multiplicar'    
                    })
                    .option('l',{
                        alias:"listar",
                        type:"boolean",
                        default:false,
                        describe: 'se imprime si es true                                                        '    

                    })
                    .option('h',{
                        alias:"hasta",
                        type:"number",
                        default:10,
                        describe: 'marca el valor hasta'
                    })  
                    .check((argv,options)=>{
                        if(isNaN(argv.b)){
                            throw "la base tiene que ser un numero"
                        }return true;
                    })    
                    .argv;
module.exports = argv