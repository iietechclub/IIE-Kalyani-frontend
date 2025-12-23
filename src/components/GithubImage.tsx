"use client";

import Image, { type ImageProps } from "next/image";

const githubURL =
  "https://raw.githubusercontent.com/iietechclub/college_images/main/";

type GithubImageProps = prettify<Omits<ImageProps, "src"> & { src: string }>;
const GithubImage = (props: GithubImageProps) => (
  <Image {...props} src={`${githubURL}${props.src}`} />
);

export default GithubImage;
