import { notFound } from "next/navigation";
import { fetchDepartmentData } from "@/dal/department";

export default async function DepartmentPage() {
  //   const department = await fetchDepartmentData(
  //     "computer-science-and-engineering",
  //   );
  return notFound();
}
