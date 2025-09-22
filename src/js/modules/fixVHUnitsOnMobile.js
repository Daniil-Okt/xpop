export function fixVHUnitsOnMobile() {
    if (window.innerWidth > 768) return;
    
    const vhElements = document.querySelectorAll('.fix-vh-mob');
    setTimeout(() => {
        vhElements.forEach(element => {
            const styles = window.getComputedStyle(element);
            const elementHeight = element.offsetHeight;

            element.style.height = `${elementHeight}px`; 
            element.style.minHeight = `${elementHeight}px`; 
        });
    }, 400);

}