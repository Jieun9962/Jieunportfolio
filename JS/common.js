document.addEventListener('DOMContentLoaded', () => {
    const stopButton = document.querySelector('.ani_bt');
    // 실제 애니메이션이 걸려있는 요소의 클래스명을 지정하세요.
    const animTarget = document.querySelector('.cov_img'); 

    if (!stopButton || !animTarget) return;

    stopButton.addEventListener('click', () => {
        animTarget.style.animationPlayState = 'paused';

    // 2. 접근성 aria-label 속성을 '정지됨(stopped)' 상태로 동적 변경
        stopButton.setAttribute('aria-label', 'animation stopped'); 
        
        stopButton.disabled = true;   
    });

});