// document.addEventListener('DOMContentLoaded', () => {
//     const loading = document.querySelector('.loading');
//     const footprints = document.querySelector('.footprints');
    
//     // 로딩 진행 상태를 업데이트하는 함수
//     function updateLoadingPercent(percent) {
//         const percentElement = document.querySelector('.loading-percent');
//         percentElement.textContent = `${percent}%`;
//     }

//     // 예제: 로딩 상태를 업데이트하는 과정
//     let progress = 0;
//     const loadingInterval = setInterval(() => {
//         progress += 1; // 퍼센트 증가
//         updateLoadingPercent(progress);
        
//         if (progress >= 100) {
//             clearInterval(loadingInterval);
//             // 발자국 애니메이션이 끝날 때까지 로딩 화면 유지
//             setTimeout(() => {
//                 loading.style.opacity = 0;
//                 setTimeout(() => {
//                     loading.style.display = 'none';
//                 }, 700); // opacity transition duration
//             }, 5000); // 발자국 애니메이션 시간이 완료된 후
//         }
//     }, 100); // 100ms마다 업데이트 (가속기, 감소기 속도 조절 가능)
// });
