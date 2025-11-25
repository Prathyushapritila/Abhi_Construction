"use client";

export function Watermark() {
  return (
    <>
      {/* Light mode watermark */}
      <div
        className="watermark-light dark:hidden"
        aria-hidden="true"
      />
      {/* Dark mode watermark */}
      <div
        className="watermark-dark hidden dark:block"
        aria-hidden="true"
      />
    </>
  );
}

