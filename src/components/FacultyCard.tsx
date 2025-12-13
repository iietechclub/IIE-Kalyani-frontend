import Image from "next/image";
import { MotionDiv } from "./animated/motion";

interface FacultyCardProps {
  name: string;
  designation: string;
  department: string;
  specialization: string;
  email: string;
  phone: string;
  image?: string;
  tags?: string[];
}

export function FacultyCard({
  name,
  designation,
  department,
  specialization,
  //   email,
  //   phone,
  image,
  tags = [],
}: FacultyCardProps) {
  return (
    <MotionDiv
      whileHover={{
        scale: 1.03,
        y: -6,
        boxShadow: "0px 12px 32px rgba(0,0,0,0.35)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative h-[380px] w-full max-w-[260px] overflow-hidden rounded-[28px]"
      style={{
        boxShadow: "0px 8px 24px rgba(0,0,0,0.25)",
      }}
    >
      {/* Background Glass Layer */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      />

      {/* Faculty Image - Top 40% */}
      <div className="relative h-[40%] overflow-hidden">
        {image ? (
          <Image
            fill
            src={image}
            alt={name}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-linear-to-br from-primary to-red-500">
            <div
              className="text-6xl text-white"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: "bold" }}
            >
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
        )}

        {/* Gradient Overlay for Readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </div>

      {/* Faculty Details - Bottom 35% */}
      <div className="relative flex flex-col justify-between p-6">
        {/* Dark Gradient Background for Bottom Section */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,30,40,0.95) 0%, rgba(20,20,30,0.98) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Name and Designation */}
          <h3
            className="mb-1 truncate text-white"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: "bold",
              fontSize: "20px",
              textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {name}
          </h3>
          <p
            className="mb-1 text-sm text-white/80"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: "500",
              textShadow: "0px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            {designation}
          </p>
          <p
            className="mb-2 text-white/70 text-xs"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: "400",
              textShadow: "0px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            {department}
          </p>
          <p
            className="mb-3 line-clamp-2 text-white/60 text-xs"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: "400",
              textShadow: "0px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            {specialization}
          </p>

          {/* Tags/Pills Row */}
          {tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-white text-xs"
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: "400",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    textShadow: "0px 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </MotionDiv>
  );
}
