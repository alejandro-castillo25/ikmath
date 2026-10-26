import { useState, useEffect, useRef } from "react";

export function useInView() {
  const ref = useRef<Element>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; 

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (currentRef) observer.unobserve(currentRef);
      }
    });

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return [ref, isInView] as const; 
}
