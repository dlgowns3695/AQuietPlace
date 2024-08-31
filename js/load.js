document.addEventListener('DOMContentLoaded', () => {
    const loading = document.querySelector('.loading');
   

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
        }
    }, 60);
});
