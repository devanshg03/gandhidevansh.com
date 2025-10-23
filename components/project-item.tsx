"use client";

import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectCardProps } from "@/types/project";

export function ProjectCard({
  title,
  subtitle,
  image,
  url,
}: ProjectCardProps): React.JSX.Element {
  const [isPending, startTransition] = useTransition();
  const [isExpanding, setIsExpanding] = useState(false);
  const [cardStyle, setCardStyle] = useState<React.CSSProperties>({});
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      // Set initial position
      setCardStyle({
        position: "fixed",
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      });

      // Force reflow to apply initial styles
      cardRef.current.offsetHeight;

      setIsExpanding(true);

      startTransition(() => {
        setTimeout(() => {
          window.location.href = url;
        }, 600);
      });
    }
  };

  return (
    <Link
      ref={cardRef}
      href={url}
      onClick={handleClick}
      style={isExpanding ? cardStyle : undefined}
      className={`project-card block bg-white border border-black/8 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:border-6 ${
        isExpanding ? "project-card-expanding" : ""
      }`}
    >
      <div className="p-4 md:p-6">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h4 className="text-lg text-[#111]">{title}</h4>
            <p className="text-xs text-[#666] mt-1">{subtitle}</p>
          </div>
          <div className="inline-flex items-center h-8 px-3 rounded-lg border border-black/10 bg-white text-black text-sm hover:bg-black/5 transition-all duration-200">
            → Take a look
          </div>
        </div>
      </div>

      <div className="px-4 md:px-6">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-black/20">
          <Image
            src={image}
            alt={`Preview image for ${title} - ${subtitle}`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
}
