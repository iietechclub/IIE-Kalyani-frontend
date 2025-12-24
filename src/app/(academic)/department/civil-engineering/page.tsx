import DepartmentPage from "@/components/department-page";

export default function Page() {
  const hod = {
    name: "Mrs. Sangita Debnath",
    image: "(academic)/department/CE/HOD.JPG",
    message: `Welcome to the Department of Civil Engineering at IIE Kalyani. Our program focuses on preparing students to tackle real-world infrastructure challenges through practical labs, field visits, and industry internships. We emphasize sustainable, resilient design and hands-on problem solving.`,
  };

  const aboutContent = (
    <>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        The Department of Civil Engineering at IIE Kalyani is dedicated to
        producing skilled civil engineers who design, construct, and maintain
        infrastructure. Our curriculum covers structural engineering,
        transportation, environmental engineering, and urban planning.
      </p>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        With well-equipped labs and experienced faculty, students gain practical
        experience through site visits, internships, and research projects.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        We emphasize sustainable and resilient design, preparing graduates who
        can make a positive societal impact.
      </p>
    </>
  );

  const labs = [
    {
      name: "Concrete Testing Lab",
      image: "(academic)/department/CE/ce-lab-1.JPG",
    },
    {
      name: "Surveying Lab",
      image: "(academic)/department/CE/lab-02.jpg",
    },
    {
      name: "Soil Mechanics Lab",
      image: "(academic)/department/CE/lab-03.jpeg",
    },
  ];

  return (
    <DepartmentPage
      name="Civil Engineering"
      subtitle="Shaping infrastructure and building sustainable communities for tomorrow."
      banner="(academic)/department/CE/banner.JPG"
      hod={hod}
      labsStrip="Concrete, Soil & Surveying"
      vision="To create civil engineers who build safe, sustainable infrastructure."
      mission="Hands-on learning, research, and industry collaboration for societal impact."
      aboutImage="(academic)/department/CE/about.jpeg"
      aboutContent={aboutContent}
      labs={labs}
    />
  );
}
