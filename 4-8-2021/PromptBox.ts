class PromptBox
{ 

 show()
 { 
  // var arrid = [];
  // var arrName = [];
  // var arrMark = [];

  var i=1;

    do{ 
//   var promptValue = prompt('Enter 1)id 2)Name 3)marks', '');


  // var id: string;
  // var name: string;

  var id  = prompt('Enter id: ');
  var name  = prompt('Enter name: ');
  var marks = prompt('Enter marks: ');
  var choice = prompt('You want to continue? ');
  var Sdata = [id,name,marks];

  localStorage.setItem("StudentsId"+i,JSON.stringify(Sdata));
  
  // arrid.push(id);
  // arrName.push(name);
  // arrMark.push(marks);

  // localStorage.setItem("id" + i, arrid);

  const data = document.getElementById('allData');

  const term1 = document.createElement('div');
  term1.setAttribute('id','Id'+ i);
  term1.setAttribute('style','color:#0026ff');
  data.appendChild(term1);

  const term2 = document.createElement('div');
  term2.setAttribute('id','Name'+ i);
  term2.setAttribute('style','color:#0026ff');
  data.appendChild(term2);

  const term3 = document.createElement('div');  
  term3.setAttribute('id','Marks'+ i);
  term3.setAttribute('style','color:#0026ff');
  data.appendChild(term3);

//   const term3 = document.createElement('dp');
//   term3.setAttribute('id','Id'+ i++);

  
//   var ids = document.createElement("div");
//   ids.setAttribute("id","Id"+i+1);
//   var names = document.createElement("div");
//   names.setAttribute("id","Name"+i+1);
//   var markss = document.createElement("div");
//   markss.setAttribute("id","Marks"+i+1);

  document.getElementById('Id'+i).innerHTML = "Id: " + id;
  document.getElementById('Name'+i).innerHTML = "Name: " + name;
  document.getElementById('Marks'+i).innerHTML = "Marks: " + marks;
  i++;

    } while(choice == 'y')

    // console.log(arrid);
    // console.log(arrName);
    // console.log(arrMark);

    // localStorage.setItem(JSON.stringify(arrid),"StudentsId");
    // localStorage.setItem(JSON.stringify(arrName),"StudentsName");
    // localStorage.setItem(JSON.stringify(arrMark),"StudentsMarks");

//   if (promptValue != null) {  
//    document.getElementById("Status").innerHTML = "Id ->" + promptValue;  
//   } else  
//   {  
//    document.getElementById("Status").innerText = "You cancel Prompt Box";  
//   }  
 }  
}  
window.onload = () =>  
 {  
  var bttn = < HTMLButtonElement > document.getElementById("Button1");  
  bttn.onclick = function()  
  { 
   console.log('enter in click function');
   var obj  = new PromptBox();  
   obj.show();  
  }  
 }; 