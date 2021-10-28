let enteredTask = document.getElementById("taskInput");
let taskAddButton = document.getElementById("addButton")
let taskList = document.getElementById("tasks")
let todolistitem=document.getElementById("todoli")
// console.log(enteredTask);
// console.log(taskAdd);
// console.log(taskList);
var i=0;

taskAddButton.addEventListener("click", ()=>{
    i +=1;
    console.log(i);
    let listItemDiv= document.createElement("div")
    taskList.appendChild(listItemDiv)

    let liElement= document.createElement("li")
    listItemDiv.appendChild(liElement)
    listItemDiv.setAttribute("class","listitems")

    liElement.setAttribute("class", "todoli")
    let liElementById = document.getElementsByClassName("todoli");
    // let x=liElementById.length;
    console.log(liElementById[i]);
    let doneButton=document.createElement("img")
    listItemDiv.appendChild(doneButton);
    doneButton.setAttribute("src","./img/finish.png")
    let delButton=document.createElement("img")
    listItemDiv.appendChild(delButton);
    delButton.setAttribute("src","./img/del.jpg")
    liElementById[i].innerText=enteredTask.value;
    
})




// taskAdd.addEventListener("click", ()=>{
//     let liElement= document.createElement("li");
    
//     let finishTask= document.createElement("img")
//     let checkTask= document.createElement("input")
//     liElement.setAttribute("class","todoli")
//     checkTask.setAttribute("type","checkbox")
//     checkTask.setAttribute("class","check")
//     finishTask.setAttribute("src","./img/finish.png")
    

    
    
//     liElement.innerText=enteredTask.value;
//     liElement.appendChild(checkTask);
//     taskList.appendChild(liElement);
//     liElement.appendChild(finishTask);
    
    


//  })