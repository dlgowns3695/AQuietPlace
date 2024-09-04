document.addEventListener('DOMContentLoaded', () => {
    const loading = document.querySelector('.loading');
    const nextLoadingRed = document.querySelector('.nextloadingRed');
    const nextLoadingBlack = document.querySelector('.nextloadingBlack');
    const svgElement = document.querySelector('.frequency img');
    // console.log(svgElement)

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
    

    // console.log
    function showBlackLoadingTexts() {
        const nextloadingBlack = document.querySelector('.nextloadingBlack');
        const blackTexts = document.querySelectorAll('.nextloadingBlack .nextLoadingText');
        
        const scratch01 = document.querySelector('.scratch01');
        const scratch02 = document.querySelector('.scratch02');
        const scratch03 = document.querySelector('.scratch03');
        const lastTextIndex = blackTexts.length - 1;
        
        // 텍스트가 0.3초 간격으로 나타나도록 함
        blackTexts.forEach((text, index) => {
            setTimeout(() => {
                text.style.opacity = 1; // 텍스트를 보이게 함
    
                if (index === lastTextIndex) {
                    // 마지막 텍스트가 나타난 후 0.3초 후에 이미지를 나타내기 시작
                    setTimeout(() => {
                        const images = document.querySelectorAll('.loadingCenterImgY li img');
                        let delay = 0;
    
                        images.forEach((img, imgIndex) => {
                            setTimeout(() => {
                                const imgWidth = img.clientWidth;
                                const imgHeight = img.clientHeight;
                                const randomX = Math.floor(Math.random() * (window.innerWidth - imgWidth));
                                const randomY = Math.floor(Math.random() * (window.innerHeight - imgHeight));
    
                                img.style.position = 'absolute';
                                img.style.left = `${randomX}px`;
                                img.style.top = `${randomY}px`;
                                img.style.opacity = 1;
                                img.style.transition = 'opacity 0.2s ease';
    
                            }, delay);
                            delay += 100; // 점점 빠르게 나타나도록
                        });
    
                        // 모든 이미지가 다 나타난 후 클립패스 실행
                        setTimeout(() => {
                            scratch01.style.clipPath = 'polygon(0 0, 100% 0, 100% 98%, 0% 100%)';
                            scratch02.style.clipPath = 'polygon(0 0, 100% 0, 100% 98%, 0% 100%)';
                            scratch03.style.clipPath = 'polygon(0 0, 140% 0, 0 91%)';
    
                            // 클립패스 실행 후 몇 초 후 위로 올라가게 하고 nextloadingBlack을 none으로
                            setTimeout(() => {
                                nextloadingBlack.style.transition = 'transform 1s ease';
                                nextloadingBlack.style.transform = 'translateY(-100%)';
                                setTimeout(() => {
                                    nextloadingBlack.style.display = 'none';
                                }, 1000); // transition이 끝난 후 nextloadingBlack을 none 처리
                            }, 1000);
                        }, delay); // 마지막 이미지가 나타난 후 클립패스 실행
                    }, 300);
                }
            }, index * 300); // 0.3초 간격으로 텍스트가 나타남
        });
    }
    
    
});
