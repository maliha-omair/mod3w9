// Your code here

window.addEventListener("DOMContentLoaded", event => {
    const redInput = document.getElementById("red-input");
    const addItem = document.getElementById("add-item");   
    const colorSelect = document.getElementById("color-select");     
    const section = document.getElementById("section-3")
    const color = colorSelect.value        
    const button= document.getElementById("remove-listeners")    
    const inputList = document.getElementById("list-add")
   
   
    redInput.addEventListener("input", event => {
       if(redInput.value.includes("red")){
          redInput.style.backgroundColor = "red"
       }else{
        redInput.style.backgroundColor = "transparent"
       }
    });

    addItem.addEventListener("click", event => {
        const text = inputList.value;
        const li = document.createElement("li");
        li.innerText = text;
        console.log(text)
        const ul = document.querySelector("#section-2>ul");
        ul.appendChild(li);

    });
    
    colorSelect.addEventListener("change", event => {
      section.style.backgroundColor = color
    });
    
    button.addEventListener("click", event => {
        console.log("event on button click")
        colorSelect.removeEventListener("change",this)
        addItem.removeEventListener("click",this)
        redInput.removeEventListener("input", this)
    });   
 });

window.onload = ()=> {
    window.alert("DOM IS LOADED!!!")
}