console.log("Hello World!");
let navlist = document.querySelector("#navlist");
let menu = document.querySelector("#menu");
let cancel = document.querySelector("#cancel");
let screenWidth = screen.width;
let screenHeight = screen.height;
console.log(screenWidth);
console.log(screenHeight);



        // <======================== 2nd Navbar ==================>

        let fixedicon1 = document.getElementById("fixed_icon1");
        let fixedicon2 = document.getElementById("fixed_icon2");
        let navbar2 = document.getElementById("navbar2");

        fixedicon1.addEventListener("click", ()=>{
            navbar2.style.left = "0";
            fixedicon1.style.transform = "scale(0)"
                fixedicon1.style.opacity = "0"
        })
        fixedicon2.addEventListener("click", ()=>{
            navbar2.style.left = "-100%";
            fixedicon1.style.transform = "scale(1)"
                fixedicon1.style.opacity = "1"
        })




        let navbar =document.getElementById("navbar");
        let logo = document.getElementById("logo");

        window.addEventListener("scroll", function(){
            if(window.pageYOffset > screenHeight-"650"){
                navbar.style.top = "-200px";
                fixedicon1.style.opacity = "1"
                fixedicon1.style.transform = "scale(1)"
            }
            else{
                fixedicon1.style.transform = "scale(0)"
                fixedicon1.style.opacity = "0"
                navbar.style.top = "0px";
                navbar2.style.left = "-100%"
            }
        })