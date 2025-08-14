import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(10px)";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            if (!mq.matches) el.classList.add("animate-enter");
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
