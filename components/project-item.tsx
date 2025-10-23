import React from "react";
import Image from "next/image";
import type { ProjectCardProps } from "@/types/project";

export function ProjectCard({
  title,
  subtitle,
  image,
  url,
}: ProjectCardProps): React.JSX.Element {
  return (
    <div className="surface-card p-5 md:p-6">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h4 className="text-sm text-[#111]">{title}</h4>
          <p className="text-xs text-[#666] mt-1">{subtitle}</p>
        </div>
        <a
          href={url}
          className="inline-flex items-center h-8 px-3 rounded-full border border-black/10 bg-white text-black text-sm hover:bg-black/5"
        >
          → Take a look
        </a>
      </div>

      <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg bg-black/20">
        <Image
          src={image}
          alt={`Preview image for ${title} - ${subtitle}`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
