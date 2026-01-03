"use client";

import Image, { type ImageProps } from "next/image";
import { urlFromBackend } from "@/lib/utils";

type BackendImageProps = prettify<Omits<ImageProps, "src"> & { src: string }>;
const BackendImage = (props: BackendImageProps) => (
  <Image {...props} src={urlFromBackend(props.src)} />
);

export default BackendImage;
