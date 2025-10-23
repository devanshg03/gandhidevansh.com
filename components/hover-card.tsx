"use client";

import React from "react";
import { animate, utils } from "animejs";

type HoverCardProps = {
  href: string;
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  openDelayMs?: number;
  closeDelayMs?: number;
};

export default function HoverCard({
  href,
  children,
  content,
  className,
  openDelayMs = 60,
  closeDelayMs = 120,
}: HoverCardProps): React.ReactElement {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLSpanElement | null>(null);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const openTimer = React.useRef<number | undefined>(undefined);
  const closeTimer = React.useRef<number | undefined>(undefined);

  // Animate show/hide
  React.useEffect(() => {
    const panelEl = panelRef.current;
    if (!panelEl) return;

    if (isOpen) {
      utils.remove(panelEl);
      animate(panelEl, {
        opacity: [0, 1],
        translateY: [6, 0],
        scale: [0.98, 1],
        duration: 200,
        ease: "out(2)",
      });
    } else {
      utils.remove(panelEl);
      animate(panelEl, {
        opacity: [1, 0],
        translateY: [0, 6],
        scale: [1, 0.98],
        duration: 160,
        ease: "in(2)",
      });
    }
  }, [isOpen]);

  const open = React.useCallback(() => {
    window.clearTimeout(closeTimer.current);
    openTimer.current = window.setTimeout(() => setIsOpen(true), openDelayMs);
  }, [openDelayMs]);

  const close = React.useCallback(() => {
    window.clearTimeout(openTimer.current);
    closeTimer.current = window.setTimeout(
      () => setIsOpen(false),
      closeDelayMs
    );
  }, [closeDelayMs]);

  const immediateClose = React.useCallback(() => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
    setIsOpen(false);
  }, []);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") immediateClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [immediateClose]);

  return (
    <span
      ref={containerRef}
      className={`relative inline-flex ${className ?? ""}`}
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={close}
      onTouchStart={open}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center no-underline"
      >
        {children}
      </a>

      <div
        ref={panelRef}
        // Keep the element in the DOM for smooth out animations; control pointer events by state
        className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 rounded-xl border border-black/10 bg-white p-3 text-sm text-black shadow-xl ring-1 ring-black/5"
        style={{ pointerEvents: isOpen ? "auto" : "none", opacity: 0 }}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        {/* Arrow */}
        <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 rotate-45 rounded-sm border border-black/10 bg-white p-1 ring-1 ring-black/5" />

        {content}
      </div>
    </span>
  );
}
