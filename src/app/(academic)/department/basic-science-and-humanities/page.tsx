import DepartmentPage from "@/components/department-page";

export default function Page() {
  const hod = {
    name: "Mr. Ayan Mandal",
    image: "(academic)/department/BSH/HOD.JPG",
    message: `Welcome to the Department of Basic Science & Humanities at IIE Kalyani. We provide strong fundamentals in physics, chemistry, mathematics and communication — the building blocks of engineering excellence. Our approach blends theory, lab work and soft-skills training to produce thoughtful, technically-capable graduates.`,
  };

  const aboutContent = (
    <>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        The Department of Basic Science and Humanities at IIE Kalyani forms the
        foundation for all engineering programs. We provide essential courses in
        Physics, Chemistry, Mathematics, English, and Communication Skills that
        are crucial for engineering education.
      </p>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        Our dedicated faculty focuses on building strong fundamentals in science
        and developing communication and soft skills. We employ innovative
        teaching methods including laboratory experiments, interactive sessions,
        and practical demonstrations.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        The department plays a vital role in nurturing scientific temper,
        analytical thinking, and effective communication abilities essential for
        successful engineering professionals.
      </p>
    </>
  );

  const labs = [
    {
      name: "Physics Lab",
      image: "(academic)/department/BSH/PHY-LAB.JPG",
    },
    {
      name: "Chemistry Lab",
      image: "(academic)/department/BSH/CHEM-LAB.JPG",
    },
    // {
    //   name: "Language Lab",
    //   image: "(academic)/department/AI&ML/ai-mal_lab(hero).png",
    // },
  ];

  return (
    <DepartmentPage
      name="Basic Science & Humanities"
      subtitle="Building strong foundations for excellence in engineering education."
      banner="(academic)/department/BSH/banner.jpg"
      hod={hod}
      labsStrip="Physics, Chemistry, Language"
      vision="To build strong scientific foundations for future engineers."
      mission="Deliver rigorous fundamentals + communication skills for all programs."
      aboutImage="(academic)/department/BSH/about.jpg"
      aboutContent={aboutContent}
      labs={labs}
    />
  );
}
