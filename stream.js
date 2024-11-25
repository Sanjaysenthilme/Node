const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname,'File','bigFile.txt'),'utf-8');

const wf = fs.createWriteStream(path.join(__dirname,'File','newBigfile.txt'));

// rs.on('data',(writeData) => wf.write(writeData));
rs.pipe(wf);
