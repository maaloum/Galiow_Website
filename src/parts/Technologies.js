import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const technologyTabs = [
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

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <h2 className="text-4xl sm:text-5xl font-bold text-theme-blue mb-6">
              We Use Technologies
            </h2>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-lg text-gray-600">
              Stay ahead with cutting-edge technologies and frameworks
            </p>
          </Fade>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {technologyTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Technology Grid */}
          <Fade direction="up" triggerOnce>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {technologyTabs
                .find((tab) => tab.id === activeTab)
                ?.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {tech.name}
                    </h3>
                  </div>
                ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
