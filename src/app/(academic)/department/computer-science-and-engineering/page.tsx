import DepartmentPage from "@/components/department-page";

export default function Page() {
  const hod = {
    name: "Mr. Subhasis Jana",
    image: "(academic)/department/CSE/cse-HOD.JPG",
    message: `Welcome to the Department of Computer Science & Engineering at IIE Kalyani. We are committed to delivering high-quality education and practical training that bridges theory and industry practice. Our curriculum, modern labs, and strong industry partnerships help students convert learning into career success.`,
  };

  const aboutContent = (
    <>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        The Department of Computer Science & Engineering at IIE Kalyani is
        committed to providing quality technical education and fostering
        innovation in the field of computing. Established with a vision to
        create skilled professionals, our department offers state-of-the-art
        infrastructure and experienced faculty.
      </p>

      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        We focus on developing strong fundamentals in computer science,
        programming, data structures, algorithms, artificial intelligence,
        machine learning, and other emerging technologies. Our curriculum is
        designed to meet industry standards and prepare students for global
        opportunities.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        The department actively encourages research, innovation, and
        entrepreneurship, providing students with hands-on experience through
        projects, internships, and industry collaborations.
      </p>
    </>
  );

  const labs = [
    {
      name: "Programming Lab",
      image: "(academic)/department/CSE/programming_lab.jpg",
    },
    {
      name: "Data Science Lab",
      image: "(academic)/department/CSE/data-scince_lab(about).JPG",
    },
    {
      name: "AI & Machine Learning Lab",
      image: "(academic)/department/CSE/ai-mal_lab(hero).png",
    },
  ];

  return (
    <DepartmentPage
      name="Computer Science & Engineering"
      subtitle="Empowering future technology leaders through cutting-edge education, multi-disciplinary research, and strong industry collaboration."
      banner="(academic)/department/CSE/banner.avif"
      hod={hod}
      vision="To nurture innovators and leaders in computing."
      mission="Practical learning, research and industry-ready graduates."
      aboutImage="(academic)/department/CSE/data-scince_lab(about).JPG"
      aboutContent={aboutContent}
      labs={labs}
    />
  );
}
