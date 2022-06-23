function myFunction() {
  var element = document.body;
  var innerElement = document.getElementsByClassName("icon-bar");
  var innerElement1 = document.getElementById("bttn1");
  var darkmodeButton = document.getElementsByClassName("dot");
  element.classList.toggle("dark-mode");

  var loaders = document.getElementsByClassName("loader");
  
  element.classList.toggle("navbar-dark");
  innerElement1.classList.toggle("navbar-toggler-dark");
  for(i=0; i<innerElement.length; i++)
  {
    innerElement[i].classList.toggle('icon-bar-dark');
  }

  for(i=0; i<loaders.length; i++)
  {
    loaders[i].classList.toggle("loader-dark");
  }

  for(i=0; i<darkmodeButton.length; i++)
  {
    darkmodeButton[i].classList.toggle("dot-dark");
  }
}

var loader="loader";
const hours = new Date().getHours();
if(hours > 20 && hours < 24) {
  myFunction();
  loader = "loader-dark";
}

if(hours >= 0 && hours < 7) {
  myFunction();
  loader = "loader-dark";
}

window.onload = function(){
  setTimeout(function(){
    // document.getElementById(loader).remove();
    var loaders = document.getElementsByClassName(loader);
    for(i=0; i<loaders.length; i++)
    {
      loaders[i].classList.remove();
    }
  },1000);
};
