const fs = require('fs').promises;
const path = require('path');

const fileOps = async ()=>{
    try{
        const data = await fs.readFile(path.join(__dirname,'File','sample.txt'),'utf-8');
        console.log(data);

        await fs.writeFile(path.join(__dirname,'File','text.txt'),'New text file created');
        console.log('Write file successfully');

        await fs.appendFile(path.join(__dirname,'File','text.txt'),'\n\n new line is added');
        console.log('Append file Successfully');

        await fs.rename(path.join(__dirname,'File','text.txt'),path.join(__dirname,'File','Thanks.txt'));
        console.log('Rename file successfully');

        // await fs.unlink(path.join(__dirname,'File','sample.txt'));
        // console.log('Unlink file successfully');

    }catch(err){
        console.error(`Error: ${err}`);
    }
}
fileOps();
process.on('uncaughtException', err =>{
    console.log(`Error: ${err}`);
    process.exit(1);
})