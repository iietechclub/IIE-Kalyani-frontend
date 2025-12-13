"use client";
import { MotionDiv, MotionSvg } from "./animated/motion";

const WorkInProgress: React.FC = () => (
  <MotionDiv
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="flex min-h-[60vh] flex-col items-center justify-center text-center"
  >
    {/* Gears Animation */}
    <div className="relative mb-8 flex items-center justify-center">
      {/* Large Gear */}
      <MotionSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-28 w-28 text-gray-300"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        <path
          fill="currentColor"
          d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 0 00.12-.65l-2-3.46a.5.5 0 00-.6-.22l-2.49 1a7.007 7.007 0 00-1.69-.98l-.38-2.65A.5.5 0 0014 1h-4a.5.5 0 00-.5.43l-.38 2.65c-.6.25-1.17.57-1.69.98l-2.49-1a.5.5 0 00-.6.22l-2 3.46a.5.5 0 00.12.65L4.57 10c-.05.32-.07.66-.07 1s.02.68.07 1L2.46 14.65a.5.5 0 00-.12.65l2 3.46c.14.24.44.34.7.22l2.49-1c.52.41 1.09.73 1.69.98l.38 2.65c.05.26.27.43.5.43h4c.23 0 .45-.17.5-.43l.38-2.65c.6-.25 1.17-.57 1.69-.98l2.49 1c.26.11.56.02.7-.22l2-3.46a.5.5 0 00-.12-.65L19.43 14c.05-.32.07-.66.07-1s-.03-.66-.07-.98zM12 15.5A3.5 3.5 0 1012 8a3.5 3.5 0 000 7.5z"
        />
      </MotionSvg>

      {/* Small Gear */}
      <MotionSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="-bottom-5 absolute right-[-35px] h-14 w-14 text-red-600"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        <path
          fill="currentColor"
          d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 0 00.12-.65l-2-3.46a.5.5 0 00-.6-.22l-2.49 1a7.007 7.007 0 00-1.69-.98l-.38-2.65A.5.5 0 0014 1h-4a.5.5 0 00-.5.43l-.38 2.65c-.6.25-1.17.57-1.69.98l-2.49-1a.5.5 0 00-.6.22l-2 3.46a.5.5 0 00.12.65L4.57 10c-.05.32-.07.66-.07 1s.02.68.07 1L2.46 14.65a.5.5 0 00-.12.65l2 3.46c.14.24.44.34.7.22l2.49-1c.52.41 1.09.73 1.69.98l.38 2.65c.05.26.27.43.5.43h4c.23 0 .45-.17.5-.43l.38-2.65c.6-.25 1.17-.57 1.69-.98l2.49 1c.26.11.56.02.7-.22l2-3.46a.5.5 0 00-.12-.65L19.43 14c.05-.32.07-.66.07-1s-.03-.66-.07-.98zM12 15.5A3.5 3.5 0 1012 8a3.5 3.5 0 000 7.5z"
        />
      </MotionSvg>
    </div>

    <h2 className="mb-2 font-semibold text-2xl">Work in Progress</h2>
    <p className="mx-auto max-w-md text-muted-foreground text-sm">
      The library’s digital resources section is currently under construction.
      We’re updating our catalog and integrating new e-learning tools.
    </p>

    <div className="mt-6 flex justify-center gap-3">
      <a
        href="/"
        className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Go Home
      </a>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="rounded-md border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50"
      >
        Back to Top
      </button>
    </div>
  </MotionDiv>
);

export default WorkInProgress;
