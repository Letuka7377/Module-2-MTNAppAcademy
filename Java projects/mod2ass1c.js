const fs = require('fs');



fs.readFile('module2Ass1.txt', 'utf-8', (err, data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

const content ="MTN is amaizing";

fs.writeFile('modele2Ass1c.txt', content, err =>{
    if(err){
        console.err;
        return;
    }
});