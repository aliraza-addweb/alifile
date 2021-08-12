const readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var a = [];
var i = 0;
var fun=() =>
{
    rl.question("Enter Id of students: ",(id) =>
    {
        a.push(id);
        rl.question("Enter Name of students: ",(name) =>
        {
            a.push(name);
            rl.question("Enter Marks of students: ",(marks) =>
            { 
                a.push(marks);
                rl.question("Want to continue yes or no: ", (ch) =>
                {
                    if(ch== "y")
                    {
                        fun();
                    }
                    else
                    {
                        console.log(JSON.stringify(a));
                    }
                })
            });
        });
    });
}
fun();