var active;
var abc;
var json;
$.getJSON('./JSON/config.json').done(function(response) {
    json = response;
    for (var i = 0; i < json.menu.deroulant.length; i++) {
        document.getElementById(json.menu.deroulant[i].name).addEventListener('click', function(event) {
            menuPossibilities(event)
        })
    }
})
document.addEventListener('click', function(event) {
    if (active) {
        console.log(event.target.tagName);
        if (event.target.tagName != "UL" && event.target.tagName != "LI" && event.target.tagName != "A") {
            console.log('test');
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
    if (window.innerWidth <= 992) {
        for (var i = 0; i-1 < document.getElementById('menu').children.length; i++) {
            if (document.getElementById('menu').children[i]) {
                document.getElementById('menu').children[i].className = "nav-item dropdown"
                var newDiv = document.createElement("DIV")
                newDiv.setAttribute('class', 'dropdown-menu')
                newDiv.setAttribute('aria-labelledby', 'navbarDropdown')
                for (var d = 0; d < json.menu.deroulant[b].list.length; d++) {
                    var newElement = document.createElement('A')
                    newElement.setAttribute('class', 'dropdown-item')
                    newElement.setAttribute('href', 'dropdown-item')
                }
            }
        }
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
                newDiv.style.marginTop = "-"+e.target.offsetTop-135+"px";
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
