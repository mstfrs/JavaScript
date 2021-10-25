var attemptCounter = 1;


a = Math.floor(Math.random() * 100);
console.log(a);


let checkButtonId= document.getElementById("check-button");
let messageInput = document.getElementById("message");
let attemptNum = document.getElementById("attempt_num");
let estimated=document.getElementById('number');
let resetButton= document.getElementById('reset-button');
console.log(estimated.value);

// messageInput.innerText= "_";         



checkButtonId.addEventListener('click', ()=>{
    if (isNaN(estimated.value)) { 
        messageInput.innerText= "Lütfen sayı giriniz";     
    }     
    else{  
        
    if (estimated.value>a) {
        messageInput.innerText= "Please enter a smaller number...";       
    } 
    else if(estimated.value<a) {
        messageInput.innerText= "Please enter a bigger number...";        
    }
    else {
        messageInput.innerText= `Congratulations, You guessed in ${attemptCounter} attempts`;
        document.body.className = "confetti"
        

    } 
    estimated.value="";
attemptNum.innerText=attemptCounter ++; 

}
 


});

resetButton.addEventListener("click", () =>{
    a = Math.floor(Math.random() * 100);
console.log(a);
attemptCounter=0;
estimated.value="";

attemptNum.innerText=attemptCounter;
document.body.style.backgroundImage = "url('.')";
messageInput.innerText= " ";   
document.body.className = "#"



}
)

