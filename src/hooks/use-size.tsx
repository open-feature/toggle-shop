"use client";

import { useEffect, useState } from "react";

type Size = "sm" | "md" | "lg" | "xl"; 

const computeSize = (): Size => {
  return globalThis.innerWidth < 768 ? 'sm' : globalThis.innerWidth < 992 ? 'md' : globalThis.innerWidth < 1200 ? 'lg' : 'xl';
}

export function useSize() {

  const [size, setSize] = useState(computeSize());
  const resizeListener = () => {
    const newSize = computeSize();
    setSize(newSize);
  };

  useEffect(() => {
    globalThis.addEventListener('resize', resizeListener);
    return () => {
      globalThis.removeEventListener('resize', resizeListener)
    };
  }, []);

  return size;

}
