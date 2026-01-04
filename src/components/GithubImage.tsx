"use client";

import Image, { type ImageProps } from "next/image";
import { urlFromGithub } from "@/lib/utils";

type GithubImageProps = prettify<Omits<ImageProps, "src"> & { src: string }>;
const GithubImage = (props: GithubImageProps) => (
  <Image {...props} src={urlFromGithub(props.src)} />
);

export default GithubImage;
