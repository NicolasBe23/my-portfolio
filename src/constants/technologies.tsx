import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiExpo,
  SiDocker,
} from "react-icons/si";

export const techLogos = [
  {
    node: <SiReact className="text-white" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiExpo className="text-white" />,
    title: "Expo",
    href: "https://expo.dev",
  },
  {
    node: <SiNextdotjs className="text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiNodedotjs className="text-white" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiTypescript className="text-white" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss className="text-white" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiPostgresql className="text-white" />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiDocker className="text-white" />,
    title: "Docker",
    href: "https://www.docker.com",
  },
];

export const techStack = [
  "React",
  "React Native",
  "Next",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
];
