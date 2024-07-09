let display = document.querySelector("#display");
let btns = document.querySelectorAll("button");
let arr = Array.from(btns);
let string = "";
arr.forEach( button => { 
    button.addEventListener('click' , (event) => {
        if(event.target.innerHTML == "="){
            string = eval(string);
            display.innerText = string;

        }
        else if(event.target.innerHTML == "AC"){
            string = "";
            display.innerText = string;    
        }       
        else if(event.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            display.innerText = string;
        }
        else{
            string +=event.target.innerHTML;
            display.innerText = string;
        }
    })
});

