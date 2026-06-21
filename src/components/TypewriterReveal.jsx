import { useEffect, useRef, useState } from 'react';

export default function TypewriterReveal({ 
  text, 
  mode = 'word', // 'char' or 'word'
  className = '', 
  delayStart = 0,
  speed = 20, // ms per item
  triggerOnce = false
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(entry.target);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggerOnce]);

  if (typeof text !== 'string') return <div className={className}>{text}</div>;

  const lines = text.split('\n');
  let globalIndex = 0;

  return (
    <div ref={ref} className={className}>
      {lines.map((line, lineIndex) => {
        // Keep empty lines as spacers
        if (line === '') {
          return <div key={lineIndex} className="h-4" />;
        }

        const items = mode === 'char' ? line.split('') : line.split(' ');
        
        return (
          <div key={lineIndex} className="inline-block w-full"> 
            {items.map((item, itemIndex) => {
              const currentIndex = globalIndex++;
              // For char mode, replace space with non-breaking space if inline-block, 
              // but actually we can just render the char and let css handle it if we use pre-wrap.
              // To ensure inline-blocks wrap correctly, we can use item inside span, and trailing space.
              
              if (mode === 'word') {
                return (
                  <span key={itemIndex} className="inline-block whitespace-pre">
                    <span
                      className={`transition-all duration-500 ease-out inline-block ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                      }`}
                      style={{ transitionDelay: `${delayStart + currentIndex * speed}ms` }}
                    >
                      {item}
                    </span>
                    {' '}
                  </span>
                );
              } else {
                // char mode
                const isSpace = item === ' ';
                return (
                  <span
                    key={itemIndex}
                    className={`transition-all duration-300 ease-out inline-block ${
                      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
                    }`}
                    style={{ 
                      transitionDelay: `${delayStart + currentIndex * speed}ms`,
                      width: isSpace ? '0.25em' : 'auto'
                    }}
                  >
                    {isSpace ? '\u00A0' : item}
                  </span>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
}
