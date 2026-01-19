import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { env } from "./env";

const githubURL =
  "https://raw.githubusercontent.com/iietechclub/college_images/main/";
const backendURL = env.NEXT_PUBLIC_BACKEND_URL;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const urlFromGithub = (path: string) => {
  return `${githubURL}${path}`;
};

export const urlFromBackend = (path: string) => {
  return `${backendURL}${path}`;
};
