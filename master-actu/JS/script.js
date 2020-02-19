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
      cartesActuType1.setAttribute("class", "cartes-actu-type-2")
      listeCartes.appendChild(cartesActuType1)
      var image = document.createElement("img");
      image.setAttribute("src", code.list3[i].img);
      cartesActuType1.appendChild(image);
      var h3cart = document.createElement("h3");
      cartesActuType1.appendChild(h3cart);
      h3cart.innerHTML = "crée en js";
      var date = document.createElement("span");
      cartesActuType1.appendChild(date);
      date.innerHTML = code.list3[i].date;
      var text = document.createElement("p");
      cartesActuType1.appendChild(text);
      text.innerHTML = code.list3[i].text;
    }else {
      cartesActuType1.setAttribute("class", "cartes-actu-type-1")
      listeCartes.appendChild(cartesActuType1)
      var image = document.createElement("img");
      image.setAttribute("src", code.list[i].img);
      cartesActuType1.appendChild(image);
      var h3cart = document.createElement("h3");
      cartesActuType1.appendChild(h3cart);
      h3cart.innerHTML = "crée en js";
      var date = document.createElement("span");
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
