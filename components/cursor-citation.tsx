import React from "react";
import CursorIcon from "./cursor-icon";
import Citation from "./citation";

export default function CursorCitation(): React.ReactElement {
  return (
    <Citation
      href="https://www.cursor.com"
      name="Cursor"
      description="AI-first code editor to build software faster with an integrated coding agent."
      icon={CursorIcon}
    />
  );
}
