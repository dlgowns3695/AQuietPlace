document.addEventListener('DOMContentLoaded', () => {
    const loading = document.querySelector('.loading');
    const nextLoadingRed = document.querySelector('.nextloadingRed');
    const nextLoadingBlack = document.querySelector('.nextloadingBlack');
    const svgElement = document.querySelector('.frequency img');
    console.log(svgElement)

    function updateLoadingPercent(percent) {
        const percentElement = document.querySelector('.loading-percent span');
        percentElement.textContent = percent.toString().padStart(3, '0') + '%';

        // 로딩 진행률에 따라 SVG의 clip-path를 조정
        svgElement.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    }

    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 1;
        updateLoadingPercent(progress);
        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loading.style.display = 'none';
                nextLoadingRed.style.opacity = 1;
                showNextLoadingTexts();
            }, 500); // 0.5초 후에 두 번째 로딩 화면을 표시
        }
    }, 50);

    function showNextLoadingTexts() {
        const texts = document.querySelectorAll('.nextloadingRed .nextLoadingText');
        const nextLoadingRed = document.querySelector('.nextloadingRed');
        const nextLoadingBlack = document.querySelector('.nextloadingBlack');
    
        // 텍스트가 0.3초 간격으로 나타나도록 함
        texts.forEach((text, index) => {
            setTimeout(() => {
                text.style.opacity = 1; // 텍스트를 보이게 함
            }, index * 300);
        });
    
        // 모든 텍스트가 나타난 후 0.5초 뒤에 다음 단계로 이동
        setTimeout(() => {
            nextLoadingRed.style.display = 'none';
            nextLoadingBlack.style.opacity = 1; // 검정색 로딩 화면 나타남
            showBlackLoadingTexts();
        }, texts.length * 300 + 500); // 모든 텍스트가 나타난 후 0.5초 추가
    }
    
    function showBlackLoadingTexts() {
        const nextloadingBlack = document.querySelector('.nextloadingBlack');
        const blackTexts = document.querySelectorAll('.nextloadingBlack .nextLoadingText');
        const loadingCenterImg = document.querySelector('.loadingCenterImgY');
        const scratch01 = document.querySelector('.scratch01');
        const scratch02 = document.querySelector('.scratch02');
        const scratch03 = document.querySelector('.scratch03');
        const lastTextIndex = blackTexts.length - 1;
    
        // 텍스트가 0.3초 간격으로 나타나도록 함
        blackTexts.forEach((text, index) => {
            setTimeout(() => {
                text.style.opacity = 1; // 텍스트를 보이게 함
                if (index === lastTextIndex) {
                    scratch01.style.clipPath = 'polygon(0 0, 100% 0, 100% 98%, 0% 100%)';
                    scratch02.style.clipPath = 'polygon(0 0, 100% 0, 100% 98%, 0% 100%)';
                    scratch03.style.clipPath = 'polygon(0 0, 100% 0, 100% 98%, 0% 100%)';
                    // 마지막 텍스트가 나타난 후 이미지가 서서히 사라짐
                    setTimeout(() => {

                        loadingCenterImg.style.transition = 'opacity 0.5s ease-in-out';
                        loadingCenterImg.style.opacity = 0;
    
                        // 이미지가 완전히 사라진 후에 실행
                        setTimeout(() => {

                            loadingCenterImg.style.display = 'none'; // 이미지 숨김 처리
                            
    
                            // 3초 후에 nextloadingBlack이 위로 올라가며 사라짐
                            setTimeout(() => {
                                nextloadingBlack.style.transition = 'transform 1s ease-in-out';
                                nextloadingBlack.style.transform = 'translateY(-100vh)';
    
                                setTimeout(() => {
                                    nextloadingBlack.style.display = 'none'; // 완전히 숨김 처리
                                }, 1000); // 애니메이션이 완료된 후에 숨김 처리
                                
                            }, 1000);

                        }, 500); // opacity transition이 완료된 후에 실행

                    },300); // 마지막 텍스트가 나타난 후 0.3초 후에 실행
                }

            }, index * 300); // 0.3초 간격으로 텍스트가 나타남
        });
    }
});