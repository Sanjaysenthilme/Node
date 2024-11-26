const {format} = require('date-fns');
const {v4 :uuid} = require('uuid');
const path = require('path');
const fs = require('fs');
const fsPromise = require('fs').promises;


const logEvent =async(msg)=>{
    const dateTime = format(new Date(),'dd-MM-yyyy \t hh:mm:ss');
    const logEntry= `${dateTime} \t ${uuid()} \t ${msg} \n`
    console.log(logEntry);    

    try {
        if(!fs.existsSync('LogFiles')){
            await fsPromise.mkdir(path.join(__dirname,'LogFiles'));
        }
        await fsPromise.appendFile(path.join(__dirname,'LogFiles','sampleLog.txt'),logEntry);    
        
    } catch (error) {
        console.error(error)
    }

}

module.exports = logEvent;