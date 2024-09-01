document.addEventListener('DOMContentLoaded', () => {
    const loading = document.querySelector('.loading');
    const nextLoadingRed = document.querySelector('.nextloadingRed');
    const nextLoadingBlack = document.querySelector('.nextloadingBlack');

    function updateLoadingPercent(percent) {
        const percentElement = document.querySelector('.loading-percent');
        percentElement.textContent = percent.toString().padStart(3, '0') + '%';
    }

    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 1;
        updateLoadingPercent(progress);
        if (progress >= 100) {
            clearInterval(loadingInterval);
            loading.style.opacity = 0;
            setTimeout(() => {
                loading.style.display = 'none';
                nextLoadingRed.style.opacity = 1;
                showNextLoadingTexts();
            }); // 0.5초 후에 두 번째 로딩 화면을 표시
        }
    }, 50);

    function showNextLoadingTexts() {
        const texts = document.querySelectorAll('.nextloadingRed .nextLoadingText');
        texts.forEach((text, index) => {
            setTimeout(() => {
                text.style.opacity = 1; // 텍스트를 보이게 함
            }, index * 300); // 0.5초 간격으로 텍스트가 나타남
        });

        // 마지막 텍스트가 나타난 후 0.5초 뒤에 색상 변경
        setTimeout(() => {
            nextLoadingRed.style.opacity = 0;
            nextLoadingBlack.style.opacity = 1;
            showBlackLoadingTexts();
        }, texts.length * 300); // 모든 텍스트가 나타난 후 0.5초 추가
    }

    function showBlackLoadingTexts() {
        const blackTexts = document.querySelectorAll('.nextloadingBlack .nextLoadingText');
        blackTexts.forEach((text, index) => {
            setTimeout(() => {
                text.style.opacity = 1; // 텍스트를 보이게 함
            }, index * 300); // 0.5초 간격으로 텍스트가 나타남
        });
    }
});
