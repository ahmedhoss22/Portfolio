const html=document.getElementById('html')
const css=document.getElementById('css')
const javascript=document.getElementById('javascript')
const bootstrap=document.getElementById('bootstrap')
const sass=document.getElementById('sass')
const react=document.getElementById('react')
const tail=document.getElementById('tailwind')
const redux=document.getElementById('tailwind')


window.onscroll=()=>{
    let value=scrollY;
    let screenWidth= screen.width;
    console.log(value)
    if(screenWidth>=1500){
            if(value>=300 ){
                html.style.width= "90%";
                css.style.width= "85%";
                javascript.style.width="80%";
                bootstrap.style.width="80%";
                sass.style.width="90%";
                react.style.width="60%"
                tail.style.width="80%"
            } else if(value<=100){
                html.style.width= "0%";
                css.style.width= "0%";
                javascript.style.width="0%"
                bootstrap.style.width="0%"
                sass.style.width="0%";
                react.style.width="0%"
                tail.style.width="0%"
            }
    }else if(screenWidth>=1000){
            if(value>=400 ){
                html.style.width= "90%";
                css.style.width= "85%";
                javascript.style.width="80%";
                bootstrap.style.width="80%";
                sass.style.width="90%";
                react.style.width="60%";
                tail.style.width="80%";
            }else if(value<=200){
                html.style.width= "0%";
                css.style.width= "0%";
                javascript.style.width="0%";
                bootstrap.style.width="0%";
                sass.style.width="0%";
                react.style.width="0%";
                tail.style.width="0%";
            }
    }else {
            if(value>=1300){
                html.style.width= "90%";
                css.style.width= "85%";
                javascript.style.width="80%"
                bootstrap.style.width="80%"
                sass.style.width="90%";
                react.style.width="60%";
                tail.style.width="80%";
            }else if(value<=1100){
                html.style.width= "0%";
                css.style.width= "0%";
                javascript.style.width="0%"
                bootstrap.style.width="0%"
                sass.style.width="0%";
                react.style.width="0%";
                tail.style.width="0%";
            }
    }
}
