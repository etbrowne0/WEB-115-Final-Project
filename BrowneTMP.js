//create a class for Tasks
class Task
{
    id = null;
    name = null;
    priority= null;
    isImportant= null;
    isCompleted = false;
    date = null;

    constructor(id, name, priority, isImportant, date)
    {
      this.id =id;
      this.name = name;
      this.priority=priority;
      this.isImportant = isImportant;
      this.date = date;
      
     this.addTask(); 
    }


    //adds each individual task
    addTask(){

    let color = "white";
  
    if(this.isImportant){
    color = "red";
    }
  
    

    var taskadded = document.createElement("div"); //Container for each task


   
    
    // Styling  for each task.

    
    taskadded.style.backgroundColor = color;
    taskadded.style.height = "10px";
    taskadded.style.padding = "15px";
    taskadded.style.fontSize = "14px";
    taskadded.style.fontFamily = "Arial";
    taskadded.style.borderRadius = "5px";
    taskadded.style.margin = "20px"; 
    taskadded.style.wordSpacing = "3px";
    
    taskadded.appendChild(document.createTextNode(this.name +  " "));
    taskadded.appendChild(document.createTextNode("Priority:" + this.priority+ " "));
    taskadded.appendChild(document.createTextNode("Date:" + this.date + " "));
    taskadded.appendChild(document.createTextNode("Done?"));

    let checkIsDone = document.createElement("input");
    checkIsDone.type = "checkbox";
    checkIsDone.id = "checkbox" + this.id;
   // console.log(checkIsDone.id);
    taskadded.appendChild(checkIsDone);

    let taskthis = this;
    checkIsDone.addEventListener("change", function(){
      if(this.checked)
      {
       taskthis.isCompleted = true;
       //console.log('**'+ taskthis.isCompleted)
        
       taskadded.style.textDecoration = "line-through";
       console.log("\n\n"+JSON.stringify(taskarray));
      }
      else {
        taskthis.isCompleted = false;
       // console.log('**'+ taskthis.isCompleted)
        taskadded.style.textDecoration ="none";
        console.log("\n\n"+JSON.stringify(taskarray));
      }
     
    })

    let delbutton = document.createElement("button");
    delbutton.name = "delbutton";
    delbutton.id = "delbutton"+ this.id;
    //console.log(delbutton.id);
    delbutton.textContent="Delete";

    delbutton.addEventListener("click", function(){
      idcount--;
      taskadded.remove(); 
      taskarray.splice(this.id, 1);
      console.log("\n\n"+JSON.stringify(taskarray));
    });


    taskadded.appendChild(delbutton);
    taskman.append(taskadded);

   
    
  }



}

var idcount = 0; // Count for individual Task objects
var taskarray =[]; // Array for holding task objects

let inForm = document.getElementById("inForm"); // form to store the taskmanager div

let taskman = document.getElementById("taskmanager");

let sub = document.getElementById("add"); 

let taskbox = document.getElementById("task");
let ionbox = document.getElementById("importantOrNot");
let ion = document.getElementById("importantOrNot").checked;
let prioritymenu = document.getElementById("priority");
let taskname = taskbox.value;
let priority = prioritymenu.value;

taskbox.addEventListener("input", function(){
    taskname = this.value;
  })

prioritymenu.addEventListener("change", function(){
    priority = this.value;  
    //console.log(priority);
})

ionbox.addEventListener("change", function(){
   ion = !ion; // Turns on and off the 'isImportant' attribute
})

inForm.addEventListener("submit", function(e){
  e.preventDefault();
  
  let task = new Task(idcount + 1, taskname,priority,ion, new Date().toLocaleDateString('en-US'));
  
  //taskarray[idcount] = new Task(idcount+1, taskname, priority, ion, new Date());
  
  
  taskarray.push(task);
  //console.log(taskarray[idcount]);

  idcount++;
  console.log("\n\n"+JSON.stringify(taskarray));
 
});

 