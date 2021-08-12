var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var a = [];
var i = 0;
var fun = function () {
    rl.question("Enter Id of students: ", function (id) {
        a.push(id);
        rl.question("Enter Name of students: ", function (name) {
            a.push(name);
            rl.question("Enter Marks of students: ", function (marks) {
                a.push(marks);
                rl.question("Want to continue yes or no: ", function (ch) {
                    if (ch == "y") {
                        fun();
                    }
                    else {
                        console.log(JSON.stringify(a));
                    }
                });
            });
        });
    });
};
fun();
