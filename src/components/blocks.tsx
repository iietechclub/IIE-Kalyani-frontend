"use client";
import type { BlocksRenderer } from "@strapi/blocks-react-renderer";

type BlocksComponents = React.ComponentProps<typeof BlocksRenderer>["blocks"];
export const blocks: BlocksComponents = {
  list: ({ children, format }) => {
    if (format === "ordered") {
      return <ol className="ml-6 list-decimal space-y-2">{children}</ol>;
    }
    return (
      <ul className="ml-6 list-disc space-y-2 marker:text-rose-600">
        {children}
      </ul>
    );
  },
  "list-item": ({ children }) => <li className="mb-2">{children}</li>,
};
