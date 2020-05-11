 
var code;
actuGenerator();


function actuGenerator() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://private-fd95c-dnsflo.apiary-mock.com/');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      var code = JSON.parse(this.response);
      actucreator(code);
      actucreator(code);
      actucreator(code);
    }
  };

  request.send();
}

function actucreator(code) {
  console.log(code);
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
      image.setAttribute("src", code.list3[i].img);
      cartesActuType1.appendChild(image);
      var h3cart = document.createElement("h3");
      cartesActuType1.appendChild(h3cart);
      h3cart.innerHTML = "crée en js";
      var date = document.createElement("h7");
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
      image.setAttribute("src", code.list[i].img);
      cartesActuType1.appendChild(image);
      var h3cart = document.createElement("h3");
      cartesActuType1.appendChild(h3cart);
      h3cart.innerHTML = "crée en js";
      var date = document.createElement("h7");
      cartesActuType1.appendChild(date);
      date.innerHTML = code.list[i].date;
      var text = document.createElement("p");
      cartesActuType1.appendChild(text);
      text.innerHTML = code.list[i].text;
    }
  }

}

function convert(nb){
    return (1600/1280)*nb;
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












    var active;
    var abc;
    var json;
    $.getJSON('./JSON/config.json').done(function(response) {
        json = response;
        if (window.innerWidth>=992) {
            for (var i = 0; i < json.menu.deroulant.length; i++) {
                document.getElementById(json.menu.deroulant[i].name).addEventListener('click', function(event) {
                    menuPossibilities(event)
                })
            }
        }
    })
    document.addEventListener('click', function(event) {
        if (active) {
            console.log(event.target.tagName);
            if (event.target.tagName != "UL" && event.target.tagName != "LI" && event.target.tagName != "A") {
                active.parentNode.removeChild(active);
                active = null;
            }
        }
    })
    window.addEventListener('resize', function(event) {
        if (active) {
            active.parentNode.removeChild(active);
            active = null;
        }
        if (window.innerWidth >= 992) {
            document.getElementById('menu').innerHTML = '<li class="nav-item navbar-right"><a class="nav-link" id="enfants" href="#">Enfants</a></li><li class="nav-item"><a class="nav-link" id="adultes" href="#">Adultes</a></li><li class="nav-item"><a class="nav-link" id="cabinet" href="#">Le Cabinet</a></li><li class="nav-item"><a class="nav-link" id="actu" href="#">Actualités</a></li><li class="nav-item"><a class="nav-link" id="contact" href="#">Contact</a></li>';
            for (var i = 0; i < json.menu.deroulant.length; i++) {
                document.getElementById(json.menu.deroulant[i].name).addEventListener('click', function(event) {
                    menuPossibilities(event)
                })
            }
        } else if (window.innerWidth <= 992) {
            document.getElementById('menu').innerHTML = '<li class="nav-item navbar-right dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Enfants</a><div class="dropdown-menu" aria-labelledby="navbarDropdown1"><a class="dropdown-item" href="#">Bilan spychologique</a><a class="dropdown-item" href="#">Orientation scolaire</a><a class="dropdown-item" href="#">Accompagnement scolaire</a></div></li><li class="nav-item navbar-right dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Adultes</a><div class="dropdown-menu" aria-labelledby="navbarDropdown2"><a class="dropdown-item" href="#">Bilan psychologique adulte</a><a class="dropdown-item" href="#">Accompagnement au changement</a></div></li><li class="nav-item navbar-right dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Le cabinet</a><div class="dropdown-menu" aria-labelledby="navbarDropdown3"><a class="dropdown-item" href="#">Votre cabinet de psychologie</a><a class="dropdown-item" href="#">Carole Baudron</a></div></li><li class="nav-item navbar-right dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Actualités</a><div class="dropdown-menu" aria-labelledby="navbarDropdown4"><a class="dropdown-item" href="#">Actualités 1</a><a class="dropdown-item" href="#">Actualités 2</a><a class="dropdown-item" href="#">Actualités 3</a></div></li><li class="nav-item"><a class="nav-link" id="contact" href="#">Contact</a></li>'
        }
    })
    function menuPossibilities(e){
        if (window.innerWidth >= 992) {
            for (var b = 0; b < json.menu.deroulant.length; b++) {
                console.log(e);
                if(e.target.id == json.menu.deroulant[b].name) {
                    if (active) {
                        active.parentNode.removeChild(active);
                    }
                    var newDiv = document.createElement('DIV');
                    for (var c = 0; c < json.menu.deroulant[b].list.length; c++) {
                        var newLittleDiv = document.createElement('DIV');
                        var enterText = document.createElement('a');
                        enterText.innerHTML = json.menu.deroulant[b].list[c].nom
                        enterText.setAttribute('href', json.menu.deroulant[b].list[c].url)
                        enterText.style.fontFamily = json.menu.font;
                        enterText.style.color = "#8c8596"
                        enterText.style.width = "230px"
                        newLittleDiv.appendChild(enterText);
                        if (c != 0 ) {
                            newLittleDiv.style.marginTop = "10px"
                        }
                        newDiv.appendChild(newLittleDiv)
                    }
                    newDiv.style.width = "230px"
                    newDiv.style.position = "absolute";
                    newDiv.style.marginLeft = e.target.offsetLeft-60+"px";
                    newDiv.style.marginTop = "-"+e.target.offsetTop-30+"px";
                    newDiv.style.backgroundColor = "#ffffff"
                    newDiv.style.paddingTop = "15px"
                    newDiv.style.paddingLeft = "15px"
                    newDiv.style.paddingRight = "15px"
                    newDiv.style.paddingBottom = "5px"
                    newDiv.style.boxShadow = json.menu.shadow
                    active = newDiv
                    document.getElementById('header').appendChild(newDiv)

                }
            }
        }
    }
