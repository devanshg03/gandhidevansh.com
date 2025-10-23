"use client";

import React from "react";
import CursorIcon from "./cursor-icon";
import HoverCard from "./hover-card";

export default function CursorCitation(): React.ReactElement {
  return (
    <HoverCard
      href="https://www.cursor.com"
      className="align-top"
      content={
        <div className="min-w-56 max-w-64 text-left">
          <div className="mb-1 flex items-center gap-2">
            <CursorIcon size={16} className="text-black" />
            <span className="font-medium">Cursor</span>
          </div>
          <p className="text-left text-xs leading-snug text-black/70">
            AI-first code editor to build software faster with an integrated
            coding agent.
          </p>
        </div>
      }
    >
      <span className="text-[#279AF1] inline-flex items-center gap-1">
        @ <CursorIcon size={14} className="text-[#279AF1]" /> Cursor
      </span>
    </HoverCard>
  );
}
