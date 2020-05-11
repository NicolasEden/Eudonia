let ancien = 0;
function scroll(){
    let head = document.getElementById("navbar");
    let link = head.getElementsByClassName("nav-link")
    let t = window.scrollY;
    if (t>screen.height-100) {
        if(t > ancien){
          head.style.backgroundColor = "white";
          head.style.top = "-150px";
          for (let i = 0; i < link.length; i++) {
              link[i].style.color = "white";
          }
        }else{
          head.style.backgroundColor = "white";
          head.style.top = "0";
          for (let i = 0; i < link.length; i++) {
              link[i].style.color = "white";
          }
        }
        ancien = t;
    }else{
        head.style.backgroundColor = "transparent";
        head.style.top = "0";
    }
}
