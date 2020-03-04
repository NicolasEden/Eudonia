







var code;
actuGenerator();


function actuGenerator() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://private-fd95c-dnsflo.apiary-mock.com/');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      var code = JSON.parse(this.response);
    }
  };

  request.send();
}

function actucreator(code) {
  var listeCartes = document.createElement("div");
  listeCartes.setAttribute("class", "liste-cartes");
  var container = document.getElementById('cartesListes');
  container.appendChild(listeCartes);
  for (var i = 0; i < 3; i++) {
    var cartesActuType1 = document.createElement("div");
    if (i == 1) {
      cartesActuType1.setAttribute("class", "cartes-actu-type-2");
      cartesActuType1.setAttribute("onclick", "window.open('../Home/index.html','_self',false)");
      listeCartes.appendChild(cartesActuType1)
      var image = document.createElement("img");
      image.setAttribute("src", "../master-actu/ressources/img/image-actu.png");
      cartesActuType1.appendChild(image);
      var h3cart = document.createElement("h3");
      cartesActuType1.appendChild(h3cart);
      h3cart.innerHTML = "crée en js";
      var date = document.createElement("h6");
      cartesActuType1.appendChild(date);
      date.innerHTML = code.list3[i].date;
      var text = document.createElement("p");
      cartesActuType1.appendChild(text);
      text.innerHTML = code.list3[i].text;
    }else {
      cartesActuType1.setAttribute("class", "cartes-actu-type-1")
      cartesActuType1.setAttribute("onclick", "window.open('../Home/index.html','_self',false)");
      listeCartes.appendChild(cartesActuType1)
      var image = document.createElement("img");
      image.setAttribute("src", "../master-actu/ressources/img/image-actu2.png");
      cartesActuType1.appendChild(image);
      var h3cart = document.createElement("h3");
      cartesActuType1.appendChild(h3cart);
      h3cart.innerHTML = "crée en js";
      var date = document.createElement("h6");
      cartesActuType1.appendChild(date);
      date.innerHTML = code.list[i].date;
      var text = document.createElement("p");
      cartesActuType1.appendChild(text);
      text.innerHTML = code.list[i].text;
    }
  }

}

var socialDiv = document.getElementsByClassName("social-dropdown-item");
for (var i = 0; i < socialDiv.length; i++) {
  socialDiv[i].style.display = "none";
}
  function SocialDropdownItem(event) {
      for (var i = 0; i < event.target.children.length; i++) {
        if (event.target.children[i].style.display == "none") {
          event.target.children[i].style.display = "block";
        }else {
          event.target.children[i].style.display = "none";
        }
      }
    }



    let ancien = 0;
    var lien = document.getElementsByClassName("linkDot");
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
                  link[i].style.color = "#8c8596";
              }
            }
            ancien = t;
        }
        else{
            head.style.backgroundColor = "transparent";
            head.style.top = "0";
            for (let i = 0; i < link.length; i++) {
                link[i].style.color = "white";
            }
        }
        var dot = document.createElement("div");
        dot.setAttribute("class", "activeDot");
        if (t<window.innerHeight) {
            suprDot();
            lien[0].appendChild(dot);
        }
        else if (t<window.innerHeight*2) {
            suprDot();
            lien[1].appendChild(dot);
        }
        else if (t<window.innerHeight*3) {
            suprDot();
            lien[2].appendChild(dot);
        }
        else if (t<window.innerHeight*4) {
            suprDot();
            lien[3].appendChild(dot);
        }
        else if (t<window.innerHeight*5) {
            suprDot();
            lien[4].appendChild(dot);
        }
        else if (t<window.innerHeight*6) {
            suprDot();
            lien[5].appendChild(dot);
        }
        else if (t<window.innerHeight*7) {
            suprDot();
            lien[6].appendChild(dot);
        }
        else if (t<window.innerHeight*8) {
            suprDot();
            lien[7].appendChild(dot);
        }
        else if (t<window.innerHeight*9) {
            suprDot();
            lien[8].appendChild(dot);
        }
        else if (t<window.innerHeight*10) {
            suprDot();
            lien[9].appendChild(dot);
        }
    }

    /*function changeDot(event) {
        suprDot();
        var dot = document.createElement("div");
        dot.setAttribute("class", "activeDot");
        event.target.appendChild(dot);
        for (var i = 0; i < lien.length; i++) {
            lien[i].setAttribute("onclick","changeDot(event)");
        }
        event.target.removeAttribute("onclick");
    }*/


    function suprDot(){
        var dotexist = document.getElementsByClassName("activeDot");
        if (dotexist) {
          for (var i = 0; i < dotexist.length; i++) {
              dotexist[i].remove();
          }
        }
    }


    function scrollStep() {
      setTimeout(function(){ window.scrollBy(0, 1000); }, 3000);
    }
    $("#case").mousemove(function(e) {
      parallaxIt(e, ".left", -5);
      parallaxIt2(e, ".right", -5);
    });

    function parallaxIt(e, target, movement) {
      var $this = $(".left");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }
    function parallaxIt2(e, target, movement) {
      var $this = $(".right");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() - movement,
        y: (relY - $this.height() / 2) / $this.height() - movement
      });
    }
