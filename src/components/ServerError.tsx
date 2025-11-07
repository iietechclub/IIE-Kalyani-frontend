/** biome-ignore-all lint/a11y/useButtonType: not needed */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: not needed */
"use client";

export default function ServerError() {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-slate-50 px-4 py-16 text-slate-900 transition-colors sm:py-24 dark:bg-slate-900 dark:text-slate-100">
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      >
        <div className="-top-24 -left-24 absolute h-80 w-80 animate-float rounded-full bg-red-500/20 blur-3xl"></div>
        <div
          className="-bottom-28 -right-24 absolute h-96 w-96 animate-float rounded-full bg-red-600/20 blur-3xl"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-red-200/10 via-transparent to-transparent"></div>
      </div>

      {/* Main content */}
      <section className="relative z-10 w-full max-w-xl animate-fade-in">
        <div className="rounded-2xl border border-red-200/40 bg-white/70 p-8 shadow-2xl backdrop-blur-xl transition-colors sm:p-12 dark:border-red-300/20 dark:bg-slate-800/40">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 ring-1 ring-red-300/40 dark:bg-red-900/40 dark:ring-red-700/30">
            {/* Exclamation icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-7 w-7 text-red-600 dark:text-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          <h1 className="text-center font-semibold text-3xl tracking-tight sm:text-4xl">
            Something went wrong!
          </h1>
          <p className="mt-3 text-center text-base text-slate-600 dark:text-slate-300">
            Try again later
          </p>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-8 h-6 w-2/3 rounded-full bg-gradient-to-r from-red-500/20 via-red-300/10 to-red-600/20 blur-xl"
        ></div>
      </section>
    </div>
  );
}
