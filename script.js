// Themes
var DarkTheme = window.localStorage.getItem('dark-theme');
if (DarkTheme === null) {
  DarkTheme = false;
} else {
  DarkTheme = DarkTheme === 'true'
}

var icon = document.getElementById("icon");


if (DarkTheme) {
  document.body.classList.add('dark-theme')
}

icon.onclick = function () {
  DarkTheme = !DarkTheme;
  if (DarkTheme) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
  window.localStorage.setItem('dark-theme', DarkTheme);


  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
}
// Active Element Indicator
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach
    (link => {
        if (link.href.includes(`${activePage}`)) {
            link.classList.add(`active`);
        }
    })
// Scroll Indicator
window.onscroll = () => {
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    document.querySelector('#scroll-indicator').style.width = percentage + '%';
}
// Cursor Follower
var cursor = document.getElementById("cursor");
document.onmousemove = function (e) {
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY - 25) + "px";
    cursor.style.display = "block";
}
// Interactive Website
function myFunction(press=0) {
    var text="";
    var person="";
    if(press==0)
    {
      person = localStorage.getItem("person");
    }

    if(!localStorage.getItem("person"))
    {
      person = prompt("Please enter your name:", localStorage.getItem("person"));
      localStorage.setItem("person", person);
    }

    if (localStorage.getItem("person")) {
        if (person == null || person == "") {
            text = "Hello Guest! Welcome To KT Food Services";
        } else {

            text = "Hello " + person + "! Wanna Eat Something?";

        }
    }

    document.getElementById("h-primary").innerHTML = text;
}

function func(){
  localStorage.clear();
  myFunction(1)
}