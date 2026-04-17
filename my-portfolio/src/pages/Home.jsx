import React from "react";
import Main from "./../components/main";

export default function Home() {
  const engineeringSkills = [
    "TypeScript",
    "Python",
    "React",
    "Flutter",
    "MySQL",
    "MongoDB",
    "Firebase",
  ];
  const productSkills = ["Figma", "UI/UX",];

  return (
    <Main engineeringSkills={engineeringSkills} productSkills={productSkills} />
  );
}
