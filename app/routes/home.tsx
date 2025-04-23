import type { Route } from "./+types/home";
import { Landing } from "../welcome/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "2nd Algorithy" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Landing/>;
}
