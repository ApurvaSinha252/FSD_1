//CRUD operations on files
const fs = require('fs');

//create (write) a file
fs.writeFileSync('SecAstudent.txt','Hello there ! This is experiment no. 2 of FSD-1 workshop','utf-8');
console.log('File is written / created successfully');
fs.writeFileSync('Apurva.txt','Hello','utf-8')

//read a file
const data = fs.readFileSync('SecAstudent.txt','utf-8');
console.log('File content is given as :',data);

//update(append) a file
fs.appendFileSync('SecAstudent.txt','\n This is a new line','utf-8');
console.log('File is updated successfully');

//delete a file
fs.unlinkSync('Apurva.txt');
console.log('File is deleted successfully');

//CRUD operation on folders

//create a folder
fs.mkdirSync('Sample Folder');
fs.mkdirSync('Sample Folder/Second Folder');
console.log('New Folder is created successfully');

//delete a folder
fs.rmdirSync('Sample Folder/Second Folder');
console.log('Folder is deleted successfully');

//checking existence of a file
if(fs.existsSync('SecAstudent.txt'))
{
    console.log('File exists');
}
else
{
    console.log('File does not exist . Create the file first');
}