// All portfolio content lives here, separate from presentation.
// Sourced from Akrem Sedki's CV. French copy has been translated and
// tightened for a portfolio audience.

export const profile = {
  name: "Akrem Sedki",
  role: "Game Development Engineer",
  focus: "VR Systems & Interactive Experiences",
  location: "Mahdia, Ksour Essef — Tunisia",
  email: "AkremSedki21@gmail.com",
  phone: "+216 28 198 724",
  tagline:
    "I build high-performance game systems and VR experiences — from therapeutic tools for children to XR training simulations.",
  bio: "I'm a Game Development Engineer working across Unity3D , with a focus on graphics programming and performance optimization. My interest sits at the intersection of technical precision and player experience: systems that stay smooth under pressure, and interactions that feel intentional.",
};

// Projects are the centerpiece of the portfolio — ordered with the
// strongest, most complete work first.
export const projects = [
  {
    id: "draw-to-grow",
    name: "Draw to Grow",
    category: "VR · Therapeutic",
    year: "2025",
    context: "Final-Year Project — Inheated Games",
    preview: "/images/draw-to-grow.svg",
    description:
      "A therapeutic VR game that helps children improve fine motor skills through guided drawing and tracing exercises. Built to turn a clinical exercise into something a child actually wants to do.",
    stack: ["Unity", "C#", "VR"],
    featured: true,
  },
  {
    id: "islamic-board-game",
    name: "Heritage Board",
    category: "Mobile · Educational",
    year: "2026",
    context: "Graduation Project — Horizon Education",
    preview: "/images/heritage-board.svg",
    description:
      "An educational Islamic board game in Unity 3D, designed to teach religious knowledge through play. Includes a full turn system, dice mechanics, spline-based movement, and event management for branching board outcomes.",
    stack: ["Unity3D", "C#", "Mobile"],
    featured: true,
  },
  {
    id: "chemlab",
    name: "ChemLab",
    category: "VR · Simulation",
    year: "Self-directed",
    context: "Independent Project",
    preview: "/images/chemlab.svg",
    description:
      "A VR chemistry lab simulation that lets students handle and combine elements hands-on, without any real-world hazard. Built to make abstract chemistry tactile.",
    stack: ["Unity", "C#", "VR"],
    featured: false,
  },
  {
    id: "slash",
    name: "Slash",
    category: "Arcade",
    year: "Self-directed",
    context: "Independent Project",
    preview: "/images/slash.svg",
    description:
      "A fast-paced color-matching arcade game — eliminate monsters of the same color to score. Designed around tight movement, attack, and parameter systems for quick, replayable sessions.",
    stack: ["Unity", "C#"],
    featured: false,
  },
  {
    id: "shooting-range",
    name: "Shooting Range",
    category: "VR · Training",
    year: "Self-directed",
    context: "Independent Project",
    preview: "/images/shooting-range.svg",
    description:
      "An optimized VR shooting range built on XR Interaction Toolkit, with Addressables and object pooling to keep long training sessions smooth and stutter-free.",
    stack: ["Unity", "XR Toolkit", "Addressables"],
    featured: false,
  },
];

// Professional / academic placements, most recent first.
export const experience = [
  {
    role: "Unity Developer",
    org: "Horizon Education",
    period: "2026",
    tag: "Graduation Project (PFE)",
    description:
      "Developed an educational Islamic board game in Unity 3D — turn-based systems, dice rolls, spline movement, and event management for an interactive learning experience.",
  },
  {
    role: "VR Developer",
    org: "Inheated Games",
    period: "2025",
    tag: "Final-Year Project (PFA)",
    description:
      "Built \"Draw to Grow,\" a therapeutic VR game helping children develop fine motor skills through drawing and tracing, using Unity and C#.",
  },
];

export const education = [
  {
    degree: "National Engineering Diploma",
    institution: "EPI — Sousse",
    period: "2023 – 2026",
    note: "In progress",
  },
  {
    degree: "Integrated Preparatory Cycle",
    institution: "Institut Supérieur de l'Informatique et Multimédia — Gabès",
    period: "2021 – 2023",
  },
  {
    degree: "Baccalauréat, Technology Track",
    institution: "Lycée Ksour Essef",
    period: "2021",
  },
];

// Skills grouped by category, ordered by relevance to the role.
export const skillGroups = [
  {
    label: "Game Engines & Tools",
    items: ["Unity3D", "Unreal Engine", "Blender", "Visual Studio", "Git"],
  },
  {
    label: "Programming Languages",
    items: ["C++", "C#", "Python", "JavaScript", "SQL"],
  },
  {
    label: "Web Development",
    items: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    label: "Creative Software",
    items: ["Photoshop", "After Effects", "Premiere Pro"],
  },
];

export const spokenLanguages = ["Arabic", "English", "French"];

// No certifications or awards were listed on the source CV.
// Intentionally omitted rather than fabricated — add here when available.
export const certifications = [];
