"use client";

import React from "react";
import HoverCard from "./hover-card";

type CitationProps = {
  href: string;
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>;
  linkColor?: string;
};

export default function Citation({
  href,
  name,
  description,
  icon: Icon,
  linkColor = "#279AF1",
}: CitationProps): React.ReactElement {
  return (
    <HoverCard
      href={href}
      className="align-top"
      content={
        <div className="min-w-56 max-w-64 text-left">
          <div className="mb-1 flex items-center gap-1">
            <Icon size={16} className="text-black" />
            <span className="font-medium">{name}</span>
          </div>
          <p className="text-left text-xs leading-snug text-black/70">
            {description}
          </p>
        </div>
      }
    >
      <span
        className="inline-flex items-center gap-1"
        style={{ color: linkColor }}
      >
        @ <Icon size={14} style={{ color: linkColor }} /> {name}
      </span>
    </HoverCard>
  );
}
