"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";

export default function NoticeBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentNotice, setCurrentNotice] = useState(0);

  const notices = [
    "Notices for Students",
    "Admission Open for All the department",
    "Notices for Students",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotice((prev) => (prev + 1) % notices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <Link href="/students">
      <div className="relative bg-linear-to-r from-red-900 via-red-800 to-red-900 py-2 text-white backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <p className="animate-pulse text-sm sm:text-base">
                {notices[currentNotice]}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              className="text-white transition-colors hover:text-gray-200"
            >
              <LuX className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
