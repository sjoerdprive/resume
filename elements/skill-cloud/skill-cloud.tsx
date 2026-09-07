import { useLayoutEffect, useRef } from "react";
import { WordCloud } from "~/shared/components/word-cloud";

export function SkillCloud() {
  return (
    <WordCloud
      values={[
        {
          value: "Typescript",
          weight: 64,
        },
        {
          value: "React",
          weight: 64,
        },
        {
          value: "Tailwind",
          weight: 48,
        },
        {
          value: "Node.js",
          weight: 48,
        },
        {
          value: "NextJS",
          weight: 48,
        },
        {
          value: "Express",
          weight: 32,
        },
        {
          value: "Docker Compose",
          weight: 24,
        },
        {
          value: "Prisma",
          weight: 24,
        },
        {
          value: "A11y",
          weight: 48,
        },
      ]}
    />
  );
}
