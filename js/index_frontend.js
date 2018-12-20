window.onload()
{
    let header = document.getElementById('header');
    let navtoggle = document.getElementById('nav-toggle');

    //Code for scrolling header background color
    window.addEventListener("scroll",function (e) {
        let yOfset = window.pageYOffset;
        if(yOfset >200)
        {
            addClass(header,"scrolled");
        }
        else{
            removeClass(header,"scrolled")
        }
    })

    navtoggle.addEventListener('click',()=>{
        toggleClass(header,"open");
    });
    function toggleClass(element,classname) {
        let classList = element.className.split("")
        if(classList.indexOf(classname)===-1)
        {
            addClass(element,classname)
        }
    }
}