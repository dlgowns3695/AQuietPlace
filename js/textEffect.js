function splitTextToSpans(element, type) {
    const text = element.textContent;
    element.innerHTML = text.split(type === 'char' ? '' : ' ').map(letter => `<span class="${type}">${letter}</span>`).join(type === 'char' ? '' : ' ');
  }

  // 1. Fade Up Split with Fade Out to Top
  const fadeUpSplit = document.querySelector("#split1");
  splitTextToSpans(fadeUpSplit, 'char');
  gsap.fromTo("#split1 .char", {
    opacity: 0,
    y: 50
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.05,
    ease: "power2.out",
    onComplete: () => {
      // 애니메이션이 완료된 후에 Fade Out 애니메이션 실행
      gsap.to("#split1 .char", {
        opacity: 0,
        y: -50,
        duration: 1,
        stagger: 0.05,
        ease: "power2.in",
        delay: 1 // Fade Out 애니메이션 시작 전 대기 시간
      });
    }
  });

  // 5. Fade Out with Rotation and Fade Out to Top
  const fadeRotateSplit = document.querySelector("#split5");
  splitTextToSpans(fadeRotateSplit, 'char');
  gsap.fromTo("#split5 .char", {
    opacity: 0,
    y: 50,
    rotation: -90
  }, {
    opacity: 1,
    y: 0,
    rotation: 0,
    duration: 1,
    stagger: 0.05,
    ease: "power2.out",
    onComplete: () => {
      // 애니메이션이 완료된 후에 Fade Out 애니메이션 실행
      gsap.to("#split5 .char", {
        opacity: 0,
        y: -50,
        rotation: 90,
        duration: 1,
        stagger: 0.05,
        ease: "power2.in",
        delay: 1 // Fade Out 애니메이션 시작 전 대기 시간
      });
    }
  });