"use client";

import Image, { type ImageProps } from "next/image";
import { env } from "@/lib/env";

type BackendImageProps = prettify<Omits<ImageProps, "src"> & { src: string }>;
const BackendImage = (props: BackendImageProps) => (
  <Image {...props} src={`${env.NEXT_PUBLIC_BACKEND_URL}${props.src}`} />
);

export default BackendImage;
