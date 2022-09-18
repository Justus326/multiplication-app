const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)
const formEl = document.getElementById("form")
const scoreEl = document.getElementById("score")
const questionEl = document.getElementById("question")
const inputEl = document.getElementById("input")


let score = JSON.parse(localStorage.getItem("score"));  

if (!score){score = 0;}
scoreEl.innerText = `score: ${score}`

questionEl.innerText = `what is ${num1} multiply by ${num2}`;

const correctAns = num1 * num2;
console.log(correctAns);
  
formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
  

    if (userAns === correctAns){
        score++; 
        updateLocalStorage();
    
    }
    else{
        score -- ;   
        updateLocalStorage();
    }

});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}

