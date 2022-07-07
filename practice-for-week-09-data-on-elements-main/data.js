// Your code here



window.addEventListener("DOMContentLoaded", event => {
    const button = document.getElementById("add")
    const shoppingList = document.getElementById("shopping-list")
    var buttonClick = (event)=>{
        console.log(event)
        event.preventDefault();
        const typeSelecter = document.getElementById("type");
        const itemNameInput = document.getElementById("name");
        const li = document.createElement("li")

        const itemName = itemNameInput.value;
        const type = typeSelecter.value;

        console.log(itemName)
        console.log("type is ", type)
              
        li.innerText = itemName
        li.setAttribute("data-type",type)
        shoppingList.appendChild(li)
    }
      button.addEventListener("click", buttonClick);   
 });