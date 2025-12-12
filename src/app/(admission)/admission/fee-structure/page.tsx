"use client";

import { useState } from "react";
import { LuDollarSign, LuDownload , LuInfo } from "react-icons/lu";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

/**
 * Full FeeStructure page
 * - Header kept unchanged
 * - Table headings in red
 * - B.Tech: 1st sem .. 8th sem + TOTAL
 * - B.Tech Lateral: 1st sem .. 6th sem + TOTAL (example)
 * - BBA: 1st sem .. 6th sem + TOTAL
 * - Exports both named and default to avoid import errors
 */

export function FeeStructure(){
  // toggle view state for sections (desktop shows by default; mobile uses stacked cards)
  const [open, setOpen] = useState({
    btech: true,
    btechLateral: false,
    makaut: false,
    bba: false,
  });

  // --- SAMPLE DATA: adjust numbers to your official values as required ---
  const btechPrograms = [
    {
      name: "COMPUTER SCIENCE & ENGINEERING",
      s1: "20,000",
      s2: "20,000",
      s3: "20,000",
      s4: "20,000",
      s5: "20,000",
      s6: "20,000",
      s7: "20,000",
      s8: "20,000",
      total: "160,000",
    },
    {
      name: "ELECTRONICS & COMMUNICATION",
      s1: "20,000",
      s2: "20,000",
      s3: "20,000",
      s4: "20,000",
      s5: "20,000",
      s6: "20,000",
      s7: "20,000",
      s8: "20,000",
      total: "160,000",
    },
    {
      name: "MECHANICAL ENGINEERING",
      s1: "20,000",
      s2: "20,000",
      s3: "20,000",
      s4: "20,000",
      s5: "20,000",
      s6: "20,000",
      s7: "20,000",
      s8: "20,000",
      total: "160,000",
    },
    {
      name: "CIVIL ENGINEERING",
      s1: "20,000",
      s2: "20,000",
      s3: "20,000",
      s4: "20,000",
      s5: "20,000",
      s6: "20,000",
      s7: "20,000",
      s8: "20,000",
      total: "160,000",
    },
    {
      name: "ELECTRICAL ENGINEERING",
      s1: "20,000",
      s2: "20,000",
      s3: "20,000",
      s4: "20,000",
      s5: "20,000",
      s6: "20,000",
      s7: "20,000",
      s8: "20,000",
      total: "160,000",
    },
  ];

  const btechLateralPrograms = [
    {
      name: "CSE (Lateral Entry)",
      s1: "35,000",
      s2: "35,000",
      s3: "35,000",
      s4: "35,000",
      s5: "35,000",
      s6: "35,000",
      total: "210,000",
    },
    {
      name: "ECE (Lateral Entry)",
      s1: "35,000",
      s2: "35,000",
      s3: "35,000",
      s4: "35,000",
      s5: "35,000",
      s6: "35,000",
      total: "210,000",
    },
  ];

  const makautRows = [
    { title: "MAKAUT Enrollment Fee", fee: "2,000" },
    { title: "MAKAUT Exam Fee (per term)", fee: "3,500" },
    { title: "MAKAUT Registration", fee: "1,500" },
  ];

  const bbaRows = [
    {
      title: "Tuition Fee",
      s1: "15,000",
      s2: "15,000",
      s3: "15,000",
      s4: "15,000",
      s5: "15,000",
      s6: "15,000",
      total: "90,000",
    },
    {
      title: "Admission Fee (one-time)",
      s1: "10,000",
      s2: "-",
      s3: "-",
      s4: "-",
      s5: "-",
      s6: "-",
      total: "10,000",
    },
    {
      title: "Library & Others",
      s1: "1,000",
      s2: "1,000",
      s3: "1,000",
      s4: "1,000",
      s5: "1,000",
      s6: "1,000",
      total: "6,000",
    },
  ];

  const otherCharges = [
    { label: "Admission Fee (one-time)", amount: "10,000" },
    { label: "Caution Money (refundable)", amount: "5,000" },
    { label: "Library Fee (annual)", amount: "2,000" },
    { label: "Development Fee (annual)", amount: "5,000" },
  ];

  // totals at bottom (example)
  const pageTotal = "266,000";

  const toggleSection = (key: keyof typeof open) =>
    setOpen((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header (keep unchanged) */}
      <header className="relative bg-gradient-to-r from-red-600 to-rose-600 text-white py-12 sm:py-20">
        <div className="absolute inset-0 bg-black/8 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white/10 p-3">
                <LuDollarSign className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Fee Structure</h1>
                <p className="text-sm sm:text-base text-rose-100 mt-1 max-w-xl">
                  As per Govt. of West Bengal norms — fee schedule & components for the academic year.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/assets/IIE-Kalyani-Fee-Brochure.pdf"
                className="inline-flex items-center gap-2 bg-white text-rose-600 px-4 py-2 rounded-md shadow hover:shadow-lg transition"
                aria-label="Download Fee Brochure"
              >
                <LuDownload className="w-4 h-4" />
                View &amp; Download Fees
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Important notes */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Alert className="bg-gray-50 border border-gray-200">
          <LuInfo className="h-5 w-5 text-red-600" />
          <AlertDescription className="text-sm text-gray-700">
            <strong>Important Notes:</strong> Academic fees are to be paid by Demand Draft / Online transfer in favour of "Ideal Institute of Engineering". Hostel & transport charges are extra. Fees are subject to change as per Govt/University directives.
          </AlertDescription>
        </Alert>
      </div>

      {/* Page content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* === B.Tech (1st sem .. 8th sem) === */}
        <section>
          <h2 className="text-base font-semibold mb-3">GENERAL STUDENT FEES STRUCTURE — THE ACADEMIC YEAR : (2025 - 2026)</h2>

          <div className="overflow-x-auto border border-gray-200 rounded-md">
            <table className="min-w-full table-fixed text-sm">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-3 text-left w-1/3">COURSES</th>
                  <th className="p-3 text-center">1ST SEM</th>
                  <th className="p-3 text-center">2ND SEM</th>
                  <th className="p-3 text-center">3RD SEM</th>
                  <th className="p-3 text-center">4TH SEM</th>
                  <th className="p-3 text-center">5TH SEM</th>
                  <th className="p-3 text-center">6TH SEM</th>
                  <th className="p-3 text-center">7TH SEM</th>
                  <th className="p-3 text-center">8TH SEM</th>
                  <th className="p-3 text-center">TOTAL</th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {btechPrograms.map((p, idx) => (
                  <tr key={p.name} className={idx % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="p-3 align-top">{p.name}</td>
                    <td className="p-3 text-center">{p.s1}</td>
                    <td className="p-3 text-center">{p.s2}</td>
                    <td className="p-3 text-center">{p.s3}</td>
                    <td className="p-3 text-center">{p.s4}</td>
                    <td className="p-3 text-center">{p.s5}</td>
                    <td className="p-3 text-center">{p.s6}</td>
                    <td className="p-3 text-center">{p.s7}</td>
                    <td className="p-3 text-center">{p.s8}</td>
                    <td className="p-3 text-center font-semibold">{p.total}</td>
                  </tr>
                ))}

                <tr className="bg-red-100">
                  <td className="p-3 font-semibold">TOTAL</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center font-bold">266,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* mobile stacked view */}
          <div className="lg:hidden mt-4 space-y-3">
            {btechPrograms.map((p) => (
              <Card key={p.name} className="p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{p.name}</div>
                  <div className="font-semibold text-rose-600">{p.total}</div>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-gray-700">
                  <div>
                    <div className="text-muted-foreground">1st</div>
                    <div className="font-medium">{p.s1}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">2nd</div>
                    <div className="font-medium">{p.s2}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">3rd</div>
                    <div className="font-medium">{p.s3}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">4th</div>
                    <div className="font-medium">{p.s4}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">5th</div>
                    <div className="font-medium">{p.s5}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">6th</div>
                    <div className="font-medium">{p.s6}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">7th</div>
                    <div className="font-medium">{p.s7}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">8th</div>
                    <div className="font-medium">{p.s8}</div>
                  </div>
                </div>
              </Card>
            ))}

            <div className="p-3 bg-red-100 rounded-md text-center font-semibold">TOTAL: {pageTotal}</div>
          </div>
        </section>

        {/* === B.Tech Lateral Entry (example: uses 1..6 sem + total) === */}
        <section>
          <h3 className="text-sm font-semibold mb-3">B.TECH LATERAL ENTRY</h3>

          <div className="overflow-x-auto border border-gray-200 rounded-md">
            <table className="min-w-full table-fixed text-sm">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-3 text-left">COURSES</th>
                  <th className="p-3 text-center">1ST SEM</th>
                  <th className="p-3 text-center">2ND SEM</th>
                  <th className="p-3 text-center">3RD SEM</th>
                  <th className="p-3 text-center">4TH SEM</th>
                  <th className="p-3 text-center">5TH SEM</th>
                  <th className="p-3 text-center">6TH SEM</th>
                  <th className="p-3 text-center">TOTAL</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {btechLateralPrograms.map((r, i) => (
                  <tr key={r.name} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="p-3">{r.name}</td>
                    <td className="p-3 text-center">{r.s1}</td>
                    <td className="p-3 text-center">{r.s2}</td>
                    <td className="p-3 text-center">{r.s3}</td>
                    <td className="p-3 text-center">{r.s4}</td>
                    <td className="p-3 text-center">{r.s5}</td>
                    <td className="p-3 text-center">{r.s6}</td>
                    <td className="p-3 text-center font-semibold">{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* === MAKAUT FEES === */}
        <section>
          <h3 className="text-sm font-semibold mb-3">MAKAUT UNIVERSITY FEES - 2025 - 2026</h3>
          <div className="overflow-x-auto border border-gray-200 rounded-md">
            <table className="min-w-full text-sm">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-3 text-left">PARTICULARS</th>
                  <th className="p-3 text-center">FEES (INR)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {makautRows.map((m, i) => (
                  <tr key={m.title} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="p-3">{m.title}</td>
                    <td className="p-3 text-center font-medium">{m.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* === BBA (6 semesters) === */}
        <section>
          <h3 className="text-sm font-semibold mb-3">GENERAL STUDENT FEES STRUCTURE — BBA</h3>

          <div className="overflow-x-auto border border-gray-200 rounded-md">
            <table className="min-w-full text-sm">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-3 text-left">PARTICULARS</th>
                  <th className="p-3 text-center">1ST SEM</th>
                  <th className="p-3 text-center">2ND SEM</th>
                  <th className="p-3 text-center">3RD SEM</th>
                  <th className="p-3 text-center">4TH SEM</th>
                  <th className="p-3 text-center">5TH SEM</th>
                  <th className="p-3 text-center">6TH SEM</th>
                  <th className="p-3 text-center">TOTAL</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {bbaRows.map((r, i) => (
                  <tr key={r.title} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="p-3">{r.title}</td>
                    <td className="p-3 text-center">{r.s1}</td>
                    <td className="p-3 text-center">{r.s2}</td>
                    <td className="p-3 text-center">{r.s3}</td>
                    <td className="p-3 text-center">{r.s4}</td>
                    <td className="p-3 text-center">{r.s5}</td>
                    <td className="p-3 text-center">{r.s6}</td>
                    <td className="p-3 text-center font-semibold">{r.total}</td>
                  </tr>
                ))}

                <tr className="bg-red-100">
                  <td className="p-3 font-semibold">TOTAL</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center font-bold">{pageTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* === Other Charges & Important Points === */}
        <section className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border rounded-md p-4">
            <h4 className="font-semibold mb-2">Other Charges</h4>
            <ul className="space-y-2 text-sm">
              {otherCharges.map((o) => (
                <li key={o.label} className="flex justify-between">
                  <span>{o.label}</span>
                  <strong className="text-rose-600">{o.amount}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[rgb(255,255,255)] border rounded-[8px] p-4 px-[50px] py-[16px]">
            <h4 className="font-semibold mb-2 text-[rgb(0,0,0)] text-[20px]">Important Points</h4>
            <ul className="list-disc pl-5 text-sm space-y-2  marker:text-red-500">
              <li>Fees once paid will not be refunded except as per policy.</li>
              <li>Hostel and transport charges are extra.</li>
              <li>Institute reserves the right to revise fee structure.</li>
            </ul>
          </div>
        </section>

        {/* === Bottom total band === */}
        <div className="bg-red-600 text-white p-4 rounded-md text-center font-semibold">
          TOTAL: <span className="ml-2">{pageTotal}</span>
        </div>
      </main>

      {/* Print helpers */}
      <style>{`
        @media print {
          a[href^="/assets/"] { display: none; }
          header { display: none; }
        }
      `}</style>
    </div>
  );
}

export default FeeStructure;
