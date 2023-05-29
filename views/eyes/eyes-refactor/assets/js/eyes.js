try {    
    const balls = document.querySelectorAll(".ball");
    
    document.addEventListener('mousemove', (event) => {
        const x = (event.clientX * 100) / window.innerWidth  + "%";
        const y = (event.clientY * 100) / window.innerHeight + "%";
        balls.forEach((ball) => {
            ball.style.left      = x;
            ball.style.top       = y;
            ball.style.transform = "traslate(-" + x + ",-" + y + ")";
        })
        
    });
} catch(err) {
    console.error(err);
}