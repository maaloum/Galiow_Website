/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";

// Portfolio Img Imports
import Insurance from "../assets/images/Portfolio/login.jpg";
import Recruiting from "../assets/images/Portfolio/Recruiting.png";
import Stream from "../assets/images/Portfolio/Stream.png";
import Freelance from "../assets/images/Portfolio/Freelance.png";
import Aura from "../assets/images/Portfolio/Aura.png";
import Surtido from "../assets/images/Portfolio/Surtido.png";
import ManagementApp from "../assets/images/Portfolio/ManagementApp.png";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/Sasha.jpg";
import Reiner from "../assets/images/Testimonials/Reiner.jpg";
import Kruger from "../assets/images/Testimonials/Kruger.jpg";

// TeamMembers
import CEO from "../assets/images/TeamMembers/CEO.jpg";
import HRD from "../assets/images/TeamMembers/HRD.jpg";
import Finance from "../assets/images/TeamMembers/Finance.jpg";
import ProjectManager from "../assets/images/TeamMembers/Project-manager.jpg";
import Frontend1 from "../assets/images/TeamMembers/Frontend1.jpg";
import Frontend2 from "../assets/images/TeamMembers/Frontend2.jpg";
import Backend1 from "../assets/images/TeamMembers/Backend1.jpg";
import Backend2 from "../assets/images/TeamMembers/Backend2.jpg";
import Mobile1 from "../assets/images/TeamMembers/Mobile1.jpg";
import Mobile2 from "../assets/images/TeamMembers/Mobile2.jpg";
import UIUX1 from "../assets/images/TeamMembers/UIUX1.jpg";
import UIUX2 from "../assets/images/TeamMembers/UIUX2.jpg";

export const Services = [
  {
    title: "Web Development",
    imageUrl: Web,
    animation: "left",
    description:
      "Custom web applications and responsive websites built with modern technologies.",
  },
  {
    title: "Mobile Development",
    imageUrl: Mobile,
    animation: "up",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    title: "UI/UX Design",
    imageUrl: UIUX,
    animation: "right",
    description:
      "User-centered design solutions that enhance user experience and engagement.",
  },
  {
    title: "Custom Software Development",
    imageUrl: Web,
    animation: "left",
    description:
      "Tailored software solutions designed to meet your specific business needs.",
  },
  {
    title: "Audit & IT Consulting Services",
    imageUrl: UIUX,
    animation: "up",
    description:
      "Comprehensive IT audits and strategic consulting to optimize your technology infrastructure.",
  },
  {
    title: "Infrastructure & System Support",
    imageUrl: Mobile,
    animation: "right",
    description:
      "Reliable IT infrastructure management and 24/7 system support services.",
  },
];

export const Portfolios = [
  {
    id: "insurance-platform-2025",
    title: "Insurance Agency Digital Platform",
    imageUrl: Insurance,
    type: "Web Platform",
    status: "Under Development",
    deliveryDate: "June 2025",
    client: "Classic Insurance Agency",
    location: "Maryland, USA",
    technologies: [
      "Java 22",
      "Spring Boot 3.x",
      "Spring Data JPA + Hibernate",
      "PostgreSQL",
      "Spring Security + JWT",
      "Maven",
      "Docker + Docker Compose",
      "Spring Devtools",
      "Lombok",
      "Logback / SLF4J",
      "JUnit 5 + Mockito",
      "Git/GitHub",
    ],
    highlights: [
      "Modern Java-based tech stack",
      "Secure microservices architecture",
      "Scalable and resilient platform",
      "Streamlined internal operations",
      "Enhanced customer experience",
      "Integrated marketing strategy",
    ],
    requirements: [
      "Digitize internal operations",
      "Modern customer portal",
      "Third-party insurer integration",
      "Maximum data security",
      "Digital marketing optimization",
    ],
    expectedResults: [
      "Automated internal operations",
      "Optimized customer experience",
      "Partner insurer integration",
      "Robust security measures",
      "Revenue growth optimization",
      "Future scalability",
    ],
    responsibility: [
      "Web Development",
      "System Architecture",
      "Security Implementation",
      "Integration Services",
    ],
  },
  {
    id: "asd1293uasdads1",
    title: "Recruiting App",
    imageUrl: Recruiting,
    type: "Mobile Apps",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "",
  },
  {
    id: "asd1293uhjkhkjh2",
    title: "Stream+",
    imageUrl: Stream,
    type: "Mobile Apps",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "",
  },
  {
    id: "asd1293ufgdfgs4",
    title: "Aura",
    imageUrl: Aura,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "",
  },
  {
    id: "asd1293ulskmnb5",
    title: "Galiow Surtido",
    imageUrl: Surtido,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "",
  },
  {
    id: "asd1293ulkmnbj6",
    title: "Courses Management",
    imageUrl: ManagementApp,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit:
      "",
  },
];

export const Advantages = [
  [
    {
      title: "Communicative",
      description:
        "We communicate our project ideas and progress to make it clear.",
      imageUrl: Communicative,
    },
    {
      title: "Management",
      description:
        "We manage our project properly to make our project done well.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "Collaborative​",
      description:
        "Our team are very collaborative to make our project done well.",
      imageUrl: Collaborative,
    },
    {
      title: "Favorite",
      description: "We've did so many project and all of our client love it.",
      imageUrl: Favorite,
    },
  ],
];
export const Testimonials = [
  {
    id: 1,
    name: "Sasha West",
    company: "CTO, BrightBank",
    testimoni:
      "Galiow has been instrumental in streamlining our core banking software. Their attention to detail and reliable maintenance support are unmatched.",
    imageUrl: Sasha, // Replace with your actual image import
  },
  {
    id: 2,
    name: "Kruger Osei",
    company: "Founder, MediSync Solutions",
    testimoni:
      "We partnered with Galiow to modernize our healthcare platform, and they delivered beyond expectations. Fast, secure, and future-ready.",
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: "Reiner Al-Farsi",
    company: "COO, EduNexa",
    testimoni:
      "From development to ongoing maintenance, Galiow has been a trusted tech partner. Their team is responsive, professional, and deeply knowledgeable.",
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: "Marien Baliotecha",
    position: "CEO",
    imageUrl: CEO,
  },
  {
    name: "Maaloum Ely Cheick",
    position: "Technical Lead",
    imageUrl: HRD,
  },
  {
    name: "Junior",
    position: "Support Lead",
    imageUrl: Finance,
  },
  {
    name: "Maina Okumu",
    position: "Marketing Lead",
    imageUrl: ProjectManager,
  },
];

export const Technologies = [
  {
    id: "web",
    name: "Web Platform",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Vue.js", icon: "🟢" },
      { name: "Angular", icon: "🅰️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Node.js", icon: "🟩" },
      { name: "Django", icon: "🐍" },
      { name: "Spring", icon: "🌱" },
    ],
  },
  {
    id: "database",
    name: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🔴" },
      { name: "Firebase", icon: "🔥" },
      { name: "DynamoDB", icon: "⚡" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🌩️" },
      { name: "Google Cloud", icon: "GCP" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⚓" },
      { name: "Terraform", icon: "🏗️" },
      { name: "Jenkins", icon: "🤖" },
      { name: "GitHub Actions", icon: "⚡" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    technologies: [
      { name: "React Native", icon: "⚛️" },
      { name: "Flutter", icon: "🦋" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "📱" },
      { name: "Android", icon: "🤖" },
      { name: "iOS", icon: "📱" },
    ],
  },
  {
    id: "other",
    name: "Other Frameworks",
    technologies: [
      { name: "GraphQL", icon: "📊" },
      { name: "REST API", icon: "🌐" },
      { name: "WebSocket", icon: "🔌" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "Electron", icon: "💻" },
    ],
  },
];
