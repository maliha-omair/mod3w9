const createContent= () =>{
    // document.body.settitle = "Maliha's portfolio"

    const topDiv = document.createElement("div")
    document.body.appendChild(topDiv)    
    topDiv.style.display = "grid"
    topDiv.style.gridTemplateColumns = "15% 70%"
    

    // document.body.style.backgroundColor = "white"
    
    const leftDiv = document.createElement("div")
    topDiv.appendChild(leftDiv)
    
    const rightDiv = document.createElement("div")
    topDiv.appendChild(rightDiv)
    
    const heading = document.createElement("h1")    
    heading.setAttribute("id","heading")
    const txt = document.createTextNode("Hi, I'm Maliha")
    heading.style.color = "Black"
    rightDiv.append(heading)
    const titleDiv = document.createElement("div")
    rightDiv.append(titleDiv)


    //image
    const profileImg = document.createElement("img")
    profileImg.setAttribute("src","profilePic.jpg")
    leftDiv.appendChild(profileImg)
    profileImg.width = "200"
    profileImg.height = "200"
    profileImg.style.borderRadius = "20%"

    const aboutUs = document.createElement("p")
    const aboutUsText = document.createTextNode("")    
    
    
    
    
    

    // titleDiv.style.justifyContent = "center"
    // titleDiv.style.flexDirection = "column"
    heading.style.textAlign = "left"
    heading.style.paddingLeft = "20px"

    heading.append(txt)

     
    const heading2 = document.createElement("h3")
    rightDiv.appendChild(heading2)
    const txt2 = document.createTextNode("I build things for the web")
    heading2.appendChild(txt2)
    heading2.style.paddingLeft ="20px"
    heading2.style.paddingTop ="-20px"
    heading2.style.marginTop ="0px"

}
window.onload = createContent