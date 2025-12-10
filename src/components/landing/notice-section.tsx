import { useState } from "react";
import {
  LuArrowRight,
  LuCalendar,
  LuClock,
  LuDownload,
  LuMapPin,
} from "react-icons/lu";
// import { ImageWithFallback } from "figma/ImageWithFallback";
// import AllEventsPage from "@/pages/AllEventsPage";
// import AllNoticesPage from "@/pages/AllNoticesPage";
import { MotionA, MotionButton, MotionDiv, MotionLi } from "../animated/motion";

const EventScheduleNotices = () => {
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [showAllNotices, setShowAllNotices] = useState(false);
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Tech Fest 2025",
      date: "November 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Main Campus Auditorium",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3NjIwMjE2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      date: "November 22, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Computer Science Lab - Building 3",
      image:
        "https://images.unsplash.com/photo-1545886082-e66c6b9e011a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MjA1NjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "Industry Expert Panel Discussion",
      date: "November 28, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Seminar Hall A, Administrative Block",
      image:
        "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lbCUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzYyMDU2MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      title: "Robotics Competition Finals",
      date: "December 5, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Sports Complex Arena",
      image:
        "https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc2MjA1NjI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const importantNotices = [
    {
      id: 1,
      title: "Notice for Admission Through Decentralized Counselling",
      date: "Posted: November 1, 2025",
      pdfLink: "#",
    },
    {
      id: 2,
      title: "Semester Examination Schedule - Winter 2025",
      date: "Posted: October 30, 2025",
      pdfLink: "#",
    },
    {
      id: 3,
      title: "Holiday Notice - Diwali Break Announcement",
      date: "Posted: October 28, 2025",
      pdfLink: "#",
    },
    {
      id: 4,
      title: "Scholarship Application Deadline Extended to November 15",
      date: "Posted: October 25, 2025",
      pdfLink: "#",
    },
    {
      id: 5,
      title: "New Laboratory Equipment Installation Schedule",
      date: "Posted: October 22, 2025",
      pdfLink: "#",
    },
    {
      id: 6,
      title: "Campus Placement Drive - Registration Open",
      date: "Posted: October 20, 2025",
      pdfLink: "#",
    },
    {
      id: 7,
      title: "Library Extension Hours During Exam Period",
      date: "Posted: October 18, 2025",
      pdfLink: "#",
    },
  ];

  // Show All Events Page
  // if (showAllEvents) {
  //   return <AllEventsPage onClose={() => setShowAllEvents(false)} />;
  // }

  // Show All Notices Page
  // if (showAllNotices) {
  //   return <AllNoticesPage onClose={() => setShowAllNotices(false)} />;
  // }

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-gray-50 to-white py-16 md:py-24">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#E63946] blur-3xl"></div>
        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-[#FFB627] blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <MotionDiv
          className="mb-10 text-center md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-3 text-[#E63946] md:mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
          >
            Event Schedule &{" "}
            <span className="text-[#FF6B35]">Important Notices</span>
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base text-gray-600 md:text-xl">
            Stay updated with upcoming events and important announcements
          </p>
        </MotionDiv>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Upcoming Events */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Column Header */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-gray-900">Upcoming Events</h3>
              <MotionButton
                onClick={() => setShowAllEvents(true)}
                className="group flex items-center gap-1.5 text-[#E63946] transition-colors hover:text-[#FF6B35]"
                whileHover={{ x: 3 }}
              >
                <span className="text-sm">View All</span>
                <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MotionButton>
            </div>

            {/* Events List */}
            <div className="space-y-3 md:space-y-4">
              {upcomingEvents.map((event, index) => (
                <MotionDiv
                  key={event.id}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex gap-2 p-2 md:gap-4 md:p-4">
                    {/* Event Image Thumbnail */}
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg md:h-24 md:w-24">
                      {/* <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      /> */}
                    </div>

                    {/* Event Details */}
                    <div className="min-w-0 flex-1">
                      {/* Date and Time */}
                      <div className="mb-1 flex flex-col gap-1 text-[10px] text-gray-600 md:mb-2 md:flex-row md:items-center md:gap-3 md:text-xs">
                        <div className="flex items-center gap-1">
                          <LuCalendar className="h-3 w-3 text-[#E63946] md:h-3.5 md:w-3.5" />
                          <span className="truncate">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <LuClock className="h-3 w-3 text-[#FF6B35] md:h-3.5 md:w-3.5" />
                          <span className="truncate">{event.time}</span>
                        </div>
                      </div>

                      {/* Event Title */}
                      <h4 className="mb-1 line-clamp-1 text-gray-900 text-xs transition-colors group-hover:text-[#E63946] md:mb-2 md:line-clamp-2 md:text-base">
                        {event.title}
                      </h4>

                      {/* Location */}
                      <div className="mb-2 flex items-start gap-1 text-[10px] text-gray-600 md:mb-3 md:text-xs">
                        <LuMapPin className="mt-0.5 h-3 w-3 shrink-0 text-[#FFB627] md:h-3.5 md:w-3.5" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>

                    {/* Enrol Button */}
                    <div className="flex shrink-0 items-center">
                      <MotionButton
                        className="whitespace-nowrap rounded-lg bg-linear-to-r from-[#E63946] to-[#FF6B35] px-2 py-1 text-[10px] text-white transition-all duration-300 hover:shadow-lg md:px-5 md:py-2 md:text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Enrol
                      </MotionButton>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          {/* Right Column - Important Notices */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Column Header */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-gray-900">Important Notices</h3>
              <MotionButton
                onClick={() => setShowAllNotices(true)}
                className="group flex items-center gap-1.5 text-[#E63946] transition-colors hover:text-[#FF6B35]"
                whileHover={{ x: 3 }}
              >
                <span className="text-sm">View All</span>
                <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MotionButton>
            </div>

            {/* Notices List */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
              <ul className="space-y-4">
                {importantNotices.map((notice, index) => (
                  <MotionLi
                    key={notice.id}
                    className="group flex items-start justify-between gap-4 border-gray-100 border-b pb-4 last:border-b-0 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="min-w-0 flex-1">
                      {/* Notice Title */}
                      <h5 className="mb-1 line-clamp-2 text-gray-900 transition-colors group-hover:text-[#E63946]">
                        {notice.title}
                      </h5>
                      {/* Notice Date */}
                      <p className="text-gray-500 text-xs">{notice.date}</p>
                    </div>

                    {/* Download Button */}
                    <MotionA
                      href={notice.pdfLink}
                      className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-linear-to-r from-[#FFB627] to-[#FF6B35] px-4 py-2 text-white text-xs transition-all duration-300 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LuDownload className="h-3.5 w-3.5" />
                      <span>Download</span>
                    </MotionA>
                  </MotionLi>
                ))}
              </ul>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default EventScheduleNotices;
