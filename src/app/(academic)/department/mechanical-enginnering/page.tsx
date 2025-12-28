import DepartmentPage from "@/components/department-page";

export default function Page() {
  const hod = {
    name: "Mr. Rajsekhar Mondal",
    image: "(academic)/department/ME/me-hod.jpg",
    message: `Welcome to the Department of Mechanical Engineering at IIE Kalyani. Our program emphasizes hands-on projects, modern lab exposure and strong industry collaboration so graduates can succeed in sectors like automotive, manufacturing, energy and aerospace.`,
  };

  const aboutContent = (
    <>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        The Department of Mechanical Engineering provides rigorous education in
        mechanical systems, manufacturing, thermal sciences and design. We
        combine theory with laboratory practice and industry exposure.
      </p>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        Students participate in hands-on projects, internships and research to
        prepare for careers across automotive, energy, aerospace and
        manufacturing sectors.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Our goal is to produce innovators who deliver practical and sustainable
        engineering solutions.
      </p>
    </>
  );

  const labs = [
    {
      name: "Manufacturing Lab",
      image: "(academic)/department/ME/me-lab-2.JPG",
    },
    {
      name: "Thermal Engineering Lab",
      image: "(academic)/department/ME/me-lab-1.JPG",
    },
    {
      name: "CAD/CAM Lab",
      image: "(academic)/department/ME/me-lab-3.JPG",
    },
  ];

  return (
    <DepartmentPage
      name="Mechanical Engineering"
      subtitle="Engineering excellence in design, manufacturing and energy — preparing innovators for industry and research."
      banner="(academic)/department/ME/me-banner.JPG"
      hod={hod}
      vision="To lead in design, manufacturing and sustainable solutions."
      mission="Hands-on learning, research and industry partnerships."
      aboutImage="(academic)/department/ME/me-about.JPG"
      aboutContent={aboutContent}
      labs={labs}
    />
  );
}
