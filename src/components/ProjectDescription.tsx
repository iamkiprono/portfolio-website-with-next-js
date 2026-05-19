"use client";

import { useState } from "react";

export default function ProjectDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-sm text-muted-foreground">
      <p className={expanded ? "" : "line-clamp-2"}>{text}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs font-medium text-foreground/60 hover:text-foreground mt-1 transition-colors"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
