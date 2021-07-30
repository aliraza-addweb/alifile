var fs = require('fs');

var str1 = fs.readFileSync("test.txt");
console.log(str1);

function change(str){

var org_str = str.toString();
var str = org_str.replace( /[aeiou]/ig, '' );
console.log(str);
return str;
}


var result = change(str1);
fs.writeFileSync("new.txt",result.toString());
console.log(result);