function myFunction() {
  var element = document.body;
  var innerElement = document.getElementsByClassName("icon-bar");
  var innerElement1 = document.getElementById("bttn1");
  element.classList.toggle("dark-mode");
  
  element.classList.toggle("navbar-dark");
  innerElement1.classList.toggle("navbar-toggler-dark");
  for(i=0; i<innerElement.length; i++)
  {
    innerElement[i].classList.toggle('icon-bar-dark');
  }
}
// Change the classList param so that the whole thing is not getting disrupted.
