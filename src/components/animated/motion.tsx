"use client";
import type { HTMLMotionProps, SVGMotionProps } from "motion/react";
import { motion } from "motion/react";

export const MotionArticle = ({
  children,
  ...props
}: HTMLMotionProps<"article">) => (
  <motion.article {...props}>{children}</motion.article>
);

export const MotionDiv = ({ children, ...props }: HTMLMotionProps<"div">) => (
  <motion.div {...props}>{children}</motion.div>
);

export const MotionSpan = ({ children, ...props }: HTMLMotionProps<"span">) => (
  <motion.span {...props}>{children}</motion.span>
);

export const MotionH3 = ({ children, ...props }: HTMLMotionProps<"h3">) => (
  <motion.h3 {...props}>{children}</motion.h3>
);

export const MotionSection = ({
  children,
  ...props
}: HTMLMotionProps<"section">) => (
  <motion.section {...props}>{children}</motion.section>
);

export const MotionButton = ({
  children,
  ...props
}: HTMLMotionProps<"button">) => (
  <motion.button {...props}>{children}</motion.button>
);

export const MotionLi = ({ children, ...props }: HTMLMotionProps<"li">) => (
  <motion.li {...props}>{children}</motion.li>
);

export const MotionA = ({ children, ...props }: HTMLMotionProps<"a">) => (
  <motion.a {...props}>{children}</motion.a>
);

export const MotionSvg = ({
  children,
  ...props
}: SVGMotionProps<SVGSVGElement>) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: not needed
  <motion.svg {...props}>{children}</motion.svg>
);
