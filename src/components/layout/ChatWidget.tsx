"use client";

import { useState } from "react";
import { LuMessageCircle, LuX } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat FAB Button */}
      <button
        id="chat-widget-toggle"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <span
          className={`absolute transition-all duration-300 ${isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
        >
          <IoChatbubblesOutline className="size-6" />
        </span>
        <span
          className={`absolute transition-all duration-300 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
        >
          <LuX className="size-6" />
        </span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 animate-fade-in overflow-hidden rounded-xl border border-border bg-background shadow-2xl"
          style={{ width: "min(400px, calc(100vw - 3rem))", height: "min(550px, calc(100vh - 10rem))" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3">
            <div className="flex items-center gap-2">
              <LuMessageCircle className="size-5 text-primary-foreground" />
              <span className="font-semibold text-primary-foreground text-sm">
                Chat with us
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground cursor-pointer"
              aria-label="Close chat"
            >
              <LuX className="size-4" />
            </button>
          </div>

          {/* Iframe */}
          <iframe
            src="http://iiekly.com:3939"
            title="IIE Chat"
            className="size-full border-none"
            style={{ height: "calc(100% - 48px)" }}
            allow="microphone; camera"
          />
        </div>
      )}
    </>
  );
}
