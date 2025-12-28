import DepartmentPage from "@/components/department-page";

export default function Page() {
  const hod = {
    name: "Mr. Buswajit Manna",
    image: "(academic)/department/EE/stock-hod.png",
    message: `Welcome to the Department of Electrical Engineering at IIE Kalyani. Our curriculum, labs and industry partnerships prepare students to tackle power system challenges and drive the renewable energy transition. We emphasize practical skills, research and ethical engineering.`,
  };

  const aboutContent = (
    <>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        The Department of Electrical Engineering focuses on power generation,
        transmission, distribution and utilization. We cover power systems,
        electrical machines, control systems and renewable energy.
      </p>
      <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
        Hands-on lab work, internships and industry collaborations ensure
        students graduate ready to design and operate modern electrical systems.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        We prepare responsible engineers who will drive sustainable energy
        solutions.
      </p>
    </>
  );

  const labs = [
    {
      name: "Power Systems Lab",
      image: "(academic)/department/EE/ee-lab-3.JPG",
    },
    {
      name: "Control Systems Lab",
      image: "(academic)/department/EE/ee-lab-2.JPG",
    },
    {
      name: "Electrical Machines Lab",
      image: "(academic)/department/EE/lab-01.jpeg",
    },
  ];

  return (
    <DepartmentPage
      name="Electrical Engineering"
      subtitle="Powering the future with innovation in power systems, smart grids and renewable energy."
      banner="(academic)/department/EE/ee-banner.JPG"
      hod={hod}
      vision="To lead in power systems education and renewable research."
      mission="Hands-on training, innovation and industry collaboration."
      aboutImage="(academic)/department/EE/ee-about.JPG"
      aboutContent={aboutContent}
      labs={labs}
    />
  );
}
