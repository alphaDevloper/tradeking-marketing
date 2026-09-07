// src/hooks/useCountUp.ts
// Animates a number from 0 → target on mount. Returns the current display
// value. Respects prefers-reduced-motion (snaps to target immediately).

import { useEffect, useRef, useState } from 'react';

interface CountUpOptions {
  /** Final value to count up to. */
  target: number;
  /** Animation duration in ms. Default: 1600. */
  duration?: number;
  /** Delay before starting, in ms. Default: 0. */
  delay?: number;
  /** Decimal places to round to. Default: 0. */
  decimals?: number;
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function useCountUp({
  target,
  duration = 1600,
  delay = 0,
  decimals = 0,
}: CountUpOptions): string {
  const [value, setValue] = useState<number>(prefersReducedMotion() ? target : 0);
  const rafIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // Re-check on mount in case media query changed.
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const tick = (now: number) => {
      if (startTimeRef.current === null) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setValue(progress < 1 ? current : target);

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(tick);
      }
    };

    timeoutId = setTimeout(() => {
      rafIdRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
      startTimeRef.current = null;
    };
  }, [target, duration, delay]);

  // Format with thousand separators when decimals is 0 (e.g. 200),
  // otherwise round to the requested decimals (e.g. 5.0, 100.0).
  // While the animation is still running we drop trailing zeroes so the
  // ticker reads as "0, 1, 2, ..." instead of "0.0, 1.0, 2.0, ...". Once
  // the animation lands on the target value we restore the requested
  // decimals so the final readout keeps its trailing ".0".
  const isComplete = value >= target;
  const factor2 = Math.pow(10, decimals);
  const rounded = Math.round(value * factor2) / factor2;
  const display =
    decimals > 0 && !isComplete
      ? Math.round(rounded).toString()
      : decimals > 0
        ? rounded.toFixed(decimals)
        : Math.round(rounded).toString();

  return display;
}