const fs = require('fs');
 
//dados que serão exportados para o zrquivo json

const valorCoquetel = 30;

//convertendo dados para  formato json
const valorCoquetelJSON = JSON.stringify(valorCoquetel);
 
//especificar o nome do arquivo
const nomeDoArquivo = 'valorCoquetel.json';
 
fs.writeFile(nomeDoArquivo,valorCoquetelJSON,(err)=> {
if(err) { console.error('ocorreu um erro na gravação', err);
return;
}
    console.log("Arquivo json criado");
})
