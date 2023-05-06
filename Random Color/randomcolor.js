const container = document.querySelector(".container")
const refreshbtn = document.querySelector(".refresh-color")

const maxPalete = 29;
let genratePalete = ()=>{
    container.innerHTML ="" // clearing the container
    for(let i =0;i<=maxPalete;i++){
        let randomHex = Math.floor(Math.random() * 0xffffff ) .toString(16)
        randomHex = `#${randomHex.padStart(6 , "0")}`
        // creating element
        const color = document.createElement("li")
        color.classList.add("color")
        color.innerHTML = `<div class="rect-box" style="background:${randomHex}"></div>
                         <span class="hexcode">${randomHex}</span>`   
                         //console.log(color);     
        color.addEventListener("click",()=> copycolor(color,randomHex)) 
        container.appendChild(color)      
    }
}
genratePalete();
const copycolor = (elem , hexvalue)=>{
    const colorElement = elem.querySelector(".hexcode")
    navigator.clipboard.writeText(hexvalue).then(()=>{
        colorElement.innerText = "Copied";
        setTimeout(()=> colorElement.innerText = hexvalue,1000)
    })
}
refreshbtn.addEventListener("click",genratePalete)

