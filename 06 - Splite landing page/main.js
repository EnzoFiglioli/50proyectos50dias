const root = document.getElementById("root");
const ps5 = document.createElement("span");
const xbox = document.createElement("span");

xbox.id = "xbox";
ps5.id = "ps5";

root.appendChild(ps5);
root.appendChild(xbox);

const xboxName = document.createElement("h3");
xboxName.innerText = "XBox Series X ";
const xboxContainer = document.createElement("div"); 
xboxContainer.id = "xbox-container";

const btn2 = document.createElement("a");
btn2.href = "#";
btn2.innerText = "BUY NOW";

btn2.addEventListener("click",()=>{
    ps5.style.width = "20%";
})

xbox.appendChild(xboxContainer);
xboxContainer.appendChild(xboxName);
xboxContainer.appendChild(btn2);



const btn = document.createElement("a");
btn.href = "#";
btn.innerText = "BUY NOW";


// XBOX BOTON

btn2.addEventListener("mouseenter",()=>{
    btn2.style.backgroundColor = "#228b22";
    btn2.style.borderColor = "#228b22"
})

btn2.addEventListener("mouseleave",()=>{
    btn2.style.backgroundColor = "transparent";
    btn2.style.borderColor = "#fff"
})

// PLAYSTATION

const psContenedor = document.createElement("div");

psContenedor.id ="ps5-container";

const playstationName = document.createElement("h3"); 
playstationName.innerText = "Playstation 5";

psContenedor.appendChild(playstationName);
psContenedor.appendChild(btn)

ps5.appendChild(psContenedor);

// PS5 BOTON
btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor = "#0000ff";
    btn.style.borderColor = "#0000ff"
})

btn.addEventListener("mouseleave",()=>{
    btn.style.backgroundColor = "transparent";
    btn.style.borderColor = "#fff"
})




xbox.addEventListener("mouseenter", ()=>{
    ps5.style.width = "30%";
    ps5.style.zIndex = "1";
    ps5.style.position = "relative";
    xbox.style.width = "100%";
    xbox.style.zIndex = "10";
    
    xbox.style.transition = "all 1s";
})

xbox.addEventListener("mouseleave", ()=>{
    ps5.style.width = "50%";
    xbox.style.width = "50%";
})


ps5.addEventListener("mouseenter", ()=>{
    xbox.style.width = "30%";
    ps5.style.width = "100%";
    ps5.style.zIndex = "100";
    xbox.style.zIndex = "2";
    ps5.style.transition = "all 1s";
})

ps5.addEventListener("mouseleave", ()=>{
    ps5.style.width = "50%";
    xbox.style.width = "50%";
})