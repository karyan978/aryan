import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (animationFunction, dependencies = []) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animation = animationFunction(element);

    return () => {
      if (animation && typeof animation.kill === 'function') {
        animation.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, dependencies);

  return elementRef;
};

export const useFadeInUp = (delay = 0, duration = 0.8) => {
  return useGSAP((element) => {
    gsap.fromTo(element, 
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};

export const useSlideInLeft = (delay = 0, duration = 0.8) => {
  return useGSAP((element) => {
    gsap.fromTo(element, 
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};

export const useSlideInRight = (delay = 0, duration = 0.8) => {
  return useGSAP((element) => {
    gsap.fromTo(element, 
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};

export const useStaggerAnimation = (selector = ".stagger-item", delay = 0.1) => {
  return useGSAP((element) => {
    const items = element.querySelectorAll(selector);
    gsap.fromTo(items, 
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};

export const useCountUp = (endValue, duration = 2, startValue = 0) => {
  return useGSAP((element) => {
    const obj = { value: startValue };
    gsap.to(obj, {
      value: endValue,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = Math.floor(obj.value);
      },
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });
};

export default useGSAP;