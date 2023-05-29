const balls = document.querySelectorAll(".ball");

document.addEventListener('mousemove', function (e) {
    const x = (e.clientX * 100) / window.innerWidth  + "%";
    const y = (e.clientY * 100) / window.innerHeight + "%";
    for(var i = 0;i < 2; i++) {
        balls[i].style.left      = x;
        balls[i].style.top       = y;
        balls[i].style.transform = "traslate(-" + x + ",-" + y + ")";
    }
    
});