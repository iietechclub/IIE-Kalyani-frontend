import DepartmentPage from "@/components/department-page";

export default function Page() {
  const hod = {
    name: "Mr. Subhasis Jana",
    image: "(academic)/department/AI&ML/cse-HOD.JPG",
    message: `Welcome to the Department of Artificial Intelligence & Machine Learning at IIE Kalyani.
              We combine rigorous theoretical foundations with hands-on laboratory experience and industry collaboration.
              Our aim is to equip students with the practical skills and research mindset needed for careers in AI, data science and robotics.`,
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

  const labs = [
    {
      name: "AI Research Lab",
      image: "(academic)/department/AI&ML/data-scince_lab(about).JPG",
    },
    {
      name: "Deep Learning Lab",
      image: "(academic)/department/AI&ML/aiml-lab-3.JPG",
    },
    {
      name: "Neural Networks Lab",
      image: "(academic)/department/AI&ML/ai-mal_lab(hero).png",
    },
  ];

  return (
    <DepartmentPage
      name="Artificial Intelligence & Machine Learning"
      subtitle="Shaping the future with intelligent systems, deep learning research and industry-aligned education."
      banner="(academic)/department/AI&ML/Banner.jpeg"
      hod={hod}
      vision="To become a leader in AI research and education."
      mission="Teach, research, and deploy AI responsibly for societal impact."
      aboutImage="(academic)/department/AI&ML/aiml-about.jpg"
      aboutContent={aboutContent}
      labs={labs}
    />
  );
}
