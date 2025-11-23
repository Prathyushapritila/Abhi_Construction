"use client";

export function Watermark() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] flex items-center justify-center watermark-container"
      aria-hidden="true"
    >
      <div className="watermark-logo" />
    </div>
  );
}

