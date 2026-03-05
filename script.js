const tech_icon = [
    "https://icon.icepanel.io/Technology/svg/HTML5.svg",
    "https://icon.icepanel.io/Technology/svg/CSS3.svg",
    "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    "https://icon.icepanel.io/Technology/svg/React.svg",
    "https://icon.icepanel.io/Technology/svg/Vite.js.svg",
    "https://icon.icepanel.io/Technology/svg/Azios.svg",
    "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    "https://icon.icepanel.io/Technology/png-shadow-512/Express.png",
    "https://icon.icepanel.io/Technology/svg/Mongoose.js.svg",
    "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    "https://icon.icepanel.io/Technology/svg/Node.js.svg",
    "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png"    ,
    "https://icon.icepanel.io/Technology/svg/NPM.svg",
    "https://icon.icepanel.io/Technology/svg/Postman.svg"
]

const tech_name = [
    "HTML5", "CSS", "JavaScript", 
    "React", "Vite.Js", "Axios",
    "TailWind", "Express.Js", 
    "Mongoose", "MongoDB", "Node.Js", 
    "GitHub", "NPM", "Postman",
]

if ( tech_icon.length == tech_name.length ) {
    let skill_box_container = document.getElementById("skill-box-container-content");

    for (let i = 0; i < tech_icon.length; i++ ) {
        skill_box_container.innerHTML += 
        `                      
        <div class="skill-box">
            <img src="${tech_icon[i]}" alt="">
            <p> ${tech_name[i]} </p>
        </div>
        `
    }
}

function reveal_Text_Effect() {
    const role = "Fresher Fullstack Developer";
    const h1 = document.querySelector(".r-sec-content .role");

    h1.innerHTML ="";
    
    for (let i = 0; i < role.length ; i++ ) {
        h1.innerHTML += `<span style="animation-delay:${i * 0.1}s" >${role[i]}</span>`
    }
}

reveal_Text_Effect()