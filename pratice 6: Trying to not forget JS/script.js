const block = document.getElementById('block');
const gravityStatus = document.getElementById('gnfo');
let speed = 10;
let x = parseInt(localStorage.getItem('x')) || 0;
let y = parseInt(localStorage.getItem('y')) || 0;

let isActive = false;




// Initialize position on page load
block.style.left = x + 'px';
block.style.top = y + 'px';

window.addEventListener('keydown', (KEYevent) => {
    // 1. Prevent scrolling with arrow keys
    KEYevent.preventDefault();

    // 2. Update coordinates based on the specific key pressed
    if (KEYevent.key === 'ArrowUp') y -= speed;
    if (KEYevent.key === 'ArrowDown') y += speed;
    if (KEYevent.key === 'ArrowLeft') x -= speed;
    if (KEYevent.key === 'ArrowRight') x += speed;

    // 3. Update the DOM (Visual movement)
    block.style.left = x + 'px';
    block.style.top = y + 'px';


    // 4. Save to localStorage
    localStorage.setItem('x', x);
    localStorage.setItem('y', y);
});

window.addEventListener('keydown', (KEYevent) => {

    if (KEYevent) {
        
    }if (KEYevent.key === 'g' || KEYevent.key === 'G') {
        isActive = !isActive;
        gravityStatus.textContent = (isActive ? 'gravity status: ON' : 'gravity status: OFF')
    }


}
)

function applyGravity() {
if (isActive) {
    y += 2; // Gravity constant
    block.style.top = y + 'px';
    localStorage.setItem('y', y);
}
    requestAnimationFrame(applyGravity);
}

applyGravity();