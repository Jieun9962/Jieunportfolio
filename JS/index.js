    document.addEventListener('DOMContentLoaded', () => {
        /* ====== main_img anime ======= */
        const bunnySection = document.querySelector('.bunny');
        const foregroundImg = document.querySelector('.foreground');
        const statusText = document.getElementById('bunny-status');
        if (!bunnySection || !foregroundImg) return;
        const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!hasReducedMotion) {
            bunnySection.addEventListener('mousemove', (e) => {
                const rect = bunnySection.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const relativeX = (mouseX / rect.width) - 0.5;
                const moveX = relativeX * 20;
                const mouseY = e.clientY - rect.top;
                const relativeY = (mouseY / rect.height) - 0.5;
                const moveY = relativeY * 15; 
                foregroundImg.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
            });
            bunnySection.addEventListener('mouseleave', () => {
                foregroundImg.style.transform = 'translate(-50%, -50%)';
            });
        }
        /* ====== Accordion button======= */
        const accordionButtons = document.querySelectorAll('.proj_bt > button');
        accordionButtons.forEach(button => {
        button.addEventListener('click', () => {

            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            const targetId = button.getAttribute('aria-controls');
            const targetContent = document.getElementById(targetId);
            if (!targetContent) return;

            button.setAttribute('aria-expanded', !isExpanded);
            if (!isExpanded) {
                // open
                targetContent.classList.add('is-active');
                targetContent.setAttribute('aria-hidden', 'false');
            } else {
                // close
                targetContent.classList.remove('is-active'); 
                targetContent.setAttribute('aria-hidden', 'true');
            }
        });
});
    });