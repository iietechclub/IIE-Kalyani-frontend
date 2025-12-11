import type { ReactNode } from "react";
import { MotionDiv, MotionSpan } from "./motion";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <MotionDiv
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: StaggerContainerProps) {
  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function StaggerItem({
  children,
  direction = "up",
  className = "",
}: StaggerItemProps) {
  const directionOffset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <MotionDiv
      variants={{
        hidden: {
          opacity: 0,
          ...directionOffset[direction],
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

interface ScaleRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleReveal({
  children,
  delay = 0,
  className = "",
}: ScaleRevealProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({
  from,
  to,
  duration = 2,
  suffix = "",
  className = "",
}: CounterProps) {
  return (
    <MotionSpan
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <MotionSpan
        initial={{ values: from }}
        whileInView={{ values: to }}
        viewport={{ once: true }}
        transition={{ duration, ease: "easeOut" }}
        // biome-ignore lint/suspicious/noExplicitAny: needed
        onUpdate={(latest: any) => {
          const element = document.getElementById(`counter-${to}`);
          if (element) {
            element.textContent = Math.round(latest.value) + suffix;
          }
        }}
      >
        <span id={`counter-${to}`}>
          {from}
          {suffix}
        </span>
      </MotionSpan>
    </MotionSpan>
  );
}
