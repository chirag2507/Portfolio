const config = {
  title: "Chirag Kumar | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Chirag Kumar, a full-stack developer specializing in TypeScript, Node.js, real-time web apps, and Generative AI. Discover CodePlanner, HealthCura, Blah Blah, and more.",
    short:
      "Portfolio of Chirag Kumar — full-stack developer building scalable backends, real-time apps, and GenAI products.",
  },
  keywords: [
    "Chirag",
    "Chirag Kumar",
    "portfolio",
    "full-stack developer",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "CodePlanner",
    "HealthCura",
    "Blah Blah",
    "Generative AI",
    "Gemini",
    "GitHub",
  ],
  author: "Chirag Kumar",
  email: "chiragrachhoya2507@gmail.com",
  site: "http://localhost:3000",

  // GitHub stars button in the header — flagship project
  githubUsername: "chirag2507",
  githubRepo: "CodePlanner",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    github: "https://github.com/chirag2507",
    leetcode: "https://leetcode.com/u/chirag2507/",
  },
};
export { config };
