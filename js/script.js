let gsapPlugIn = () => {
    

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }
gsap.registerPlugin(ScrollTrigger, ScrollSmoother); /* https://gsap.com/docs/v3/Plugins/ScrollSmoother/ */

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
    smooth:1, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    // smoothTouch: 0.001, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    normalizeScroll: true,
    ignoreMobileResize: true,
  });


document.addEventListener('mousemove', (e) => {
    // let mouseX = e.pageX;
    // let mouseY = e.pageY;
    let windowX = window.innerWidth;
    
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    
    if(windowX - 20 > e.pageX){
        let cursor = document.querySelector('.cursor');
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    }
});

document.addEventListener('click', (e) => {
    const shot = document.querySelector('.shot');

    // Calculate relative position based on scroll
    const relativeX = e.clientX;
    const relativeY = e.clientY;

    // Set image position
    shot.style.left = relativeX + 'px';
    shot.style.top = relativeY + 'px';

    // Show image
    shot.style.opacity = '1';
    shot.style.transition = 'opacity 0.3s ease';

    // Hide image after 0.3s
    setTimeout(() => {
        shot.style.opacity = '0';
    }, 300);

});




let btn = $('#upBtn');
$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/*****  PC intro Raven*****/
$(window).on('scroll', function(e) {
    let scrollTop = $(this).scrollTop();
    // console.log("window top "+scrollTop)
  
    $('.ravenPc .raven01, .ravenPc .raven02, .ravenPc .raven03, .ravenPc .raven04, .ravenPc .raven05, .ravenPc .raven06').css('transition', 'transform 0.3s');

    $('.ravenPc .raven01').css('transform', `translate(${scrollTop * 1.5}px, -${scrollTop * 0.5}px)`);
    $('.ravenPc .raven02').css('transform', `translate(${scrollTop * 1.2}px, -${scrollTop}px)`);
    $('.ravenPc .raven03').css('transform', `translate(-${scrollTop * 1.2}px, -${scrollTop * 0.5}px)`);
    $('.ravenPc .raven04').css('transform', `translate(${scrollTop * 1.5}px, -${scrollTop * 0.5}px)`);
    $('.ravenPc .raven05').css('transform', `translate(-${scrollTop * 1.2}px, -${scrollTop}px)`);
    $('.ravenPc .raven06').css('transform', `translate(${scrollTop * 1.2}px, -${scrollTop * 0.5}px)`);

});

/*****  Mobile intro Raven*****/
$(window).on('scroll', function(e) {
    let scrollTop = $(this).scrollTop();
    // console.log("window top "+scrollTop)
  
    $('.ravenMobile .raven01, .ravenMobile .raven02, .ravenMobile .raven03, .ravenMobile .raven04, .ravenMobile .raven05, .ravenMobile .raven06').css('transition', 'transform 0.3s');

    $('.ravenMobile .raven01').css('transform', `translate(${scrollTop * 1.5}px, -${scrollTop * 0.5}px)`);
    $('.ravenMobile .raven02').css('transform', `translate(-${scrollTop * 1.2}px, -${scrollTop}px)`);
    $('.ravenMobile .raven03').css('transform', `translate(-${scrollTop * 1.2}px, -${scrollTop * 0.5}px)`);
    $('.ravenMobile .raven04').css('transform', `translate(${scrollTop * 1.5}px, -${scrollTop * 0.5}px)`);
    $('.ravenMobile .raven05').css('transform', `translate(-${scrollTop * 1.2}px, -${scrollTop}px)`);
    $('.ravenMobile .raven06').css('transform', `translate(${scrollTop * 1.2}px, -${scrollTop * 0.5}px)`);

});


const mask1 = gsap.timeline({
    defaults: {ease: "none", duration: 1},
    scrollTrigger: {
      trigger: '.maskText1',
      scrub: true,
      start: 'top 0%',
      end: '6000px center',
      overwrite: true,
      //markers: true,
    }
  }).to('.maskText1 .txt1', {y: '-0px'}).
  to('.maskText1 .txt1', {y: '-24px'}).
  to('.maskText1 .txt1', {y: '-24px'}).
    to('.maskText1 .txt1', {y: '-24px'}).
    to('.maskText1 .txt1', {y: '-48px'}).
    to('.maskText1 .txt1', {y: '-96px'}).
    to('.maskText1 .txt1', {y: '-96px'}).
    to('.maskText1 .txt2', {y: '-0px'})



// 콰이어트
const mask2 = gsap.timeline({
    defaults: {ease: "none", duration: 1},
    scrollTrigger: {
      trigger: '.maskText2',
      scrub: true,
      start: 'top 0%',
      end: '6000px center',
      overwrite: true,
      //markers: true,
    }
  }).to('.maskText2 .txt1', {y: '-96px'}).
  to('.maskText2 .txt2', {y: '-96px'}).
  to('.maskText2 .txt2', {y: '-96px'}).
  to('.maskText2 .txt2', {y: '-192px'}).
  to('.maskText2 .txt2', {y: '-192px'})

// DRAMA움직이고, DRAMA22 움직이고
  


// 왔칭
const mask3 = gsap.timeline({
    defaults: {ease: "none", duration: 1},
    scrollTrigger: {
      trigger: '.maskText1',
      scrub: true,
      start: 'top 0%',
      end: '6000px center',
      //markers: true,
      overwrite: true,
    }
  }).to('.maskText1 .txt2', {y: '-0px'}).
  to('.maskText1 .txt2', {y: '-24px'}).
  to('.maskText1 .txt2', {y: '-24px'}).
  to('.maskText1 .txt2', {y: '-96px'}).
  to('.maskText1 .txt1', {y: '-96px'})


// 플레이스
const mask4 = gsap.timeline({
    defaults: {ease: "none", duration: 1},
    scrollTrigger: {
      trigger: '.maskText2',
      scrub: true,
      start: 'top 0%',
      end: '6000px center',
      overwrite: true,
      //markers: true,
    }
  }).to('.maskText2 .txt2', {y: '-0px'}).
  to('.maskText2 .txt1', {y: '-96px'}).
  to('.maskText2 .txt1', {y: '-96px'}).
  to('.maskText2 .txt1', {y: '-96px'}).
  to('.maskText2 .txt1', {y: '-96px'})



  
gsap.to('.netflix', {
    scrollTrigger: {
        trigger: '.netflix',
        start: 'top 40%',
        end: '5000px',
        pin: true,
        scrub: true,
        //pinSpacing: false,
        // markers: true,
        
    }
    
});

// gsap.to('.monsterDec', {
//     scrollTrigger: {
//         trigger: '.monsterDec',
//         start: 'top 80%',
//         // end: '5000px',
//         scrub: true,
//         markers: true,
        
//     }
    
// });

gsap.timeline({
    scrollTrigger: {
      trigger: '.monsterDec',
      scrub: true,
      start: 'top 15%',
      end: '+=600px',
      overwrite: true,
    //   markers: true,
    }
  }).to('.monsterDec', {opacity: 1})



gsap.to('.monsterDec .wrapper .title', {
    scrollTrigger: {
        trigger: '.monsterDec .wrapper .title',
        start: 'top 200px',
        end: '10000px',
        pin: true,
        pinSpacing: false,
        //markers: true,
        
    }
    
});

gsap.to('.monsterDec .titleDisplayNone', {
    scrollTrigger: {
        trigger: '.monsterDec .titleDisplayNone',
        start: 'top 320px',
        end: '600px',
        pin: true,
        pinSpacing: false,
        //markers: true,
        
    }
    
});


gsap.to('.waveDim', {
    scrollTrigger: {
        trigger: '.quietPlaceWave',
        start: '2400px',
        //markers: true,
        onEnter: () => {
            // 투명에서 깜빡거리는 애니메이션 적용
            gsap.to('.waveDim', { backgroundColor: 'rgba(0, 0, 0, 0.5)', duration: 0.1, repeat:5, yoyo: true,
            onComplete: () => {
                // 애니메이션이 끝나면 배경색을 원래대로 돌립니다.
                gsap.to('.waveDim', { backgroundColor: 'rgba(0, 0, 0, 0)', duration: 0.1 });
            } });
        },
    }
});

gsap.to('.waveDim', {
    scrollTrigger: {
        trigger: '.quietPlaceWave',
        start: '4300px', 
        // markers: true,
        onEnter: () => {
            // 투명에서 깜빡거리는 애니메이션 적용
            gsap.to('.waveDim', { backgroundColor: 'rgba(0, 0, 0, 0.5)', duration: 0.1, repeat:2, yoyo: true,
            onComplete: () => {
                // 애니메이션이 끝나면 배경색을 원래대로 돌립니다.
                gsap.to('.waveDim', { backgroundColor: 'rgba(0, 0, 0, 0)', duration: 0.1 });
            } });
        },
    }
});

gsap.to('.waveDim', {
    scrollTrigger: {
        trigger: '.quietPlaceWave',
        start: '7500px', 
        // markers: true,
        onEnter: () => {
            // 투명에서 깜빡거리는 애니메이션 적용
            gsap.to('.waveDim', { backgroundColor: 'rgba(0, 0, 0, 0.7)', duration: 0.1, repeat: 3, yoyo: true,
            onComplete: () => {
                // 애니메이션이 끝나면 배경색을 원래대로 돌립니다.
                gsap.to('.waveDim', { backgroundColor: 'rgba(0, 0, 0, 0)', duration: 0.1 });
                // .title 요소에 대해 fadeOut 효과 적용
                gsap.to('.title', { opacity: 0, duration: 0.5 });
            } });
        },
        onLeaveBack: () => {
            // 스크롤이 다시 되돌아가면 .title 요소에 대해 fadeIn 효과 적용
            gsap.to('.title', { opacity: 1, duration: 0.5 });
        }
    }
});







gsap.utils.toArray('.monsterDec .wrapper .monsterInformation').forEach((info, index) => {
    gsap.to(info, {
        scrollTrigger: {
            trigger: info,
            start: 'top 70%', // 문구가 화면의 60% 지점에서 나타나도록 설정
            end: 'top 80%', // 문구가 화면의 80% 지점까지 나타난 후 사라지도록 설정
            //markers: true, // 디버깅을 위해 markers 설정
            onEnter: () => {
                gsap.to(info, { opacity: 1, duration: 0.7 }); // 문구가 나타나는 애니메이션
            },
            onLeaveBack: () => {
                gsap.to(info, { opacity: 0, duration: 0.7 }); // 문구가 사라지는 애니메이션
            }
        }
    });
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    console.log(window.scrollY);
    
    // 스크롤 위치에 따라 fadeIn 또는 fadeOut 적용
    $('.monsterinfo li').each(function(index) {
        var fadeInThresholds = [13000, 13500, 14000, 14500, 15000];
        
        if (scrollTop > fadeInThresholds[index]) {
            $(this).fadeIn();
        }else{
            $(this).fadeOut();
        }
    });
});


// 11500 부터 인덱스 4~ 0 순으로 위치 이동 하면서 양 옆에서 문구 
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    // 요소의 인덱스와 이동 위치 설정
    var positions = [
        { index: 5, x: '-145%', y: '-120%', start: 16000, xIndex5: '-300%', yIndex5: '-250%' },
        { index: 4, x: '-77%', y: '-62%', start: 16500, xIndex4: '-300%', yIndex4: '-100%' },
        { index: 3, x: '20%', y: '0', start: 17500, xIndex3: '200%', yIndex3: '150%' },
        { index: 2, x: '25%', y: '-90%', start: 18000, xIndex2: '210%', yIndex2: '-210%' },
        { index: 1, x: '-152%', y: '0', start: 18500, xIndex1: '-310%', yIndex1: '120%' }
    ];
    
    // 각 요소에 대해 위치 이동 처리
    positions.forEach(function(pos) {
        var monsterinfo = $('.monsterinfo li:nth-of-type(' + pos.index + ')');
        
        // 스크롤 위치가 이동 위치를 넘어설 때 위치 이동
        if (scrollTop >= pos.start) {
            monsterinfo.css({
                'transform': 'translate(' + pos.x + ', ' + pos.y + ')'
            });
        } else {
            // 스크롤 위치가 이동 위치를 넘어서지 않을 때 초기 위치로 되돌림
            monsterinfo.css({
                'transform': 'translate(0, -50%)'
            });
        }
        
        // 스크롤 위치가 14600을 넘어갈 때 요소들을 화면 밖으로 이동
        if (scrollTop > 18500) {
            monsterinfo.css({
                'transform': 'translate(' + pos['xIndex' + pos.index] + ', ' + pos['yIndex' + pos.index] + ')'
            });
        }
    });
});



gsap.to([".moveTitle", ".moveWatching"], {
    scrollTrigger: {
        trigger: ".moveName",
        start: "top 40%",
        end: "2000px",
        scrub: 1,
        pin: true,
        // markers: true,
    },
    x: function(index) {
        return index % 2 === 0 ? 0 : 650; // 첫 번째 요소는 왼쪽으로 0, 두 번째 요소는 오른쪽으로 이동 600
    },
    delay: 0.1,
    ease: "power1.inOut",
    duration: 1
});







const s3 = gsap.timeline({
    defaults: {ease: "none", duration: 1},
    scrollTrigger: {
      trigger: '.carSection',
      scrub: true,
      start: 'top 0%',
      end: '7300px center',
      pin: '.carGuide',
      //markers: true,
    }
  }).to('.carGuide > img', {y: '5vw',})
    .to('.carGuide > img', {x: '0.2vw',})
    .to('.carGuide > img', {y: '5vw',})
    .to('.carGuide > img', {x: '-0.1vw',})
    .to('.carGuide > img', {x: '0.2vw',})
    
    .to('.carGuide > img', {x: '-0.1vw',})
    .to('.carGuide > img', {y:'5vw',})
    
    .to('.carGuide > img', {x: '-0.2vw',})
    .to('.carGuide > img', {x: '0vw',})
    .to('.carGuide > img', {y: '5vw',
})

gsap.timeline({
    scrollTrigger: {
        trigger: '.line02',
        start: '-450px top',
        end: 'bottom top',
        scrub: true, // 스크롤에 따라 애니메이션이 연동되도록
        markers: true // 디버깅을 위해 스크롤 트리거의 시작과 끝을 표시
    }
})
// // 두 번 깜빡이는 애니메이션
// .to('.lightLeft, .lightRight', {
//     opacity: 1,
//     duration: 0.1,
//     repeat: 2,
//     yoyo: true,
//     stagger: 0.1
// })
// 최종 상태로 라이트를 완전히 켜는 애니메이션
.to('.lightLeft, .lightRight', {
    opacity: 1,
});



/***** 투명도 조절 ****** */
const moveCutUl = gsap.utils.toArray('.carSection .moveCut ul li');
gsap.to('.cut01', {
    y: -100, // 스크롤 시 y 축으로 -100px 이동하도록 설정합니다.
    scrollTrigger: {
        trigger: '.cut01', // 감지할 요소를 지정합니다.
        start: 'top 100%', // 감지가 시작될 위치를 지정합니다. 이 경우 화면 하단에서 감지가 시작됩니다.
        end: '+=100%', // 감지가 끝날 위치를 지정합니다. 이 경우 화면 하단에서부터 100%까지 감지합니다.
        scrub: true, // scrub 옵션을 사용하여 스크롤 시 부드럽게 애니메이션을 진행합니다.
        // markers: true,
        onUpdate: self => {
            // 감지 중인 요소의 현재 스크롤 위치를 구합니다.
            const progress = self.progress;
            // progress를 이용하여 y 속성값을 조정하여 스크롤 속도를 2배로 만듭니다.
            gsap.set('.cut01', {y: -100 * progress * 2});
        },

    }
});
gsap.to('.cut01 .moveCutDim', {
    scrollTrigger: {
        trigger: '.cut01 .moveCutDim', 
        start: 'top 50%', 
        end: '+=100%', 
        scrub: true, 
        // markers: true,

        onEnter: function() {
            gsap.to('.cut01 .moveCutDim', { opacity: 1 });
            
        },
        onLeaveBack: function() {
            gsap.to('.cut01 .moveCutDim', { opacity: 0 });
            
        }
    }
});



gsap.to('.cut02', {
    y: -300, // 스크롤 시 y 축으로 -100px 이동하도록 설정합니다.
    scrollTrigger: {
        trigger: '.cut02', // 감지할 요소를 지정합니다.
        start: 'top 100%', // 감지가 시작될 위치를 지정합니다. 이 경우 화면 하단에서 감지가 시작됩니다.
        end: '+=100%', // 감지가 끝날 위치를 지정합니다. 이 경우 화면 하단에서부터 100%까지 감지합니다.
        scrub: true, // scrub 옵션을 사용하여 스크롤 시 부드럽게 애니메이션을 진행합니다.
        // markers: true,
        onUpdate: self => {
            // 감지 중인 요소의 현재 스크롤 위치를 구합니다.
            const progress = self.progress;
            // progress를 이용하여 y 속성값을 조정하여 스크롤 속도를 2배로 만듭니다.
            gsap.set('.cut02', {y: -300 * progress * 2});
        },

    }
});

gsap.to('.cut02 .moveCutDim', {
    scrollTrigger: {
        trigger: '.cut02 .moveCutDim', 
        start: 'top 50%', 
        end: '+=100%', 
        scrub: true, 
        // markers: true,

        onEnter: function() {
            gsap.to('.cut02 .moveCutDim', { opacity: 1 });
            
        },
        onLeaveBack: function() {
            gsap.to('.cut02 .moveCutDim', { opacity: 0 });
            
        }
    }
});

gsap.to('.cut03', {
    y: -30, // 스크롤 시 y 축으로 -100px 이동하도록 설정합니다.
    scrollTrigger: {
        trigger: '.cut03', // 감지할 요소를 지정합니다.
        start: 'top 100%', // 감지가 시작될 위치를 지정합니다. 이 경우 화면 하단에서 감지가 시작됩니다.
        end: '+=100%', // 감지가 끝날 위치를 지정합니다. 이 경우 화면 하단에서부터 100%까지 감지합니다.
        scrub: true, // scrub 옵션을 사용하여 스크롤 시 부드럽게 애니메이션을 진행합니다.
        // markers: true,
        onUpdate: self => {
            // 감지 중인 요소의 현재 스크롤 위치를 구합니다.
            const progress = self.progress;
            // progress를 이용하여 y 속성값을 조정하여 스크롤 속도를 2배로 만듭니다.
            gsap.set('.cut03', {y: -30 * progress * 2});
        },
       
    }
});
gsap.to('.cut03 .moveCutDim', {
    scrollTrigger: {
        trigger: '.cut03 .moveCutDim', 
        start: 'top 50%', 
        end: '+=100%', 
        scrub: true, 
        // markers: true,

        onEnter: function() {
            gsap.to('.cut03 .moveCutDim', { opacity: 1 });
            
        },
        onLeaveBack: function() {
            gsap.to('.cut03 .moveCutDim', { opacity: 0 });
            
        }
    }
});
gsap.to('.cut04', {
    y: -200, // 스크롤 시 y 축으로 -100px 이동하도록 설정합니다.
    scrollTrigger: {
        trigger: '.cut04', // 감지할 요소를 지정합니다.
        start: 'top 100%', // 감지가 시작될 위치를 지정합니다. 이 경우 화면 하단에서 감지가 시작됩니다.
        end: '+=100%', // 감지가 끝날 위치를 지정합니다. 이 경우 화면 하단에서부터 100%까지 감지합니다.
        scrub: true, // scrub 옵션을 사용하여 스크롤 시 부드럽게 애니메이션을 진행합니다.
        // markers: true,
        onUpdate: self => {
            // 감지 중인 요소의 현재 스크롤 위치를 구합니다.
            const progress = self.progress;
            // progress를 이용하여 y 속성값을 조정하여 스크롤 속도를 2배로 만듭니다.
            gsap.set('.cut04', {y: -200 * progress * 2});
        },
        
    }
});
gsap.to('.cut04 .moveCutDim', {
    scrollTrigger: {
        trigger: '.cut04 .moveCutDim', 
        start: 'top 50%', 
        end: '+=100%', 
        scrub: true, 
        // markers: true,

        onEnter: function() {
            gsap.to('.cut04 .moveCutDim', { opacity: 1 });
            
        },
        onLeaveBack: function() {
            gsap.to('.cut04 .moveCutDim', { opacity: 0 });
            
        }
    }
});
gsap.to('.cut05', {
    y: -150, // 스크롤 시 y 축으로 -100px 이동하도록 설정합니다.
    scrollTrigger: {
        trigger: '.cut05', // 감지할 요소를 지정합니다.
        start: 'top 100%', // 감지가 시작될 위치를 지정합니다. 이 경우 화면 하단에서 감지가 시작됩니다.
        end: '+=100%', // 감지가 끝날 위치를 지정합니다. 이 경우 화면 하단에서부터 100%까지 감지합니다.
        scrub: true, // scrub 옵션을 사용하여 스크롤 시 부드럽게 애니메이션을 진행합니다.
        // markers: true,
        onUpdate: self => {
            // 감지 중인 요소의 현재 스크롤 위치를 구합니다.
            const progress = self.progress;
            // progress를 이용하여 y 속성값을 조정하여 스크롤 속도를 2배로 만듭니다.
            gsap.set('.cut05', {y: -150 * progress * 2});
        },
        
    }
});
gsap.to('.cut05 .moveCutDim', {
    scrollTrigger: {
        trigger: '.cut05 .moveCutDim', 
        start: 'top 50%', 
        end: '+=100%', 
        scrub: true, 
        // markers: true,

        onEnter: function() {
            gsap.to('.cut05 .moveCutDim', { opacity: 1 });
            
        },
        onLeaveBack: function() {
            gsap.to('.cut05 .moveCutDim', { opacity: 0 });
            
        }
    }
});
gsap.to('.cut06', {
    y: -200, // 스크롤 시 y 축으로 -100px 이동하도록 설정합니다.
    scrollTrigger: {
        trigger: '.cut06', // 감지할 요소를 지정합니다.
        start: 'top 100%', // 감지가 시작될 위치를 지정합니다. 이 경우 화면 하단에서 감지가 시작됩니다.
        end: '+=100%', // 감지가 끝날 위치를 지정합니다. 이 경우 화면 하단에서부터 100%까지 감지합니다.
        scrub: true, // scrub 옵션을 사용하여 스크롤 시 부드럽게 애니메이션을 진행합니다.
        // // markers: true,
        onUpdate: self => {
            // 감지 중인 요소의 현재 스크롤 위치를 구합니다.
            const progress = self.progress;
            // progress를 이용하여 y 속성값을 조정하여 스크롤 속도를 2배로 만듭니다.
            gsap.set('.cut06', {y: -200 * progress * 2});
        },
       
    }
});
gsap.to('.cut06 .moveCutDim', {
    scrollTrigger: {
        trigger: '.cut06 .moveCutDim', 
        start: 'top 50%', 
        end: '+=100%', 
        scrub: true, 
        // markers: true,

        onEnter: function() {
            gsap.to('.cut06 .moveCutDim', { opacity: 1 });
            
        },
        onLeaveBack: function() {
            gsap.to('.cut06 .moveCutDim', { opacity: 0 });
            
        }
    }
});
gsap.to('.cut07', {
    y: -100, // 스크롤 시 y 축으로 -100px 이동하도록 설정합니다.
    scrollTrigger: {
        trigger: '.cut07', // 감지할 요소를 지정합니다.
        start: 'top 100%', // 감지가 시작될 위치를 지정합니다. 이 경우 화면 하단에서 감지가 시작됩니다.
        end: '+=100%', // 감지가 끝날 위치를 지정합니다. 이 경우 화면 하단에서부터 100%까지 감지합니다.
        scrub: true, // scrub 옵션을 사용하여 스크롤 시 부드럽게 애니메이션을 진행합니다.
        // markers: true,
        onUpdate: self => {
            // 감지 중인 요소의 현재 스크롤 위치를 구합니다.
            const progress = self.progress;
            // progress를 이용하여 y 속성값을 조정하여 스크롤 속도를 2배로 만듭니다.
            gsap.set('.cut07', {y: -100 * progress * 2});
        },
        
    }
});
gsap.to('.cut07 .moveCutDim', {
    scrollTrigger: {
        trigger: '.cut07 .moveCutDim', 
        start: 'top 50%', 
        end: '+=100%', 
        scrub: true, 
        // markers: true,

        onEnter: function() {
            gsap.to('.cut07 .moveCutDim', { opacity: 1 });
            
        },
        onLeaveBack: function() {
            gsap.to('.cut07 .moveCutDim', { opacity: 0 });
            
        }
    }
});
gsap.to('.cut08', {
    y: -130, // 스크롤 시 y 축으로 -100px 이동하도록 설정합니다.
    scrollTrigger: {
        trigger: '.cut08', // 감지할 요소를 지정합니다.
        start: 'top 100%', // 감지가 시작될 위치를 지정합니다. 이 경우 화면 하단에서 감지가 시작됩니다.
        end: '+=100%', // 감지가 끝날 위치를 지정합니다. 이 경우 화면 하단에서부터 100%까지 감지합니다.
        scrub: true, // scrub 옵션을 사용하여 스크롤 시 부드럽게 애니메이션을 진행합니다.
        // markers: true,
        onUpdate: self => {
            // 감지 중인 요소의 현재 스크롤 위치를 구합니다.
            const progress = self.progress;
            // progress를 이용하여 y 속성값을 조정하여 스크롤 속도를 2배로 만듭니다.
            gsap.set('.cut08', {y: -130 * progress * 2});
        },
        
    }
});
gsap.to('.cut08 .moveCutDim', {
    scrollTrigger: {
        trigger: '.cut08 .moveCutDim', 
        start: 'top 50%', 
        end: '+=100%', 
        scrub: true, 
        // markers: true,

        onEnter: function() {
            gsap.to('.cut08 .moveCutDim', { opacity: 1 });
            
        },
        onLeaveBack: function() {
            gsap.to('.cut08 .moveCutDim', { opacity: 0 });
            
        }
    }
});
gsap.to('.cut09', {
    y: -200, // 스크롤 시 y 축으로 -100px 이동하도록 설정합니다.
    scrollTrigger: {
        trigger: '.cut09', // 감지할 요소를 지정합니다.
        start: 'top 100%', // 감지가 시작될 위치를 지정합니다. 이 경우 화면 하단에서 감지가 시작됩니다.
        end: '+=100%', // 감지가 끝날 위치를 지정합니다. 이 경우 화면 하단에서부터 100%까지 감지합니다.
        scrub: true, // scrub 옵션을 사용하여 스크롤 시 부드럽게 애니메이션을 진행합니다.
        // markers: true,
        onUpdate: self => {
            // 감지 중인 요소의 현재 스크롤 위치를 구합니다.
            const progress = self.progress;
            // progress를 이용하여 y 속성값을 조정하여 스크롤 속도를 2배로 만듭니다.
            gsap.set('.cut09', {y: -200 * progress * 2});
        },
    
    }
});
gsap.to('.cut09 .moveCutDim', {
    scrollTrigger: {
        trigger: '.cut09 .moveCutDim', 
        start: 'top 50%', 
        end: '+=100%', 
        scrub: true, 
        // markers: true,

        onEnter: function() {
            gsap.to('.cut09 .moveCutDim', { opacity: 1 });
            
        },
        onLeaveBack: function() {
            gsap.to('.cut09 .moveCutDim', { opacity: 0 });
            
        }
    }
});



var scrollTop3 = $(window).scrollTop();

gsap.to('.scrollTextMain01', {
    scrollTrigger: {
        trigger: '.scrollTextMain01',
        start: 'top 45%',
        end: '100px',
        pin: true,
        pinSpacing: false,
        // markers: true,
        onEnter: function() {
            gsap.to('.scrollTextMain01', {opacity: 1,});
        },
        onLeaveBack: function() {
            gsap.to('.scrollTextMain01', { opacity: 0 });
        },
        onLeave: function() {
            gsap.to('.scrollTextMain01', { opacity: 0 });
        },
        onEnterBack: function() {
            gsap.to('.scrollTextMain01', { opacity: 1 });
        }
    }
});


gsap.to('.scrollTextMain02', {
    scrollTrigger: {
        trigger: '.scrollTextMain02',
        start: 'top 45%',
        end: '100px',
        pin: true,
        pinSpacing: false,
        // markers: true,
        onEnter: function() {
            gsap.to('.scrollTextMain02', {opacity: 1,});
        },
        onLeaveBack: function() {
            gsap.to('.scrollTextMain02', { opacity: 0 });
        },
        onLeave: function() {
            gsap.to('.scrollTextMain02', { opacity: 0 });
        },
        onEnterBack: function() {
            gsap.to('.scrollTextMain02', { opacity: 1 });
        }
    }
});

gsap.to('.scrollTextMain03', {
    scrollTrigger: {
        trigger: '.scrollTextMain03',
        start: 'top 45%',
        end: '100px',
        pin: true,
        pinSpacing: false,
        // markers: true,
        onEnter: function() {
            gsap.to('.scrollTextMain03', {opacity: 1,});
        },
        onLeaveBack: function() {
            gsap.to('.scrollTextMain03', { opacity: 0 });
        },
        onLeave: function() {
            gsap.to('.scrollTextMain03', { opacity: 0 });
        },
        onEnterBack: function() {
            gsap.to('.scrollTextMain03', { opacity: 1 });
        }
    }
});

gsap.to('.scrollTextMain04', {
    scrollTrigger: {
        trigger: '.scrollTextMain04',
        start: 'top 45%',
        end: '100px',
        pin: true,
        pinSpacing: false,
        // markers: true,
        onEnter: function() {
            gsap.to('.scrollTextMain04', {opacity: 1,});
        },
        onLeaveBack: function() {
            gsap.to('.scrollTextMain04', { opacity: 0 });
        },
        onLeave: function() {
            gsap.to('.scrollTextMain04', { opacity: 0 });
        },
        onEnterBack: function() {
            gsap.to('.scrollTextMain04', { opacity: 1 });
        }
    }
});


// ScrollTrigger를 사용하여 각 이미지의 등장을 감지하고 처리
ScrollTrigger.create({
    
    trigger: '.video', // 감지할 요소 선택자
    pin:true,
    start: 'top 0%', // 트리거 요소가 뷰포트 상단에서 80% 위치에 도달하면 등장
    end:'2000px',
    onEnter: function() { // 트리거 요소가 화면에 진입했을 때 실행되는 함수
        // human01이 화면에 들어왔을 때의 동작을 여기에 작성
        gsap.to('.mainlogo', { duration: 2.5, scale: 0.5, ease: 'power2.out' });
    },
    onLeaveBack: function() { // 트리거 요소가 화면에서 벗어났을 때 실행되는 함수
        // human01이 화면에서 나갔을 때의 동작을 여기에 작성
        gsap.to('.mainlogo', { duration: 2.5, scale: 0, ease: 'power2.out' });
    },
   // markers: true // ScrollTrigger 디버깅을 위한 마커 활성화
});



$('.wrapper .menuslide a').click(function(e){
    e.preventDefault(); // 기본 동작 방지

    // 각 인덱스에 해당하는 스크롤 위치 배열
    var scrollPositions = [0, 9200, 19800, 28100, 50600];

    var index = $(this).parent().index(); // 클릭된 요소의 인덱스 가져오기
    var scrollPosition = scrollPositions[index]; // 해당 인덱스에 해당하는 스크롤 위치 가져오기

    // 스크롤 위치를 계산된 위치로 이동
    $('html, body').animate({
        scrollTop: scrollPosition
    }, 500);

    $('.wrapper .menuslide').toggleClass('open');
});



gsap.to([".text01", ".text02", ".text03", ".text04",".textHr01",".textHr02",".textHr03"], {
    scrollTrigger: {
        trigger: ".subIntro",
        start: "-100px",
        end: "13000px",
        scrub: 1,
        pin: true,
        //markers: true
    },
    x: function(index) {
        return index % 2 === 0 ? -8000 : 0; // 짝수는 음수, 홀수는 양수로 설정
    },
    delay: 0.2,
    ease: "power1.inOut",
    duration: 3
});


const parent = document.querySelector('.subIntro');
const child = document.querySelector('.characterInfo');

gsap.to(child, {
    x: -10500, // 왼쪽으로 이동할 거리
    scrollTrigger: {
        trigger: parent,
        start: 'top 15%', // 스크롤 감지를 시작할 위치
        end: '13000px', // 스크롤 감지를 종료할 위치
        scrub: 1, // 스크롤할 때 자연스럽게 이동하도록 설정
        //markers: true, // 디버깅을 위한 마커 표시
    }
});



// 이미지 요소를 가져옵니다.
const images = document.querySelectorAll('.characterInfo img');

// 스크롤 이벤트를 추가합니다.
window.addEventListener('scroll', function() {
    // 이미지를 순회하며 각 이미지의 중앙 위치를 계산합니다.
    images.forEach(function(image) {
        const rect = image.getBoundingClientRect();
        const imageCenterX = rect.left + rect.width / 2;
        const viewportCenterX = window.innerWidth / 2;
        
        // 이미지가 화면 중앙에 있을 때 처리합니다.
        if (Math.abs(imageCenterX - viewportCenterX) < rect.width / 2) {
            image.style.transform = 'scale(1.12)';
            image.style.filter = 'brightness(100%)';
        } else {
            image.style.transform = 'scale(1)';
            image.style.filter = 'brightness(60%)';
        }
        // 전환 효과를 설정합니다.
        image.style.transition = 'transform 0.5s ease, filter 1s ease'; // transform와 filter에 대한 부드러운 전환 효과 적용
    });
});

    
document.addEventListener("DOMContentLoaded", function() {
    // 각 div에 대한 반복문
    for (let i = 1; i <= 7; i++) {
        // 해당 div 선택
        var basicsHuman = document.querySelector('.basicsHuman0' + i);
        // 해당 이미지 선택
        var img = basicsHuman.querySelector('img');
        // 마우스 호버 이벤트 리스너 추가
        basicsHuman.addEventListener('mouseover', createMouseOverHandler(i, img));
        // 마우스 아웃 이벤트 리스너 추가
        basicsHuman.addEventListener('mouseout', createMouseOutHandler(i, img));
    }
});

// 해당 인덱스와 해당 이미지를 매개변수로 받음
// 마우스 호버 이벤트 핸들러 함수 생성
function createMouseOverHandler(index, imgElement) {
    return function() {
        // 이미지의 src 속성 변경
        imgElement.src = 'images/humanHover0' + index + '.png';
    };
}

// 마우스 아웃 이벤트 핸들러 함수 생성
function createMouseOutHandler(index, imgElement) {
    return function() {
        // 이미지의 src 속성 다시 변경
        imgElement.src = 'images/human0' + index + '.png';
    };
}


gsap.to('.topDim', {
    scrollTrigger: {
        trigger: '.top',
        start: '3500px',
        end:'3700px',
        //markers: true,
        onEnter: () => {
            // 투명에서 깜빡거리는 애니메이션 적용
            gsap.to('.topDim', { backgroundColor: 'rgba(0, 0, 0, 0.5)',display:'block',  duration: 0.1, repeat:5, yoyo: true,
            onComplete: () => {
                // 애니메이션이 끝나면 배경색을 원래대로 돌립니다.
                gsap.to('.topDim', { backgroundColor: 'rgba(0, 0, 0, 0)',display:'none', duration: 0.1 });
            } });
        },
    }
});


gsap.to('.house', {
    scrollTrigger: {
        trigger: '.house', 
        start: 'top -10%', 
        end: '5500px', 
        pin:true,
        // scrub: true, 
       // markers: true,
    }
});

$('.top .house .houseDiv').on('mouseenter',function(){
    $('.houseHover').css('display', 'block');
})
$('.top .house .houseDiv').on('mouseleave',function(){
    $('.houseHover').css('display', 'none');
})


// $('.top .house .houseDiv').on('touchstart', function(e){
//     e.preventDefault(); // 기본 터치 동작 중지
//     console.log('터치 이벤트 발동1');
//     $('.houseHover').css('display', 'block');
// });
$('.top .house img').on('touchstart', function(e){
    e.preventDefault(); // 기본 터치 동작 중지
    // console.log('터치 이벤트 발동2');
    $('.houseHover').css('display', 'block');
});
$('.top .house img').on('touchend', function(e){
    e.preventDefault(); // 기본 터치 동작 중지
    // console.log('터치 이벤트 발동3');
    $('.houseHover').css('display', 'none');
});




gsap.to('.helicopter', {
    x:'2500px',
    scrollTrigger: {
        trigger: '.helicopter', // 헬리콥터를 트리거로 설정
        start: 'top top', // 헬리콥터가 화면 맨 위에 도달할 때 시작
        end: '5000px', // 스크롤 1400px 후에 고정
        pin: true, // 고정
        //markers: true,
        scrub: true // 부드러운 애니메이션
    }
});

gsap.to('.textHelpDim', {
    x:'2500px',
    scrollTrigger: {
        trigger: '.textHelpDim', // 헬리콥터를 트리거로 설정
        start: 'top 5%', // 헬리콥터가 화면 맨 위에 도달할 때 시작
        end: '5000px', // 스크롤 1400px 후에 고정
        pin: true, // 고정
        //markers: true,
        scrub: true // 부드러운 애니메이션
    }
});
gsap.to('.textHelp p', {
    scrollTrigger: {
        trigger: '.textHelp p', // 헬리콥터를 트리거로 설정
        start: 'top 5%', // 헬리콥터가 화면 맨 위에 도달할 때 시작
        end: '5000px', // 스크롤 1400px 후에 고정
        pin: true, // 고정
        //markers: true,
        scrub: true // 부드러운 애니메이션
        
    }
});


gsap.utils.toArray('.ending .section').forEach((info, index) => {
    gsap.to(info, {
        scrollTrigger: {
            trigger: info,
            start: 'top 50%', // 문구가 화면의 60% 지점에서 나타나도록 설정
            end: '1000px', // 문구가 화면의 80% 지점까지 나타난 후 사라지도록 설정
            //markers: true, // 디버깅을 위해 markers 설정
            onEnter: () => {
                gsap.to(info, { opacity: 1, duration: 0.5 }); // 문구가 나타나는 애니메이션
            },
            onLeaveBack: () => {
                gsap.to(info, { opacity: 0, duration: 0.5 }); // 문구가 사라지는 애니메이션
            }
        }
    });
});

//***** PC footer 까마귀 애니메이션 부분 *****//

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    // 요소의 인덱스와 이동 위치 설정
    var positions = [
        { index: 1, x: '360%', y: '-230%', start: 50500},
        { index: 2, x: '-150%', y: '-50%', start: 50500},
        { index: 3, x: '-500%', y: '-500%', start: 50900},
        { index: 4, x: '150%', y: '-100%', start: 51000},
        { index: 5, x: '-50%', y: '0', start: 51600},
        { index: 6, x: '250%', y: '50%', start: 52450},
        { index: 7, x: '30%', y: '80%', start: 53500},
    ];
    
    // 각 요소에 대해 위치 이동 처리
    positions.forEach(function(pos) {
        var endingRaven = $('.endingRaven img:nth-of-type(' + pos.index + ')');
        
        // 스크롤 위치가 이동 위치를 넘어설 때 위치 이동
        if (scrollTop >= pos.start) {
            endingRaven.css({
                'transform': 'translate(' + pos.x + ', ' + pos.y + ')'
            });
        } else {
            // 스크롤 위치가 이동 위치를 넘어서지 않을 때 초기 위치로 되돌림
            endingRaven.css({
                'transform': 'translate(0,0)'
            });
        }

    });
});

//***** Mobile footer 까마귀 애니메이션 부분 *****//
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    // 요소의 인덱스와 이동 위치 설정
    var positions = [
        { index: 1, x: '200%', y: '-230%', start: 49700},
        { index: 2, x: '-150%', y: '-50%', start: 49700},
        { index: 3, x: '-250%', y: '-250%', start: 50000},
        { index: 4, x: '130%', y: '-100%', start: 50300},
        { index: 5, x: '-50%', y: '50%', start: 50500},
        { index: 6, x: '100%', y: '50%', start: 50850},
        { index: 7, x: '50%', y: '70%', start: 51200},
        { index: 8, x: '-60%', y: '150%', start: 52400},
        { index: 9, x: '50%', y: '-50%', start: 52600},
    ];
    
    // 각 요소에 대해 위치 이동 처리
    positions.forEach(function(pos) {
        var endingRaven = $('.endingRavenMobile img:nth-of-type(' + pos.index + ')');
        
        // 스크롤 위치가 이동 위치를 넘어설 때 위치 이동
        if (scrollTop >= pos.start) {
            endingRaven.css({
                'transform': 'translate(' + pos.x + ', ' + pos.y + ')'
            });
        } else {
            // 스크롤 위치가 이동 위치를 넘어서지 않을 때 초기 위치로 되돌림
            endingRaven.css({
                'transform': 'translate(0,0)'
            });
        }

    });
});



$('.menu').click(function(){
    $('.menuslide').toggleClass('open');
});
$('.close').click(function(){
    $('.wrapper .menuslide').toggleClass('open');
});

}

gsapPlugIn();


function getState() {
    const width = window.innerWidth;
    return width < 769 ? 1 : 0; // 모바일이면 1, PC이면 0 반환
  }

  const landingState = getState();
  // 사이즈 변할때 모바일,PC반응하기
  window.addEventListener('resize', function() {
    const currentState = getState();
    // console.log(landingState !== currentState)
    if (landingState !== currentState) {
      console.log("상태 변경, 500ms 후 새로고침");
      setTimeout(() => {
        window.location.reload();
      }, 500); // 500ms 딜레이 후 새로고침
    }
  });

  window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0); // 페이지를 맨 위로 스크롤
});
