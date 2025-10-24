import React from "react";
import DecisionsLabIcon from "./decisions-lab-icon";
import Citation from "./citation";

export default function DecisionsLabCitation(): React.ReactElement {
  return (
    <Citation
      href="https://decisionslab.io"
      name="Decisions Lab"
      description="Simulates your prospects' responses to find the perfect cold email for them."
      icon={DecisionsLabIcon}
    />
  );
}
