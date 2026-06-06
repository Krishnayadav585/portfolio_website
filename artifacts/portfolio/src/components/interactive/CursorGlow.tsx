import { useEffect, useRef } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnterInteractive = () => {
      if (ringRef.current) ringRef.current.classList.add("cursor-ring-active");
      if (dotRef.current) dotRef.current.classList.add("cursor-dot-active");
    };

    const onLeaveInteractive = () => {
      if (ringRef.current) ringRef.current.classList.remove("cursor-ring-active");
      if (dotRef.current) dotRef.current.classList.remove("cursor-dot-active");
    };

    const interactiveEls = document.querySelectorAll("a, button, input, [data-testid]");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        data-testid="cursor-dot"
        className="cursor-dot fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      />
      {/* Ring — lags behind for trailing effect */}
      <div
        ref={ringRef}
        data-testid="cursor-ring"
        className="cursor-ring fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/60 pointer-events-none z-[9998]"
        style={{
          willChange: "transform",
          boxShadow: "0 0 12px rgba(255,0,48,0.25), inset 0 0 12px rgba(255,0,48,0.05)",
        }}
      />
    </>
  );
}
