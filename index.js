const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    button.classList.toggle('liked')
})


let myButton = document.getElementById("myBtn");

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        myButton.style.display = "block";
    }    else {
        myButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }