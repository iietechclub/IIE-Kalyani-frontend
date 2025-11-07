import React from "react";

type Props = { data: GlobalPagesData };

export default function Navbar({ data }: Props) {
  return <div>{data && <div>{data.contactNo}</div>}</div>;
}
