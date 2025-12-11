import Link from "next/link";
import type { IconType } from "react-icons";

import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
  SiX,
  SiYoutube,
} from "react-icons/si";

import BackendImage from "@/components/BackendImage";

import { fetchGlobalPageData } from "@/dal/global";

export const socialIcons: { [k in SocialPlatform]: IconType } = {
  Facebook: SiFacebook,
  Twitter: SiX,
  LinkedIn: SiLinkedin,
  Instagram: SiInstagram,
  YouTube: SiYoutube,
  WhatsApp: SiWhatsapp,
  GitHub: SiGithub,
};

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const data = await fetchGlobalPageData();
  const currentYear = getCurrentYear();

  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-[#E63946] via-[#E63946] to-[#FF6B35] text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 size-96 rounded-full bg-[#FFB627] blur-3xl" />
        <div className="absolute bottom-0 left-0 size-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 md:gap-12 md:py-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-lg bg-white/15 p-0.5">
                <BackendImage
                  width="80"
                  height="80"
                  src={data.organizationLogo.url}
                  alt={data.organizationLogo.alternativeText}
                  className="size-10 shrink-0 object-contain sm:size-12 md:size-16"
                />
              </div>
              <div>
                <p className="text-pretty font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl">
                  {data.organizationName}
                </p>
                <p className="mt-1 text-[#FCBF49] text-xs md:text-sm">
                  {data.organizationSubtitle}
                </p>
              </div>
            </div>
            <p className="mb-6 text-sm text-white/80 leading-relaxed sm:text-base">
              {data.footerDescription}
            </p>
            <div className="grid grid-cols-1 gap-y-3 text-sm sm:text-base lg:grid-cols-1 lg:gap-x-3 xl:grid-cols-2 [@media(31.5rem<=width<64rem)]:grid-cols-2">
              <Link
                href={`tel:${data.contactNo}`}
                className="group flex items-center gap-3 text-white/80 transition-colors hover:text-[#FCBF49]"
              >
                <div className="shrink-0 rounded-lg bg-white/10 p-2.5 transition-colors group-hover:bg-[#f77f00]">
                  <LuPhone className="size-4 sm:size-5" />
                </div>
                <span>{data.contactNo}</span>
              </Link>
              <Link
                href={`mailto:${data.contactEmail}`}
                className="group flex items-center gap-3 text-white/80 transition-colors hover:text-[#FCBF49]"
              >
                <div className="shrink-0 rounded-lg bg-white/10 p-2.5 transition-colors group-hover:bg-[#f77f00]">
                  <LuMail className="size-4 sm:size-5" />
                </div>
                <span>{data.contactEmail}</span>
              </Link>
            </div>
          </div>

          <nav className="lg:col-span-3">
            <ul className="grid grid-cols-2 gap-y-8 sm:grid-cols-3">
              {data.footerColumns.map(({ documentId, title, items }) => (
                <li key={documentId}>
                  <p className="mb-6 border-[#FCBF49]/30 border-b pb-3 text-sm text-white sm:text-base">
                    {title}
                  </p>
                  <ul className="space-y-3">
                    {items.map(({ id, label, url }) => (
                      <li key={id}>
                        <Link
                          href={url?.url ?? "#"}
                          target={url?.newTab ? "_blank" : undefined}
                          rel={url?.newTab ? "noopener noreferrer" : undefined}
                          className="group flex items-center gap-2 text-white/80 text-xs transition-colors hover:text-[#FCBF49] sm:text-sm"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="col-span-1 mt-6 flex-col items-end space-y-2 md:col-span-2 md:flex lg:col-span-5">
          <Link
            href="https://maps.app.goo.gl/4UTi7mvbz5NhgV2f9"
            target="_blank"
            className="group flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-[#FCBF49] sm:text-base md:flex-row-reverse"
          >
            <div className="shrink-0 rounded-lg bg-white/10 p-2.5 transition-colors group-hover:bg-[#f77f00]">
              <LuMapPin className="size-4 sm:size-5" />
            </div>
            <span>{data.location}</span>
          </Link>
          <div className="w-full overflow-hidden rounded-lg border border-white/10">
            <iframe
              title="Ideal Institute of Engineering - Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2464781122567!2d88.451197296381!3d22.977962175663183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x83441321d4d1741d%3A0x94e5318316a55d40!2sIdeal%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1763480056835!5m2!1sen!2sin"
              className="h-48 w-full md:h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-white/10 border-t py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              {data.socialLinks
                .map((v) => ({ ...v, Icon: socialIcons[v.platform] }))
                .map(({ documentId, platform, url, Icon }) => (
                  <Link
                    key={documentId}
                    target="_blank"
                    title={platform}
                    href={url?.url ?? "#"}
                    className="group rounded-lg bg-white/10 p-2.5 backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    <Icon className="size-5 text-white/80 transition-colors group-hover:text-white" />
                  </Link>
                ))}
            </div>
            <p className="text-sm text-white/70">
              © {currentYear} {data.organizationName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
