let screen = document.getElementById('inputTag')
let buttons = document.getElementsByClassName('btn');
let screenValue=''
for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;
        console.log(buttonText)
        if(buttonText=='x'){
            buttonText='*';
            screenValue += buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='÷'){
            buttonText='/';
            screenValue += buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue = "";
            screen.value=screenValue;
        }
        else if(buttonText=='='){
           screen.value =eval(screenValue)
        }
        else{
            screenValue += buttonText;
            screen.value=screenValue;
        }
        })
}