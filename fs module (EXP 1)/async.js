const fs = require('fs');

//create 
fs.writeFile(
    'sample.txt','Welcome to Full stack Development' , (err) => {
        if(err)
        {
            console.log('Error creating file: ',err);
            return;
        }

        console.log('1. File created successfully');
    }
)

//read
fs.readFile(
    'sample.txt','utf8', (err,data) => {
        if(err)
        {
            console.log('Error reading file: ',err);
            return;
        }

        console.log('2. File content is given as :');
        console.log(data);
    }
)

//update (append)
fs.appendFile('sample.txt','\n This is a new line \n Semester 3', (err) => {
    if (err)
    {
        console.log('Error updating file: ',err);
    }
    else
    {
        console.log('\n3.File is updated successfully');
    }
})

//updated read
fs.readFile(
    'sample.txt','utf8', (err,data) => {
        if(err)
        {
            console.log('Error reading file: ',err);
            return;
        }

        console.log('\n4. File content is given as :');
        console.log(data);
    }
)

//Delete
fs.writeFile(
    'sample1.txt','Welcome DS Students' , (err) => {
        if(err)
        {
            console.log('Error creating file: ',err);
            return;
        }

        console.log('1. File created successfully');
    }
)
fs.unlink('sample1.txt', (err) => {
    if (err)
    {
        console.log('Error deleting file: ',err);
    }
    else
    {
        console.log('5. File sample1.txt is deleted successfully');
    }
})