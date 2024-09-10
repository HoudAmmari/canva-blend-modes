// Initialize Canva SDK
import { initializeCanvaApp } from 'https://sdk.canva.com/v1/canva.js';

// When Canva app is ready
initializeCanvaApp({
    onReady() {
        console.log("Canva App is ready");

        // Once ready, load the design or an image
        loadDesignImage();
    }
});

const canvasElement = document.getElementById('blendCanvas');
const ctx = canvasElement.getContext('2d');
const blendOptions = document.getElementById('blendOptions');

// Placeholder function to load an image (this can be replaced with Canva design data)
function loadDesignImage() {
    const img = new Image();
    img.src = 'https://via.placeholder.com/500'; // Placeholder image, can be replaced with Canva image data

    img.onload = () => {
        canvasElement.width = img.width;
        canvasElement.height = img.height;
        ctx.drawImage(img, 0, 0);
    };
}

// Apply blend modes when buttons are clicked
blendOptions.addEventListener('click', (e) => {
    if (e.target.classList.contains('blend-option')) {
        const blendMode = e.target.getAttribute('data-mode');
        applyBlendMode(blendMode);
    }
});

function applyBlendMode(mode) {
    ctx.globalCompositeOperation = mode;
    // Redraw the image with the selected blend mode
    const img = canvasElement.toDataURL();
    const image = new Image();
    image.src = img;
    image.onload = () => {
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        ctx.drawImage(image, 0, 0);
    };
}
