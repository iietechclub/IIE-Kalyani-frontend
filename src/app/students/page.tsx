import EventScheduleNotices from "@/components/landing/notice-section";
import { fetchStudentsSectionPageData } from "@/dal/students-section";

export default async function StudentsPage() {
  const data = await fetchStudentsSectionPageData();
  return (
    <main className="container mx-auto sm:px-6">
      <EventScheduleNotices {...data} />
    </main>
  );
}
