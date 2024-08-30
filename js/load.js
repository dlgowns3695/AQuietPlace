document.addEventListener('DOMContentLoaded', () => {
    const loading = document.querySelector('.loading');
    const footprints = document.querySelector('.footprints');
    const footprintElements = document.querySelectorAll('.footprints li');
    const totalFootprints = footprintElements.length;
    const loadingBefore = document.querySelector('.loading::before'); // 가상 요소 접근

    // 로딩 진행 상태를 업데이트하는 함수
    function updateLoadingPercent(percent) {
        const percentElement = document.querySelector('.loading-percent');
        percentElement.textContent = `${percent}%`;
    }

    // 발자국이 하나씩 나타나도록 하는 함수
    function showFootprints() {
        let index = 0;
        const interval = setInterval(() => {
            if (index < totalFootprints) {
                footprintElements[index].style.opacity = 1; // 발자국 표시
                index++;
            } else {
                clearInterval(interval);
                // 모든 발자국이 나타난 후 로딩 화면 숨기기
                setTimeout(() => {
                    loading.style.opacity = 0;
                    setTimeout(() => {
                        loading.style.display = 'none';
                    }, 700); // opacity transition duration
                }, 500); // 최종 발자국이 나타난 후 지연시간
            }
        }, 100); // 발자국 하나씩 나타나는 간격
    }

    // 예제: 로딩 상태를 업데이트하는 과정
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 1; // 퍼센트 증가
        updateLoadingPercent(progress);
        if (progress >= 100) {
            clearInterval(loadingInterval);
            showFootprints(); // 발자국 애니메이션 시작
        }
    }, 10); // 100ms마다 업데이트

    
});
