import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchGlobalPageData } from "@/dal/global";

export default async function Footer() {
  const data = await fetchGlobalPageData();

  const socialIcons = {
    Facebook: Facebook,
    YouTube: Youtube,
    Linkedin: Linkedin,
    Instagram: Instagram,
    Twitter: Twitter,
    WhatsApp: MessageCircle,
  };

  const fallbackImg = "/favicon.png";
  const currentYear = "2025";
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#E63946] via-[#E63946] to-[#FF6B35] text-white">
      {/* Background decoration */}

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#FFB627] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 md:gap-12 md:py-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 md:h-20 md:w-20">
                <Image
                  src={data.logoImage.url ? data.logoImage.url : fallbackImg}
                  alt={data.logoImage.alternativeText}
                  className="h-16 w-16 object-contain md:h-20 md:w-20"
                />
              </div>
              <div>
                <h3
                  className="text-white"
                  style={{ fontSize: "1.7rem", lineHeight: "1.2" }}
                >
                  {data.logoTitle}
                </h3>
                <p className="mt-1 text-[#FCBF49] text-sm">
                  {data.logoSubtitle}
                </p>
              </div>
            </div>
            <p className="mb-6 text-white/80 leading-relaxed">
              {data.footerDescription}
            </p>
            <div className="space-y-3">
              <Link
                href={`tel:${data.contactNo}`}
                className="group flex items-center gap-3 text-white/80 transition-colors hover:text-[#FCBF49]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-[#F77F00]">
                  <Phone className="h-5 w-5" />
                </div>
                <span>{data.contactNo}</span>
              </Link>
              <Link
                href={`mailto:${data.contactEmail}`}
                className="group flex items-center gap-3 text-white/80 transition-colors hover:text-[#FCBF49]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-[#F77F00]">
                  <Mail className="h-5 w-5" />
                </div>
                <span>{data.contactEmail}</span>
              </Link>
              <Link
                href="https://maps.app.goo.gl/4UTi7mvbz5NhgV2f9"
                className="group flex items-center gap-3 text-white/80 transition-colors hover:text-[#FCBF49]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-[#F77F00]">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>{data.locationTitle}</span>
              </Link>
            </div>
          </div>

          {data.footerColumns.map((m) => (
            <div className="menu" key={m.documentId}>
              <div>
                <h4 className="mb-6 border-[#FCBF49]/30 border-b pb-3 text-white">
                  {m.title}
                </h4>
                <ul className="space-y-3">
                  {m.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.url?.url ? item.url.url : ""}
                        target={item.url?.newTab ? "_blank" : "_self"}
                        className="group flex items-center gap-2 text-white/80 transition-colors hover:text-[#FCBF49]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          id="location"
          className="col-span-1 mt-6 md:col-span-2 lg:col-span-5"
        >
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
              {data.socialLinks.map((item) => {
                const Icon = socialIcons[item.platform];
                return (
                  <Link
                    key={item.documentId}
                    href={item.url?.url ? item.url.url : ""}
                    className="group flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    <Icon className="h-5 w-5 text-white/80 transition-colors group-hover:text-white" />
                  </Link>
                );
              })}
            </div>
            <p className="text-sm text-white/70">
              ©{currentYear} Ideal Institute of Engineering. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
