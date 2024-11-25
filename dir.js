const { prototype } = require('events');
const fs = require('fs');

if(!fs.existsSync('./new')){
fs.mkdir('./new',(err)=> {
    if(err) throw err;
    console.log('Directory created successfully');
})
}else{
    console.log('Directory already exists');
}

if(fs.existsSync('./new')){

    fs.rmdir('./new',(err)=> {
        if(err) throw err;
        console.log('Directory Remove successfully')    
    })
}

process.on('uncaughtException',err =>{
    console.log(`Error : ${err}`)
})