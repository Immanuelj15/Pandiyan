import { useEffect, useState, useRef } from 'react';

// Parse numeric parts to determine initial count (1 for positive numbers, 0 otherwise)
const getInitialCount = (val) => {
  const match = val.match(/(\d+(?:\.\d+)?)/);
  if (!match) return val;
  const targetVal = parseFloat(match[0]);
  const prefix = val.substring(0, match.index);
  const suffix = val.substring(match.index + match[0].length);
  const startNum = targetVal > 1 ? 1 : 0;
  return `${prefix}${startNum}${suffix}`;
};

export default function Counter({ value, duration = 1030, triggerOnce = false }) {
  const [count, setCount] = useState(() => getInitialCount(value));
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setHasStarted(false);
          setCount(getInitialCount(value));
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [triggerOnce, value]);

  useEffect(() => {
    if (!hasStarted) return;

    const match = value.match(/(\d+(?:\.\d+)?)/);
    if (!match) {
      window.requestAnimationFrame(() => setCount(value));
      return;
    }

    const targetVal = parseFloat(match[0]);
    const prefix = value.substring(0, match.index);
    const suffix = value.substring(match.index + match[0].length);
    const startNum = targetVal > 1 ? 1 : 0;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const timeProgress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutQuad easing: smooth deceleration
      const progress = 1 - (1 - timeProgress) * (1 - timeProgress);
      
      const currentNumber = startNum + progress * (targetVal - startNum);
      
      // Keep float formatting if target has dot, otherwise round down
      const isFloat = match[0].includes('.');
      const formattedNumber = isFloat 
        ? currentNumber.toFixed(1) 
        : Math.floor(currentNumber).toString();

      setCount(`${prefix}${formattedNumber}${suffix}`);

      if (timeProgress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return <span ref={ref}>{count}</span>;
}
