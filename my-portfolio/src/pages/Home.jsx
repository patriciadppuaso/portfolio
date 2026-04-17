import React from "react";
import Main from "./../components/main";

export default function Home() {
  const engineeringSkills = [
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];
  const productSkills = ["Figma", "UI/UX", "SEO Arch", "Market Ops"];

  return (
    <Main engineeringSkills={engineeringSkills} productSkills={productSkills} />
  );
}
