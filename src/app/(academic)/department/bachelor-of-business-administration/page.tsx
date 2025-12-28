import DepartmentPage from "@/components/department-page";

export default function Page() {
  const hod = {
    // name: "Mr. Subhasis Jana",
    // image: "(academic)/department/AI&ML/cse-HOD.JPG",
    message: `Welcome to the Department of Business Administration at IIE Kalyani. We are committed to nurturing business leaders who can thrive in today's dynamic business environment. Our BBA program blends strong academic foundations with practical experiences like internships, case studies and industry projects.`,
  };

  const aboutContent = (
    <>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        The AI & ML Department at IIE Kalyani focuses on foundational and
        applied research in deep learning, computer vision, NLP, reinforcement
        learning and data-driven systems. We provide hands-on training using
        frameworks such as TensorFlow and PyTorch.
      </p>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        Our students are trained through labs, projects, research seminars and
        industry internships, preparing them for research and industry roles
        alike.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        We emphasize ethical AI, reproducible research, and scalable deployment
        for real-world impact.
      </p>
    </>
  );

  const labs: { name: string; image: string }[] = [
    // {
    //   name: "Computer Lab",
    //   image: "(academic)/department/AI&ML/data-scince_lab(about).JPG",
    // },
    // {
    //   name: "Business Analytics Lab",
    //   image: "(academic)/department/AI&ML/aiml-lab-3.JPG",
    // },
    // {
    //   name: "Seminar Hall",
    //   image: "(academic)/department/AI&ML/ai-mal_lab(hero).png",
    // },
  ];

  return (
    <DepartmentPage
      name="Bachelor of Business Administration"
      subtitle="Nurturing future business leaders and entrepreneurs with practical exposure and academic rigour."
      banner="(academic)/department/bba/banner.jpeg"
      hod={hod}
      vision="To produce ethical, entrepreneurial business professionals."
      mission="Practical learning, industry linkages and leadership development."
      aboutImage="(academic)/department/bba/bba-about-2.avif"
      aboutContent={aboutContent}
      labs={labs}
    />
  );
}
