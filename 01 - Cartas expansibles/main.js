const root = document.getElementById("root");

const imgList = [{
    img:"01- Explore The World.avif",
    text:"Explore The World"
},{
    img:"02 - wild foster.avif",
    text:"Wild Foster"
},{
    img:"03 - sunny beach.avif",
    text:"Sunny Beach"
},{
    img:"04 - city on winter.avif",
    text:"City on Winter"
},{
    img:"05 - Mountains - Cloud.avif",
    text:"Mountains - Cloud"
}];
let expandedDiv = null;
let subtext = null;

if (root) {    
    imgList.forEach((imageName) => {
        const div = document.createElement("div");
        const p  = document.createElement("p");
        
        p.innerText += `${imageName.text}`;
        div.appendChild(p);

        div.id ="img";

        div.classList.add("image-container");
        div.style.background = "center";
        div.style.backgroundImage = `url('assets/${imageName.img}')`;
        div.style.backgroundRepeat = "no-repeat";
        div.style.backgroundSize = "cover";
        div.style.width = "7vw";
        div.style.height = "80vh";
        div.style.borderRadius = "1em";
        
        div.addEventListener("click", function() {
            
            if (expandedDiv) {
                expandedDiv.style.width = "7vw";
                subtext.style.display = "none";
            }

            if (expandedDiv !== div) {
                div.style.width = "60vw";
                expandedDiv = div;
                div.style.transition = "1s all";
                p.style.display = "block";
                p.style.transition = "2s all";
                subtext = p;
                
            } else {
                expandedDiv = null;
                subtext = null;
            }
        });
        root.appendChild(div);
    });
} else {
    console.error("El elemento root no se encontró.");
}
