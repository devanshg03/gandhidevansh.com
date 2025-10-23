"use client";

import React from "react";
import DecisionsLabIcon from "./decisions-lab-icon";
import HoverCard from "./hover-card";

export default function DecisionsLabCitation(): React.ReactElement {
  return (
    <HoverCard
      href="https://decisionslab.io"
      className="align-top"
      content={
        <div className="min-w-56 max-w-64 text-left">
          <div className="mb-1 flex items-center gap-2">
            <DecisionsLabIcon size={16} className="text-black" />
            <span className="font-medium">Decisions Lab</span>
          </div>
          <p className="text-left text-xs leading-snug text-black/70">
            Simulates your prospects' responses to find the perfect cold email
            for them.
          </p>
        </div>
      }
    >
      <span className="text-[#279AF1] inline-flex items-center gap-1">
        @ <DecisionsLabIcon size={14} className="text-[#279AF1]" /> Decisions
        Lab
      </span>
    </HoverCard>
  );
}
