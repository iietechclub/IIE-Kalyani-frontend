"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { LuClipboardCheck } from "react-icons/lu";
import { MotionDiv } from "@/components/animated/motion";
import BackendImage from "@/components/BackendImage";

// -------------------------
// DepartmentBarChart
// -------------------------
interface DepartmentData {
  dept: string;
  placed: number;
  total: number;
  percentage: number;
}

function DepartmentBarChart({ data }: { data: DepartmentData[] }) {
  const padding = { top: 20, right: 24, bottom: 80, left: 56 };
  const svgHeight = 380;
  const svgWidth = 1100;
  const chartHeight = svgHeight - padding.top - padding.bottom;
  const barGap = 22;
  const barCount = data.length;
  const fullWidth = svgWidth - padding.left - padding.right;
  const barWidth = Math.max(
    34,
    Math.floor((fullWidth - (barCount - 1) * barGap) / barCount),
  );
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: needed
  useEffect(() => {
    let start: number | null = null;
    const duration = 900;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const t = Math.min(1, (timestamp - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setProgress(eased);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [data]);

  const [hover, setHover] = useState({
    idx: -1,
    x: 0,
    y: 0,
    visible: false,
  });
  const steps = 5;
  const gridVals = Array.from({ length: steps + 1 }, (_, i) =>
    Math.round((100 * i) / steps),
  );
  const gradientId = "deptBarGrad";

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="h-[380px] w-full md:h-[420px]"
        role="img"
        aria-label="Department placement percentage chart"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fb7185" stopOpacity="1" />
            <stop offset="70%" stopColor="#f43f5e" stopOpacity="1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
          </linearGradient>

          <filter id="barShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="12"
              floodColor="#f43f5e"
              floodOpacity="0.12"
            />
          </filter>
        </defs>

        {/* grid and left axis */}
        <g transform={`translate(${padding.left}, ${padding.top})`}>
          {gridVals.map((gv, idx) => {
            const y = chartHeight - (gv / 100) * chartHeight;
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: not needed
              <g key={idx}>
                <line
                  x1={-padding.left}
                  x2={svgWidth - padding.right - padding.left}
                  y1={y}
                  y2={y}
                  stroke="#e6e6f0"
                  strokeDasharray="4 6"
                />
                <text
                  x={-12 - padding.left}
                  y={y + 4}
                  fontSize="12"
                  fill="#6b7280"
                  textAnchor="end"
                >
                  {gv}%
                </text>
              </g>
            );
          })}
        </g>

        {/* bars */}
        <g transform={`translate(${padding.left}, ${padding.top})`}>
          {data.map((d: DepartmentData, i: number) => {
            const x = i * (barWidth + barGap);
            const targetHeight = (d.percentage / 100) * chartHeight;
            const barHeight = Math.max(3, targetHeight * progress);
            const y = chartHeight - barHeight;
            const rx = 8;

            return (
              <g key={d.dept} transform={`translate(${x}, 0)`}>
                {/** biome-ignore lint/a11y/noStaticElementInteractions: needed */}
                <rect
                  x={-8}
                  y={0}
                  width={barWidth + 16}
                  height={chartHeight}
                  fill="transparent"
                  onMouseEnter={() =>
                    setHover({
                      idx: i,
                      x: x + barWidth / 2 + padding.left,
                      y: y + padding.top,
                      visible: true,
                    })
                  }
                  onMouseMove={(e) =>
                    setHover({
                      idx: i,
                      x: e.clientX,
                      y: e.clientY,
                      visible: true,
                    })
                  }
                  onMouseLeave={() =>
                    setHover({
                      idx: -1,
                      x: 0,
                      y: 0,
                      visible: false,
                    })
                  }
                  style={{ cursor: "pointer" }}
                />

                <rect
                  x={0}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  rx={rx}
                  fill={`url(#${gradientId})`}
                  filter="url(#barShadow)"
                  style={{
                    transition: "height 350ms ease, y 350ms ease",
                  }}
                />

                <text
                  x={barWidth / 2}
                  y={Math.max(14, y - 10)}
                  fontSize="12"
                  fill="#374151"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {Math.round(d.percentage)}%
                </text>

                <text
                  x={barWidth / 2}
                  y={chartHeight + 20}
                  fontSize="12"
                  fill="#374151"
                  textAnchor="middle"
                >
                  {d.dept.length > 20 ? `${d.dept.slice(0, 20)}…` : d.dept}
                </text>
              </g>
            );
          })}
        </g>

        <line
          x1={padding.left - 6}
          x2={svgWidth - padding.right}
          y1={svgHeight - padding.bottom + 8}
          y2={svgHeight - padding.bottom + 8}
          stroke="#d1d5db"
        />
      </svg>

      {hover.visible && hover.idx >= 0 && (
        <div
          className="pointer-events-none absolute z-50"
          style={{
            left: hover.x,
            top: Math.max(hover.y - 24, 40),
            transform: "translate(-50%, -100%)",
            transition: "top 120ms ease",
          }}
        >
          <div
            style={{ minWidth: 140 }}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 text-sm shadow-lg"
          >
            <div className="font-semibold">{data[hover.idx].dept}</div>
            <div className="font-medium text-rose-600">
              {data[hover.idx].percentage}% placed
            </div>
            <div className="mt-1 text-gray-500 text-xs">
              Placed: {data[hover.idx].placed} / {data[hover.idx].total}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------
// Main PlacementRecordPageClient
// -------------------------
export default function PlacementRecordPageClient({
  companies,
}: PlacementRecordPageData) {
  // Data: yearly stats + per-department placement rows (sample records)
  const yearlyStats = [
    {
      year: "2024",
      stats: {
        totalStudents: 450,
        studentsPlaced: 405,
        placementPercentage: 90,
        highestPackage: "18 LPA",
        averagePackage: "6.5 LPA",
        companiesVisited: 85,
        medianSalary: "6.0 LPA",
      },
      departments: {
        "Computer Science & Engineering": {
          count: 6,
          rows: [
            {
              sl: 1,
              name: "Rahidul Khan",
              position: "Software developer",
              company: "Intern at Google, SDE",
            },
            {
              sl: 2,
              name: "Rahidul Khan",
              position: "CEO",
              company: "Google",
            },
            {
              sl: 3,
              name: "Rahul Mondal",
              position: "Proud Student",
              company: "IIE",
            },
            {
              sl: 4,
              name: "Ria Sarkar",
              position: "Senior Developer",
              company: "Deloitte",
            },
            {
              sl: 5,
              name: "Supriyo Pal",
              position: "HR Manager",
              company: "Accenture",
            },
            {
              sl: 6,
              name: "Tapas Manna",
              position: "CEO",
              company: "TCS",
            },
          ],
        },
        "Electrical Engineering": {
          count: 4,
          rows: [
            {
              sl: 1,
              name: "Suman Roy",
              position: "CEO",
              company: "Siemens",
            },
            {
              sl: 2,
              name: "Megha Paul",
              position: "CEO",
              company: "Bosch",
            },
            {
              sl: 3,
              name: "Rajat Sen",
              position: "CEO",
              company: "L&T",
            },
            {
              sl: 4,
              name: "Anita Sharma",
              position: "CEO",
              company: "Toshiba",
            },
          ],
        },
        "Mechanical Engineering": {
          count: 5,
          rows: [
            {
              sl: 1,
              name: "Rohit Kumar",
              position: "CEO",
              company: "Mahindra",
            },
            {
              sl: 2,
              name: "Kunal Das",
              position: "CEO",
              company: "Bajaj",
            },
            {
              sl: 3,
              name: "Pooja Dutta",
              position: "CEO",
              company: "TVS",
            },
            {
              sl: 4,
              name: "Nilesh Kumar",
              position: "CEO",
              company: "Tata Motors",
            },
            {
              sl: 5,
              name: "Sana Roy",
              position: "CEO",
              company: "Maruti",
            },
          ],
        },

        "Artificial Intelligence & Machine Learning": {
          count: 8,
          rows: [{ sl: 1, name: "Nil", position: "CEO", company: "-" }],
        },
        "Electronics & Communication": {
          count: 6,
          rows: [{ sl: 1, name: "Nil", position: "CEO", company: "-" }],
        },
        "Civil Engineering": {
          count: 6,
          rows: [{ sl: 1, name: "Nil", position: "CEO", company: "-" }],
        },
      },
    },
    {
      year: "2023",
      stats: {
        totalStudents: 420,
        studentsPlaced: 370,
        placementPercentage: 88,
        highestPackage: "16 LPA",
        averagePackage: "6.2 LPA",
        companiesVisited: 78,
        medianSalary: "6.0 LPA",
      },
      departments: {
        "Computer Science & Engineering": {
          count: 5,
          rows: [
            {
              sl: 1,
              name: "A. Example",
              stream: "CSE",
              company: "Example Co",
            },
          ],
        },
        "Electrical Engineering": {
          count: 3,
          rows: [
            {
              sl: 1,
              name: "B. Example",
              stream: "EE",
              company: "Example Co",
            },
          ],
        },
      },
    },
    {
      year: "2022",
      stats: {
        totalStudents: 400,
        studentsPlaced: 340,
        placementPercentage: 85,
        highestPackage: "15 LPA",
        averagePackage: "5.8 LPA",
        companiesVisited: 72,
        medianSalary: "5.6 LPA",
      },
      departments: {
        "Computer Science & Engineering": {
          count: 4,
          rows: [
            {
              sl: 1,
              name: "X Y",
              stream: "CSE",
              company: "CoX",
            },
          ],
        },
      },
    },
  ];

  // Department stats for bar chart (percentage)
  const departmentStats = [
    {
      dept: "Computer Science & Engineering",
      placed: 95,
      total: 100,
      percentage: 95,
    },
    {
      dept: "Electrical Engineering",
      placed: 85,
      total: 95,
      percentage: 89,
    },
    {
      dept: "Mechanical Engineering",
      placed: 80,
      total: 92,
      percentage: 87,
    },
    {
      dept: "Civil Engineering",
      placed: 70,
      total: 85,
      percentage: 82,
    },
    {
      dept: "Electronics & Communication",
      placed: 88,
      total: 98,
      percentage: 90,
    },
    {
      dept: "Production & Industrial",
      placed: 42,
      total: 50,
      percentage: 84,
    },
    {
      dept: "Architecture",
      placed: 26,
      total: 30,
      percentage: 87,
    },
  ];

  // Recruiters data
  // const companies = [
  //   // IT & Software
  //   {
  //     name: "TCS",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Tata_Consultancy_Services_old_logo.svg",
  //     domain: "IT",
  //   },
  //   {
  //     name: "Infosys",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  //     domain: "IT",
  //   },
  //   {
  //     name: "Wipro",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Wipro_Logo_2017.svg",
  //     domain: "IT",
  //   },
  //   {
  //     name: "Cognizant",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
  //     domain: "IT",
  //   },
  //   {
  //     name: "Accenture",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  //     domain: "Consulting",
  //   },
  //   {
  //     name: "Tech Mahindra",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Tech_Mahindra_New_Logo.svg",
  //     domain: "IT",
  //   },
  //   {
  //     name: "Capgemini",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
  //     domain: "IT",
  //   },
  //   {
  //     name: "IBM",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  //     domain: "IT",
  //   },
  //   {
  //     name: "HCL",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/HCL_Technologies_logo.svg",
  //     domain: "IT",
  //   },
  //   {
  //     name: "L&T Infotech",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/L%26T_Infotech_logo.svg",
  //     domain: "IT",
  //   },
  //   {
  //     name: "Mindtree",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Mindtree_Logo.svg",
  //     domain: "IT",
  //   },
  //   {
  //     name: "Mphasis",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Mphasis_logo.svg",
  //     domain: "IT",
  //   },
  //   {
  //     name: "Oracle",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  //     domain: "IT",
  //   },
  //   // Core Engineering
  //   {
  //     name: "L&T",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/L%26T_logo.svg",
  //     domain: "Engineering",
  //   },
  //   {
  //     name: "Tata Steel",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Tata_Steel_Logo.svg",
  //     domain: "Engineering",
  //   },
  //   {
  //     name: "JSW Steel",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/JSW_Group_logo.svg",
  //     domain: "Engineering",
  //   },
  //   {
  //     name: "Vedanta",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vedanta_Resources_logo.svg",
  //     domain: "Engineering",
  //   },
  //   {
  //     name: "Hindalco",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Hindalco_Industries_logo.svg",
  //     domain: "Engineering",
  //   },
  //   {
  //     name: "ABB",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/ABB_logo.svg",
  //     domain: "Engineering",
  //   },
  //   {
  //     name: "Siemens",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Siemens-logo.svg",
  //     domain: "Engineering",
  //   },
  //   {
  //     name: "Schneider Electric",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Schneider_Electric_2007.svg",
  //     domain: "Engineering",
  //   },
  //   {
  //     name: "Ashok Leyland",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Ashok_Leyland_Logo.svg",
  //     domain: "Engineering",
  //   },
  //   // Consulting
  //   {
  //     name: "Deloitte",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/5/54/Deloitte-logo.svg",
  //     domain: "Consulting",
  //   },
  //   {
  //     name: "EY",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/EY_Logo_2019.svg",
  //     domain: "Consulting",
  //   },
  //   {
  //     name: "KPMG",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/KPMG_logo.svg",
  //     domain: "Consulting",
  //   },
  //   {
  //     name: "PwC",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/PWC_Logo.svg",
  //     domain: "Consulting",
  //   },
  //   {
  //     name: "Genpact",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Genpact_logo.svg",
  //     domain: "Consulting",
  //   },
  //   {
  //     name: "WNS",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/WNS_Global_Services_logo.svg",
  //     domain: "Consulting",
  //   },
  //   // Manufacturing
  //   {
  //     name: "Tata Motors",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Tata_Motors_Logo.svg",
  //     domain: "Manufacturing",
  //   },
  //   {
  //     name: "Mahindra",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mahindra_logo.svg",
  //     domain: "Manufacturing",
  //   },
  //   {
  //     name: "Maruti Suzuki",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Maruti_Suzuki_logo.svg",
  //     domain: "Manufacturing",
  //   },
  //   {
  //     name: "Hero MotoCorp",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Hero_MotoCorp_logo.svg",
  //     domain: "Manufacturing",
  //   },
  //   {
  //     name: "TVS",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/TVS_Motor_Company_logo.svg",
  //     domain: "Manufacturing",
  //   },
  //   {
  //     name: "Bosch",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bosch-logo.svg",
  //     domain: "Manufacturing",
  //   },
  //   {
  //     name: "Asian Paints",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Asian_Paints_Logo.svg",
  //     domain: "Manufacturing",
  //   },
  //   {
  //     name: "Ultratech Cement",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/UltraTech_Cement_Logo.svg",
  //     domain: "Manufacturing",
  //   },
  //   // Finance
  //   {
  //     name: "ICICI Bank",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/ICICI_Bank_Logo.svg",
  //     domain: "Finance",
  //   },
  //   {
  //     name: "HDFC Bank",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/HDFC_Bank_Logo.svg",
  //     domain: "Finance",
  //   },
  //   {
  //     name: "Axis Bank",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Axis_Bank_logo.svg",
  //     domain: "Finance",
  //   },
  //   {
  //     name: "Kotak Mahindra Bank",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Kotak_Mahindra_Bank_logo.svg",
  //     domain: "Finance",
  //   },
  //   {
  //     name: "Bajaj Finserv",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Bajaj_Finserv_Logo.svg",
  //     domain: "Finance",
  //   },
  //   // E-Commerce & Tech
  //   {
  //     name: "Amazon",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  //     domain: "E-commerce",
  //   },
  //   {
  //     name: "Flipkart",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flipkart_logo.svg",
  //     domain: "E-commerce",
  //   },
  //   {
  //     name: "Paytm",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_logo.svg",
  //     domain: "Fintech",
  //   },
  //   {
  //     name: "PhonePe",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/PhonePe_Logo.svg",
  //     domain: "Fintech",
  //   },
  //   {
  //     name: "Zomato",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.svg",
  //     domain: "Food Tech",
  //   },
  //   {
  //     name: "Swiggy",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.svg",
  //     domain: "Food Tech",
  //   },
  //   {
  //     name: "OYO",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/OYO_Rooms_Logo.svg",
  //     domain: "Hospitality",
  //   },
  //   {
  //     name: "Byju's",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/BYJU%27S_Logo.svg",
  //     domain: "EdTech",
  //   },
  //   {
  //     name: "Unacademy",
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Unacademy_logo.svg",
  //     domain: "EdTech",
  //   },
  // ];

  const heroImage =
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=80";

  // UI state
  const [activeYear, setActiveYear] = useState(yearlyStats[0].year);
  const [activeDeptByYear, setActiveDeptByYear] = useState<
    Record<string, string | null>
  >(() => {
    const map: Record<string, string | null> = {};
    yearlyStats.forEach((y) => {
      const firstDept = Object.keys(y.departments)[0] ?? null;
      map[y.year] = firstDept;
    });
    return map;
  });

  const [query, _setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showOnlyTop, _setShowOnlyTop] = useState(false);
  const [cols, setCols] = useState(4);
  const [showAll, setShowAll] = useState(false);
  const [badImgs, setBadImgs] = useState(() => new Map());

  // Responsive columns
  useEffect(() => {
    function updateCols() {
      const w = window.innerWidth;
      if (w < 640) setCols(2);
      else if (w < 1024) setCols(3);
      else setCols(4);
    }
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(companies.map((c) => c.domain)))],
    [companies],
  );

  const topList = useMemo(
    () =>
      new Set([
        "TCS",
        "Infosys",
        "Wipro",
        "Accenture",
        "Amazon",
        "Flipkart",
        "Tata Motors",
        "HDFC Bank",
        "ICICI Bank",
        "L&T",
        "Deloitte",
      ]),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return companies.filter((c) => {
      if (activeCategory !== "All" && c.domain !== activeCategory) return false;
      if (showOnlyTop && !topList.has(c.name)) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) || c.domain.toLowerCase().includes(q)
      );
    });
  }, [companies, activeCategory, query, showOnlyTop, topList]);

  const itemsPerPage = cols * 3;
  const visibleItems = showAll ? filtered : filtered.slice(0, itemsPerPage);

  // Initials fallback generator
  const initials = (name: string) => {
    if (!name) return "";
    const parts = name.split(" ").filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
  };

  function handleImgError(name: string) {
    setBadImgs((m: Map<string, boolean>) => {
      const nm = new Map(m);
      nm.set(name, true);
      return nm;
    });
  }

  // Helpers to access current data
  const currentYearObj =
    yearlyStats.find((y) => y.year === activeYear) ?? yearlyStats[0];
  const departmentsForActiveYear = Object.entries(
    currentYearObj.departments,
  ).map(([dept, info]) => ({ dept, ...info }));

  // Render table rows matching the image style
  function DepartmentTable({ deptKey }: { deptKey: string | null }) {
    if (!deptKey) {
      return (
        <div className="p-6 text-muted-foreground text-sm">
          No department selected.
        </div>
      );
    }
    const deptData =
      currentYearObj.departments[
        deptKey as keyof typeof currentYearObj.departments
      ];
    if (!deptData) {
      return (
        <div className="p-6 text-muted-foreground text-sm">
          No records available for {deptKey} in {activeYear}.
        </div>
      );
    }
    const rows = deptData.rows || [];

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="rounded-tl-lg bg-rose-500 px-4 py-3 text-left text-white">
                SL NO.
              </th>
              <th className="bg-rose-500 px-4 py-3 text-left text-white">
                STUDENT NAME
              </th>
              <th className="bg-rose-500 px-4 py-3 text-left text-white">
                POSITION
              </th>
              <th className="rounded-tr-lg bg-rose-500 px-4 py-3 text-left text-white">
                COMPANY NAME
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-6 text-center text-slate-500 text-sm"
                >
                  No placement records available.
                </td>
              </tr>
            ) : (
              // biome-ignore lint/suspicious/noExplicitAny: needed
              rows.map((r: any) => (
                <tr key={r.sl} className="odd:bg-white even:bg-rose-50">
                  <td className="border-t px-4 py-3">{r.sl}</td>
                  <td className="border-t px-4 py-3">{r.name}</td>
                  <td className="border-t px-4 py-3">
                    {/** biome-ignore lint/suspicious/noExplicitAny: needed */}
                    {(r as any).position || (r as any).stream || "-"}
                  </td>
                  <td className="border-t px-4 py-3">{r.company}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }

  console.log(companies);

  return (
    <div className="min-h-screen bg-neutral-50 text-slate-900">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-[360px] w-full bg-center bg-cover opacity-75 md:h-[420px]"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-linear-to-b from-rose-600/70 to-black/10" />
        </div>

        <div className="relative mx-auto mt-20 flex max-w-7xl flex-col items-center gap-8 px-4 py-20 lg:flex-row">
          <div className="z-10 flex-1 text-center text-white lg:text-left">
            <MotionDiv
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-4 rounded-xl p-3">
                <LuClipboardCheck className="h-12 w-12 text-white" />
                <div className="text-left">
                  <h1 className="text-3xl md:text-4xl">Placement Statistics</h1>
                  <p className="text-sm text-white/90 md:text-base">
                    Year-wise records, department performance and placement
                    highlights
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* Year tabs + department pills + table */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center font-bold text-[48px] text-[rgba(255,0,0,0.8)] text-xl">
            Year-wise Placement Records
          </h2>

          {/* Year selectors (tabs look) */}
          <div className="mb-6 flex items-center justify-center gap-3">
            {yearlyStats.map((y: (typeof yearlyStats)[0]) => (
              <button
                type="button"
                key={y.year}
                onClick={() => setActiveYear(y.year)}
                className={`rounded-lg px-4 py-2 text-sm ${activeYear === y.year ? "bg-white text-rose-600 shadow" : "bg-rose-50 text-rose-700/80"}`}
              >
                {y.year}
              </button>
            ))}
          </div>

          {/* Department pills row */}
          <div className="mb-6 w-full py-3">
            <div className="flex w-full flex-wrap items-center gap-3">
              {departmentsForActiveYear.map(
                (d: (typeof departmentsForActiveYear)[0]) => {
                  const selected = activeDeptByYear[activeYear] === d.dept;
                  return (
                    <button
                      type="button"
                      key={d.dept}
                      onClick={() =>
                        setActiveDeptByYear(
                          (prev: Record<string, string | null>) => ({
                            ...prev,
                            [activeYear]: d.dept,
                          }),
                        )
                      }
                      className={`flex max-w-full items-center gap-3 rounded-full px-4 py-2 text-sm transition ${
                        selected
                          ? "bg-white text-rose-600 shadow-sm ring-1 ring-rose-200"
                          : "bg-rose-50 text-rose-700/90"
                      }`}
                    >
                      <span className="max-w-40 truncate">{d.dept}</span>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-rose-100 bg-white/90 text-rose-600 text-xs">
                        {d.count}
                      </span>
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {/* Department table area */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <div className="text-slate-600 text-sm">
                Department: <strong>{activeDeptByYear[activeYear]}</strong>
              </div>
              <div className="text-slate-500 text-xs">
                Batch: {activeYear} • Median Salary:{" "}
                {currentYearObj.stats.medianSalary} • Offers:{" "}
                {currentYearObj.stats.studentsPlaced}
              </div>
            </div>

            <DepartmentTable deptKey={activeDeptByYear[activeYear]} />
          </div>
        </div>
      </section>

      {/* Department-wide chart */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-center font-bold text-[36px] text-[rgba(255,0,0,0.81)] text-xl">
            Department Wise Placement Graph
          </h2>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <DepartmentBarChart data={departmentStats} />
          </div>
        </div>
      </section>

      {/* Recruiters section */}
      <section className="container mx-auto mt-6 px-4 pb-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center font-bold text-[36px] text-[rgb(199,72,15)] text-xl not-italic">
            Our Recruiters
          </h2>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {categories.map((cat: string) => (
              <button
                type="button"
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`rounded-full px-3 py-1 text-sm transition-colors ${
                  activeCategory === cat
                    ? "bg-rose-600 text-white"
                    : "border border-gray-100 bg-white text-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
            <div className="ml-auto text-slate-500 text-xs">
              Showing {visibleItems.length} of {filtered.length}
            </div>
          </div>

          {/* Grid */}
          <div
            className={`grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4`}
          >
            {visibleItems.map((c: (typeof companies)[0], idx: number) => (
              <MotionDiv
                key={c.documentId}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                className="flex flex-col items-center gap-3 text-center"
                role="article"
                aria-label={`${c.name} — ${c.domain}`}
              >
                {/* logo area */}
                <div className="flex w-full items-center justify-center rounded-md border border-neutral-200/75 bg-white p-2 shadow-2xs transition hover:shadow">
                  {badImgs.get(c.name) ? (
                    <div className="flex h-20 w-28 items-center justify-center rounded-md border border-gray-200 bg-transparent">
                      <span className="text-lg text-slate-700">
                        {initials(c.name)}
                      </span>
                    </div>
                  ) : (
                    <div className="relative h-20 w-full p-4">
                      <BackendImage
                        fill
                        src={c.image.url}
                        alt={c.name}
                        // onError={() => handleImgError(c.name)}
                        // className="object-contain"
                        // style={{ background: "transparent" }}
                      />
                    </div>
                  )}
                </div>

                {/* Visit button */}
                {/* <div className="w-full flex justify-center">
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(c.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-black hover:shadow-md transition"
                  >
                    Visit
                  </a>
                </div> */}
              </MotionDiv>
            ))}
          </div>

          {filtered.length > itemsPerPage && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAll((s: boolean) => !s)}
                className="rounded-full border border-gray-200 bg-white px-6 py-2 shadow-sm"
              >
                {showAll ? "Show less" : `View all (${filtered.length})`}
              </button>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="mt-8 text-center text-slate-500">
              No recruiters found. Try a different search or category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
