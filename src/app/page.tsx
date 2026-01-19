import BannerCarousel from "@/components/landing/banner-carousel";
import CampusGallery from "@/components/landing/campusGallery";
import ContributorsSection from "@/components/landing/contributors-section";
import Departments from "@/components/landing/departments";
import Facilities from "@/components/landing/facilities";
import NoticeBar from "@/components/landing/notice-bar";
// import EventScheduleNotices from "@/components/landing/notice-section";
import Recruiters from "@/components/landing/recruiters";
// import StudentCreationSection from "@/components/landing/student-creation-section";
import WhyChooseUs from "@/components/landing/why-choose-section";

import { fetchHomePageData } from "@/dal/home";

export default async function Home() {
  const { home, placementRecord } = await fetchHomePageData();

  return (
    <main>
      <div className="-mt-17 sm:-mt-19 md:-mt-32 lg:-mt-33 h-90- bg-linear-to-b from-neutral-400 to-neutral-300 sm:h-108- md:h-120- lg:h-136- xl:h-150-">
        <BannerCarousel slides={home.banners} />
      </div>
      <NoticeBar />

      <div className="container mx-auto py-3 sm:px-6">
        <WhyChooseUs why_choose_cards={home.why_choose_cards} />
        <Departments
          tagline={home.departments_tagline}
          departments={home.departments}
        />
        <Facilities
          tagline={home.facilities_tagline}
          facilities={home.facilities}
        />
        <CampusGallery
          tagline={home.gallery_tagline}
          galleryItems={home.gallery_items}
        />
        {/* <StudentCreationSection /> */}
        <Recruiters
          {...{
            tagline: home.our_recruiters_tagline,
            avg_offers: home.our_recruiters_avg_offers,
            internship_offers: home.our_recruiters_internship_offers,
            avg_ctc: home.our_recruiters_avg_ctc,
            recruiting_sectors: home.our_recruiters_recruiting_sectors,
            companies: placementRecord.companies,
            apply_now: home.our_recruiters_apply_now,
          }}
        />
        {/* <EventScheduleNotices /> */}
        <ContributorsSection
          {...home}
          student_developers={home.student_developers}
        />
      </div>
    </main>
  );
}
