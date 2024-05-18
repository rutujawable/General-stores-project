
function darkmode(){
    const darkMode= document.getElementById("dark-mode")
    darkMode.classList.add('active_1')

    const lightMode= document.getElementById("light-mode")
    lightMode.classList.remove('active_1')

    const body= document.getElementById("body")
    body.className = "body-dark"


}

function lightmode(){

    const lightMode= document.getElementById("light-mode")
    lightMode.classList.add('active_1')

    const darkMode= document.getElementById("dark-mode")
    darkMode.classList.remove('active_1')

    const body= document.getElementById("body")
    body.className = "body-light"

    
}