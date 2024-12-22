const snowContainer = document.getElementById('snow');
const snowflakes = [];
const maxSnowflakes = 100;
const snowflakeCreationInterval = 100;
const animationFrameDuration = 16;
let windDirection = 0;

function createSnowflake() {
    if (snowflakes.length >= maxSnowflakes) return;

    const snowflake = document.createElement('div');
    const size = Math.random() * 5 + 2;
    const left = Math.random() * window.innerWidth;
    const fallSpeed = Math.random() * 3 + 2;

    snowflake.classList.add('snowflake');
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${left}px`;
    snowflake.style.top = `-${size}px`;

    snowContainer.appendChild(snowflake);
    snowflakes.push({ element: snowflake, fallSpeed: fallSpeed });
}

function animateSnowflakes() {
    for (let i = snowflakes.length - 1; i >= 0; i--) {
        const snowflake = snowflakes[i];
        const currentTop = parseFloat(snowflake.element.style.top);
        const currentLeft = parseFloat(snowflake.element.style.left);

        snowflake.element.style.top = `${currentTop + snowflake.fallSpeed}px`;
        snowflake.element.style.left = `${currentLeft + windDirection}px`; // Движение снежинок по ветру

        if (currentTop > window.innerHeight) {
            snowflake.element.remove();
            snowflakes.splice(i, 1);
        }

        if (parseFloat(snowflake.element.style.left) < 0 || 
            parseFloat(snowflake.element.style.left) > window.innerWidth) {
            snowflake.element.remove();
            snowflakes.splice(i, 1);
        }
    }
}
function handleResize() {
    for (const snowflake of snowflakes) {
        const currentLeft = parseFloat(snowflake.element.style.left);
        if (currentLeft > window.innerWidth) {
            snowflake.element.style.left = `${window.innerWidth - 5}px`;
        } else if (currentLeft < 0) {
            snowflake.element.style.left = `0px`;
        }
    }
}

window.addEventListener('resize', handleResize);

function handleMouseMove(event) {
    const centerX = window.innerWidth / 2;
    const mouseX = event.clientX;
    
    windDirection = ((mouseX - centerX) / centerX)*4;
}

function startSnowfall() {
    setInterval(() => {
        createSnowflake();
    }, snowflakeCreationInterval);

    function animate() {
        animateSnowflakes();
        setTimeout(animate, animationFrameDuration);
    }

    animate();
}

window.addEventListener('mousemove', handleMouseMove);

startSnowfall();