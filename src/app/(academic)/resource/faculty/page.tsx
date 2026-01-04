import { fetchOurFacultyPageData } from "@/dal/our-faculty";
import FacultyClient from "./client";

export default async function Faculty() {
  const { departments } = await fetchOurFacultyPageData();
  return <FacultyClient departments={departments} />;
}
