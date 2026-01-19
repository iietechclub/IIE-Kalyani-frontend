import { fetchProjectBankPageData } from "@/dal/project-bank";
import ProjectBankClient from "./client";

export default async function ProjectBank() {
  const { projects } = await fetchProjectBankPageData();
  return <ProjectBankClient projects={projects} />;
}
