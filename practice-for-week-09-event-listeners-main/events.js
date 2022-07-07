// Your code here

window.addEventListener("DOMContentLoaded", event => {
    const redInput = document.getElementById("red-input");
    const addItem = document.getElementById("add-item");   
    const colorSelect = document.getElementById("color-select");     
    const section = document.getElementById("section-3")
       
    const button= document.getElementById("remove-listeners")    
    const inputList = document.getElementById("list-add")
   

    var redInputListener= (event) =>{
        if(event.target.value.includes("red")){
            event.target.style.backgroundColor = "red";
         }else{
          event.target.style.backgroundColor = "transparent";
         }    
    }    
    redInput.addEventListener("input",  redInputListener);


    var appendList= (event) => {
        const text = inputList.value;
        const li = document.createElement("li");
        li.innerText = text;
        console.log(text);
        const ul = document.querySelector("#section-2>ul");
        ul.appendChild(li);

    };
    addItem.addEventListener("click", appendList);
    

    var colorSelectListener = (event)=>{
        const color = colorSelect.value     
        section.style.backgroundColor = color;
    }
    colorSelect.addEventListener("change", colorSelectListener);

 
    button.addEventListener("click", event => {
        console.log("event on button click");

        colorSelect.removeEventListener("change",colorSelectListener,false);
        addItem.removeEventListener("click",appendList,false);
        redInput.removeEventListener("input", redInputListener,false);
    });   
 });

window.onload = ()=> {
    window.alert("DOM IS LOADED!!!");
}