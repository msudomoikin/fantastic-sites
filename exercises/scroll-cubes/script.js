let cubesContainer = document.querySelector(".cubes-container");
const phases = ['phase-1', 'phase-2', 'phase-3', 'phase-4'];

document.addEventListener('scroll', () => {
    let cubesContainerRect = cubesContainer.getBoundingClientRect();
    let progress = (window.innerHeight - cubesContainerRect.y) / (window.innerHeight + cubesContainerRect.height);

    cubesContainer.classList.toggle('phase-1', progress > 0.3);    
    cubesContainer.classList.toggle('phase-2', progress > 0.4);    
    cubesContainer.classList.toggle('phase-3', progress > 0.5);    
    cubesContainer.classList.toggle('phase-4', progress > 0.6);

    
});
