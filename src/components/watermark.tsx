"use client";

export function Watermark() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] flex items-center justify-center"
      aria-hidden="true"
    >
      <div
        className="watermark-logo"
        style={{
          width: 'clamp(300px, 50vw, 600px)',
          height: 'clamp(300px, 50vw, 600px)',
          backgroundImage: "url('/AbhiPng-1.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'transparent',
          opacity: 0.25,
          filter: 'brightness(1.1)',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
}

