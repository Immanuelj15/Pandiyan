import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  triggerOnce = false
}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let yOffset = 0;
    let xOffset = 0;
    let scaleStart = 1;

    switch (animation) {
      case 'fade-up':
        yOffset = 50;
        break;
      case 'fade-down':
        yOffset = -50;
        break;
      case 'fade-left':
        xOffset = 50;
        break;
      case 'fade-right':
        xOffset = -50;
        break;
      case 'scale-up':
        scaleStart = 0.9;
        break;
      case 'zoom-in':
        scaleStart = 0.75;
        break;
      default:
        break;
    }

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: yOffset,
        x: xOffset,
        scale: scaleStart,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: duration,
        delay: delay / 1000,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top ${100 - threshold * 100}%`,
          once: triggerOnce,
          toggleActions: triggerOnce ? 'play none none none' : 'play reset play reset',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
