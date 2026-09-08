const fs = require('fs');

fs.writeFileSync('SecAstudent.txt','Hello there ! This is experiment no. 2 of FSD-1 workshop','utf-8');

console.log('File is written / created successfully');

console.log(fs.readFileSync('SecAstudent.txt','utf-8'));