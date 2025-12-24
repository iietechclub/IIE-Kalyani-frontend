import DepartmentPage from "@/components/department-page";

export default function Page() {
  const hod = {
    name: "Mrs. Mousumi Das",
    image: "(academic)/department/EE/stock-hod.png",
    message: `Welcome to the Department of Electronics & Communication Engineering at IIE Kalyani. We emphasize hands-on labs, industry-aligned curriculum, and active research in signal processing, communications and embedded systems. Join us to build impactful solutions.`,
  };

  const aboutContent = (
    <>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        The Department of Electronics & Communication Engineering at IIE Kalyani
        is dedicated to producing skilled engineers in communication systems,
        signal processing, VLSI and embedded systems. Our curriculum balances
        theory and practice with strong industry ties.
      </p>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        Students engage in lab projects, internships and research collaborations
        that keep them at the forefront of technological change.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        We focus on creating innovators who can design reliable and scalable
        communication solutions.
      </p>
    </>
  );

  const labs = [
    {
      name: "Communication Systems Lab",
      image: "(academic)/department/ECE/LAB-01(BANNER).JPG",
    },
    {
      name: "VLSI Design Lab",
      image: "(academic)/department/ECE/LAB-03.jpg",
    },
    // {
    //   name: "Microprocessor Lab",
    //   image: "(academic)/department/AI&ML/ai-mal_lab(hero).png",
    // },
  ];

  return (
    <DepartmentPage
      name="Electronics & Communication Engineering"
      subtitle="Pioneering innovations in electronics, telecommunications, and embedded systems."
      banner="(academic)/department/ECE/LAB-01(BANNER).JPG"
      hod={hod}
      labsStrip="VLSI, RF & Embedded"
      vision="To be leaders in ECE education and research."
      mission="Hands-on training, research and industry collaboration."
      aboutImage="(academic)/department/ECE/about-e.jpg"
      aboutContent={aboutContent}
      labs={labs}
    />
  );
}
