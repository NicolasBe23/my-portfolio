import { FileUser, Github, Linkedin, Mail, Phone } from "lucide-react";

export const headerSocialLinks = [
  {
    href: "https://github.com/NicolasBe23",
    icon: <Github size={18} />,
    tooltipKey: "tooltip.github",
  },
  {
    href: "https://www.linkedin.com/in/nicolas-bezerra/",
    icon: <Linkedin size={18} />,
    tooltipKey: "tooltip.linkedin",
  },
  {
    href: "mailto:nicolasbezerra23@gmail.com",
    icon: <Mail size={18} />,
    tooltipKey: "tooltip.email",
  },
];

export const footerSocialLinks = [
  {
    href: "https://github.com/NicolasBe23",
    icon: <Github size={18} />,
    tooltipKey: "tooltip.github",
  },
  {
    href: "https://www.linkedin.com/in/nicolas-bezerra/",
    icon: <Linkedin size={18} />,
    tooltipKey: "tooltip.linkedin",
  },
  {
    href: "mailto:nicolasbezerra23@gmail.com",
    icon: <Mail size={18} />,
    tooltipKey: "tooltip.email",
  },
  {
    href: "/pdf/Resume_-_Nicolas_Silva.pdf",
    icon: <FileUser size={18} />,
    tooltipKey: "tooltip.download",
  },
  {
    href: "tel:+351968899318",
    icon: <Phone size={18} />,
    tooltipKey: "tooltip.phone",
  },
];
