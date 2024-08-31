// 1번. 

document.addEventListener('DOMContentLoaded', () => {
    // 로딩 화면 요소를 가져옴
    const loading = document.querySelector('.loading');
    
    // 발자국 개별 요소를 모두 가져옴
    const footprintElements = document.querySelectorAll('.footprints li');
    
    // 전체 발자국의 개수를 계산
    const totalFootprints = footprintElements.length;

    const handprint = document.querySelector('.hand');
    console.log(handprint)

    // 로딩 진행 상태를 업데이트하는 함수
    function updateLoadingPercent(percent) {
        const percentElement = document.querySelector('.loading-percent');
        percentElement.textContent = `${percent}%`; // 현재 퍼센트 업데이트
    }

    // 발자국이 하나씩 나타나도록 하는 함수
    function showFootprints() {
        let index = 0; // 현재 표시할 발자국의 인덱스
        const interval = setInterval(() => {
            if (index < totalFootprints) {
                footprintElements[index].style.opacity = 1; // 발자국 표시
                index++; // 다음 발자국으로 인덱스 증가
            } else {
                clearInterval(interval); // 모든 발자국이 표시되면 반복 중지
                // 모든 발자국이 나타난 후 로딩 화면 숨기기
                setTimeout(() => {
                    loading.style.opacity = 0; // 로딩 화면을 서서히 숨김
                    setTimeout(() => {
                        loading.style.display = 'none'; // 로딩 화면을 완전히 숨김
                    }, 700); // opacity transition 지속시간
                }, 500); // 최종 발자국이 나타난 후 지연시간
            }
        }, 300); // 발자국이 하나씩 나타나는 간격 (100ms)
    }

     // 예제: 로딩 상태를 업데이트하는 과정
    let progress = 0; // 초기 퍼센트 값
    const loadingInterval = setInterval(() => {
        progress += 1; // 퍼센트 증가
        showFootprints(); // 발자국 애니메이션 시작
        updateLoadingPercent(progress); // 퍼센트 업데이트 함수 호출

        if (progress >= 60 && progress < 75) {
            handprint.style.opacity = 1; // 손자국 나타남
        } else if (progress >= 75) {
            if (progress >= 75) {
                handprint.classList.add('fade-out');
                handprint.style.opacity = '0'; // 손자국 사라짐
            }
            
        }

        if (progress >= 100) {
            clearInterval(loadingInterval); // 퍼센트가 100%가 되면 반복 중지
        }
    }, 60); // 60ms마다 업데이트
});




// 2번.
// document.addEventListener('DOMContentLoaded', () => {
//     // 로딩 화면 요소를 가져옴
//     const loading = document.querySelector('.loading');
//     const loadingBar = document.querySelector('.loading-bar');
    
//     // 로딩 진행 상태를 업데이트하는 함수
//     function updateLoadingPercent(percent) {
//         const percentElement = document.querySelector('.loading-percent');
//         percentElement.textContent = `${percent}%`; // 현재 퍼센트 업데이트
//         loadingBar.style.width = `${percent}%`; // 막대바 너비 업데이트
//     }

//     // 예제: 로딩 상태를 업데이트하는 과정
//     let progress = 0; // 초기 퍼센트 값
//     const loadingInterval = setInterval(() => {
//         if (progress < 20) {
//             progress += 2; // 초기 구간에서는 빠르게 증가
//         } else if (progress < 60) {
//             progress += 1; // 중간 구간에서는 천천히 증가
//         } else {
//             progress += 3; // 후반부 구간에서는 빠르게 증가
//         }
        
//         updateLoadingPercent(progress); // 퍼센트 업데이트 함수 호출

//         if (progress >= 100) {
//             clearInterval(loadingInterval); // 퍼센트가 100%가 되면 반복 중지
//             setTimeout(() => {
//                 loading.style.opacity = 0; // 로딩 화면을 서서히 숨김
//                 setTimeout(() => {
//                     loading.style.display = 'none'; // 로딩 화면을 완전히 숨김
//                 }, 700); // opacity transition 지속시간
//             }, 500); // 최종 발자국이 나타난 후 지연시간
//         }
//     }, 100); // 100ms마다 업데이트
// });
