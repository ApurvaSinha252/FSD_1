const fs = require("fs").promises; //could be require("fs/promises");

async function writeFile()
{
    try
    {
        await fs.writeFile("promise.txt","Hello Students !");
        console.log("File created and data written successfully.");
    }
    catch(error)
    {
        console.log("Error : ",error);
    }
}

writeFile();

//read file
//create file
//This code snippet defines an asynchronous function named 
// readFile that reads the contents of a file named "promise.txt" 
// using the fs.readFile method from the Node.js fs module. 
//It uses the await keyword to wait for the file to be read and stores the contents in a variable named data.
async function readFile()
{
    try
    {
        const data = await fs.readFile("promise.txt","utf-8");
        console.log("File content is given as : ",data);
    }
    catch(error)
    {
        console.log("Error : ",error);
    }
}
readFile();

//update file

async function appendFile()
{
    try
    {
        await fs.appendFile("promise.txt","\n This is a new line");
        console.log("File is updated successfully.");
    }
    catch(error)
    {
        console.error("Error : ",error);
    }
}
appendFile();

//rename
async function renameFile()
{
    try
    {
        await fs.rename("promise.txt","promise_new.txt");
        console.log("File is renamed successfully.");
    }
    catch(error)
    {
        console.error("Error : ",error);
    }
}
renameFile();


//delete
async function deleteFile()
{
    try
    {
        await fs.unlink("delsample.txt");
        console.log("File is deleted successfully.");
    }
    catch(error)
    {
        console.error("Error : ",error);
    }
}
deleteFile();