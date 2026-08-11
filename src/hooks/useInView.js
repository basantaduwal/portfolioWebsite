import { useEffect, useRef, useState } from 'react';

export function useInView(param1 = {}, param2 = {}) {
  const isRefPassed = param1 && typeof param1 === 'object' && 'current' in param1;
  const targetRef = isRefPassed ? param1 : null;
  const options = isRefPassed ? param2 : param1;

  const internalRef = useRef(null);
  const refToUse = targetRef || internalRef;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = refToUse.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [refToUse, options.threshold, options.rootMargin]);

  if (isRefPassed) {
    return isInView;
  }

  return [internalRef, isInView];
}

export default useInView;
