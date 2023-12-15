/* Adds class to div element to initiate the appearing animationv */ 
function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 20;
        if (elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        } else {
            //reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

/*document.querySelector("#pH2").addEventListener("click", () =>{
    window.scrollTo(0,document.body.scrollHeight);
})*/

/* Scrolls to the bottom */
$(document).ready(function() { 
    $("button").click(function() { 
        $("html, body").animate({ 
            scrollTop: $( 
              'html, body').get(0).scrollHeight 
        }, 800); 
    }); 
}); 