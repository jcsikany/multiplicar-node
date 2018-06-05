//Requireds
const fs = require('fs');


let listarTabla = (base, limite = 10) => {

    console.log('================');
    console.log(`Tabla de ${base}`);
    console.log('================');

        for(let i = 1; i <= limite; i++){
           console.log(`${base} * ${i} = ${base * i}\n`);
        }    
}



let crearArchivo = ( base, limite = 10 )=> {

    return new Promise( (resolve, reject) => {

        if (!Number(base) ){
            reject(`El valor introducido "${base}" no es un numero.`);
            return
        }


        let data = '';
        
        
        for( let i = 1; i <= limite; i++ ){
        
         data += `${base} * ${i} = ${base * i}\n`;
        }
        
        
        //fs hace referencia al paquete requerido, le pasamos el nombre de archivo, lo q queremos q diga y un callback.
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
        
            if (err)
                reject(err);                
            else 
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        
        });


    });

}

module.exports = {
    crearArchivo, listarTabla
}