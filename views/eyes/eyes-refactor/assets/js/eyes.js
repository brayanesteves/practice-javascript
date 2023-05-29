const balls = document.getElementsByClassName("ball");

document.addEventListener('mousemove', function (e) {
    let x = (e.clientX * 100) / window.innerWidth  + "%";
    let y = (e.clientY * 100) / window.innerHeight + "%";
    for(var i = 0;i < 2; i++) {
        balls[i].style.left      = x;
        balls[i].style.top       = y;
        balls[i].style.transform = "traslate(-" + x + ",-" + y + ")";
    }
    
});