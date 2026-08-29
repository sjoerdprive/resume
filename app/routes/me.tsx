import { MePage } from "~/pages/me";
import type { Route } from "./+types/me";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Me() {
  return <MePage />;
}
