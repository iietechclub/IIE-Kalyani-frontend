"use client";
import type { HTMLMotionProps, SVGMotionProps } from "motion/react";
import { motion } from "motion/react";

export const MotionDiv = ({ children, ...props }: HTMLMotionProps<"div">) => (
  <motion.div {...props}>{children}</motion.div>
);

export const MotionSvg = ({
  children,
  ...props
}: SVGMotionProps<SVGSVGElement>) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: not needed
  <motion.svg {...props}>{children}</motion.svg>
);
