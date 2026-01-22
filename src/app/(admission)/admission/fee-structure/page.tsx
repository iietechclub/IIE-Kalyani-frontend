import Link from "next/link";
import {
  LuDollarSign,
  LuDownload,
  // LuInfo
} from "react-icons/lu";
import GithubImage from "@/components/GithubImage";
// import { Alert, AlertDescription } from "@/components/ui/alert";
import { fetchFeeStructurePageData } from "@/dal/fee-structure";
import { urlFromBackend } from "@/lib/utils";
// import { Card } from "@/components/ui/card";

/**
 * Full FeeStructure page
 * - Header kept unchanged
 * - Table headings in red
 * - B.Tech: 1st sem .. 8th sem + TOTAL
 * - B.Tech Lateral: 1st sem .. 6th sem + TOTAL (example)
 * - BBA: 1st sem .. 6th sem + TOTAL
 * - Exports both named and default to avoid import errors
 */

export default async function FeeStructurePage() {
  const {
    important_notes,
    general_fees_btech,
    general_fees_btech_lateral_entry,
    makaut_fees_btech_and_btech_lateral_entry,
    general_fees_bba,
    total,
    fees_structure_pdf,
  } = await fetchFeeStructurePageData();

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header (keep unchanged) */}
      <header className="relative overflow-hidden py-12 text-white sm:py-20">
        <GithubImage
          fill
          src="(admission)/admission/fee-structure/banner.jpg"
          alt="Fee Structure Banner"
          className="object-cover"
          preload
        />

        {/* Blur + Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                <LuDollarSign className="size-10" />
              </div>
              <div>
                <h1 className="font-extrabold text-2xl tracking-tight sm:text-3xl">
                  Fee Structure
                </h1>
                <p className="mt-1 max-w-xl text-rose-100 text-sm sm:text-base">
                  As per Govt. of West Bengal norms — fee schedule & components
                  for the academic year.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={urlFromBackend(fees_structure_pdf.url)}
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-rose-600 shadow transition hover:shadow-lg"
                aria-label="Download Fee Brochure"
              >
                <LuDownload className="size-4" />
                View &amp; Download Fees
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Important notes */}
      {/* <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <Alert className="border border-gray-200 bg-gray-50">
          <LuInfo className="h-5 w-5 text-red-600" />
          <AlertDescription className="text-gray-700 text-sm">
            <strong>Important Notes:</strong> Academic fees are to be paid by
            Demand Draft / Online transfer in favour of "Ideal Institute of
            Engineering". Hostel & transport charges are extra. Fees are subject
            to change as per Govt/University directives.
          </AlertDescription>
        </Alert>
      </div> */}

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-xl border bg-[rgb(255,255,255)] p-4 px-[50px] py-4">
          <h3 className="mb-2 font-semibold text-[20px] text-[rgb(0,0,0)]">
            Important Notes
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm marker:text-red-500">
            {important_notes.map((note) => (
              <li key={note.id}>{note.text}</li>
            ))}
          </ul>
        </div>

        {/* Page content */}
        <p className="mb-3 text-center font-semibold text-base">
          GENERAL STUDENT FEES STRUCTURE — THE ACADEMIC YEAR : (2025 - 2026)
        </p>

        {/* === B.Tech (1st sem .. 8th sem) === */}
        <section>
          <h2 className="mb-3 font-semibold text-base">B.TECH</h2>

          <div className="overflow-x-auto rounded-md border border-gray-200">
            <table className="min-w-full table-fixed text-sm">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="w-1/3 p-3 text-left">COURSES</th>
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
                {general_fees_btech.rows.map((cols, idx) => (
                  <tr
                    key={cols[0]}
                    className={idx % 2 === 0 ? "" : "bg-gray-50"}
                  >
                    <td className="p-3 align-top">{cols[0]}</td>
                    <td className="p-3 text-center">{cols[1]}</td>
                    <td className="p-3 text-center">{cols[2]}</td>
                    <td className="p-3 text-center">{cols[3]}</td>
                    <td className="p-3 text-center">{cols[4]}</td>
                    <td className="p-3 text-center">{cols[5]}</td>
                    <td className="p-3 text-center">{cols[6]}</td>
                    <td className="p-3 text-center">{cols[7]}</td>
                    <td className="p-3 text-center">{cols[8]}</td>
                    <td className="p-3 text-center font-semibold">{cols[9]}</td>
                  </tr>
                ))}

                {/* <tr className="bg-red-100">
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
                </tr> */}
              </tbody>
            </table>
          </div>
        </section>

        {/* === B.Tech (1st sem .. 8th sem) === */}
        {/* <section>
          <h2 className="mb-3 font-semibold text-base">
            GENERAL STUDENT FEES STRUCTURE — THE ACADEMIC YEAR : (2025 - 2026)
          </h2>

          <div className="overflow-x-auto rounded-md border border-gray-200">
            <table className="min-w-full table-fixed text-sm">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="w-1/3 p-3 text-left">COURSES</th>
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
                  <tr
                    key={p.name}
                    className={idx % 2 === 0 ? "" : "bg-gray-50"}
                  >
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

          {/* mobile stacked view * /}
          <div className="mt-4 space-y-3 lg:hidden">
            {btechPrograms.map((p) => (
              <Card key={p.name} className="p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{p.name}</div>
                  <div className="font-semibold text-rose-600">{p.total}</div>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2 text-gray-700 text-xs">
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

            <div className="rounded-md bg-red-100 p-3 text-center font-semibold">
              TOTAL: {pageTotal}
            </div>
          </div>
        </section> */}

        {/* === B.Tech Lateral Entry (example: uses 1..6 sem + total) === */}
        <section>
          <h3 className="mb-3 font-semibold text-sm">B.TECH LATERAL ENTRY</h3>

          <div className="overflow-x-auto rounded-md border border-gray-200">
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
                  <th className="p-3 text-center">7TH SEM</th>
                  <th className="p-3 text-center">8TH SEM</th>
                  <th className="p-3 text-center">TOTAL</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {general_fees_btech_lateral_entry.rows.map((cols, i) => (
                  <tr key={cols[0]} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="p-3">{cols[0]}</td>
                    <td className="p-3 text-center">{cols[1]}</td>
                    <td className="p-3 text-center">{cols[2]}</td>
                    <td className="p-3 text-center">{cols[3]}</td>
                    <td className="p-3 text-center">{cols[4]}</td>
                    <td className="p-3 text-center">{cols[5]}</td>
                    <td className="p-3 text-center">{cols[6]}</td>
                    <td className="p-3 text-center">{cols[7]}</td>
                    <td className="p-3 text-center">{cols[8]}</td>
                    <td className="p-3 text-center font-semibold">{cols[9]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* === MAKAUT FEES === */}
        <section>
          <p className="mb-3 text-center font-semibold text-base">
            MAKAUT UNIVERSITY FEES - 2025 - 2026
          </p>
          <h3 className="mb-3 font-semibold text-sm">
            B.TECH & B. TECH LATERAL ENTRY
          </h3>
          <div className="overflow-x-auto rounded-md border border-gray-200">
            <table className="min-w-full text-sm">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-3 text-left">PARTICULARS</th>
                  <th className="p-3 text-center">3RD SEM</th>
                  <th className="p-3 text-center">4TH SEM</th>
                  <th className="p-3 text-center">5TH SEM</th>
                  <th className="p-3 text-center">6TH SEM</th>
                  <th className="p-3 text-center">7TH SEM</th>
                  <th className="p-3 text-center">8TH SEM</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {/* {makautRows.map((m, i) => (
                  <tr key={m.title} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="p-3">{m.title}</td>
                    <td className="p-3 text-center font-medium">{m.fee}</td>
                  </tr>
                ))} */}
                {makaut_fees_btech_and_btech_lateral_entry.rows.map(
                  (cols, i) => (
                    <tr
                      key={`${cols[0]}-${i}`}
                      className={i % 2 === 0 ? "" : "bg-gray-50"}
                    >
                      <td className="p-3 align-top">{cols[0]}</td>
                      <td className="p-3 text-center">{cols[1]}</td>
                      <td className="p-3 text-center">{cols[2]}</td>
                      <td className="p-3 text-center">{cols[3]}</td>
                      <td className="p-3 text-center">{cols[4]}</td>
                      <td className="p-3 text-center">{cols[5]}</td>
                      <td className="p-3 text-center">{cols[6]}</td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* === BBA (6 semesters) === */}
        <section>
          <h3 className="mb-3 font-semibold text-sm">
            GENERAL STUDENT FEES STRUCTURE: (2025 - 2026) — BBA
          </h3>

          <div className="overflow-x-auto rounded-md border border-gray-200">
            <table className="min-w-full text-sm">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-3 text-left">PARTICULARS</th>
                  <th className="p-3 text-center" colSpan={8}>
                    SEMESTER WISE FEES
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="divide-x divide-neutral-200">
                  <th className="p-3 text-left">Year</th>
                  <td className="p-3 text-center" colSpan={2}>
                    1ST YEAR
                  </td>
                  <td className="p-3 text-center" colSpan={2}>
                    2ND YEAR
                  </td>
                  <td className="p-3 text-center" colSpan={2}>
                    3RD YEAR
                  </td>
                  <td className="p-3 text-center" colSpan={2}>
                    4TH YEAR
                  </td>
                </tr>
                <tr className="divide-x divide-neutral-200 border-neutral-200 border-y bg-gray-50">
                  <th className="p-3 text-left">SEMESTER</th>
                  <td className="p-3 text-center">1ST SEM</td>
                  <td className="p-3 text-center">2ND SEM</td>
                  <td className="p-3 text-center">3RD SEM</td>
                  <td className="p-3 text-center">4TH SEM</td>
                  <td className="p-3 text-center">5TH SEM</td>
                  <td className="p-3 text-center">6TH SEM</td>
                  <td className="p-3 text-center">7TH SEM</td>
                  <td className="p-3 text-center">8TH SEM</td>
                </tr>

                {general_fees_bba.rows.map((cols, i) => (
                  <tr key={cols[0]} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="p-3">{cols[0]}</td>
                    <td className="p-3 text-center">{cols[1]}</td>
                    <td className="p-3 text-center">{cols[2]}</td>
                    <td className="p-3 text-center">{cols[3]}</td>
                    <td className="p-3 text-center">{cols[4]}</td>
                    <td className="p-3 text-center">{cols[5]}</td>
                    <td className="p-3 text-center">{cols[6]}</td>
                    <td className="p-3 text-center">{cols[7]}</td>
                    <td className="p-3 text-center">{cols[8]}</td>
                  </tr>
                ))}

                {/* <tr className="bg-red-100">
                  <td className="p-3 font-semibold">TOTAL</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center">—</td>
                  <td className="p-3 text-center font-bold">{pageTotal}</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </section>

        {/* === Other Charges & Important Points === */}
        {/* <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md border bg-white p-4">
            <h4 className="mb-2 font-semibold">Other Charges</h4>
            <ul className="space-y-2 text-sm">
              {otherCharges.map((o) => (
                <li key={o.label} className="flex justify-between">
                  <span>{o.label}</span>
                  <strong className="text-rose-600">{o.amount}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-[rgb(255,255,255)] p-4 px-[50px] py-4">
            <h4 className="mb-2 font-semibold text-[20px] text-[rgb(0,0,0)]">
              Important Points
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-sm marker:text-red-500">
              {importantNotes.map((note, idx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: not important here
                <li key={`${note}_${idx}`}>{note}</li>
              ))}
            </ul>
          </div>
        </section> */}

        {/* === Bottom total band === */}
        <div className="rounded-md bg-red-600 p-4 text-center font-semibold text-white">
          TOTAL:{" "}
          <span className="ml-2">{Number(total).toLocaleString("en-IN")}</span>
        </div>
      </div>

      {/* Print helpers */}
      <style>{`
        @media print {
          a[href^="/assets/"] { display: none; }
          header { display: none; }
        }
      `}</style>
    </main>
  );
}
