const home =document.getElementById("home")
const about =document.getElementById("about")
const portfolio =document.getElementById("portfolio")
const contact =document.getElementById("contact")
const theme=document.querySelector('.theme-btn');
let themeMood;


home.addEventListener("click" ,(e)=>{  
    window.location='index.html';
})
about.addEventListener("click" ,(e)=>{  
    window.location='about.html';
})
portfolio.addEventListener("click" ,(e)=>{  
    window.location='portfolio.html';
})
contact.addEventListener("click" ,(e)=>{  
    window.location='contact.html';
})


theme.addEventListener("click" , themeChanger)


function themeChanger(){
    let x=document.body;
    if (x.classList.contains('light-mode')){
        x.classList.remove('light-mode')
        themeMood='dark'
    }else{
        x.classList.add('light-mode')
        themeMood='light'

    }
}