import type { Route } from "./+types/skills";
import { SkillsPage } from "~/pages/skills";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Skills() {
  return <SkillsPage />;
}
