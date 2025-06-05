/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";
import BuildWebsite from "../assets/images/hero/BuildWebsite.png";

const techIcons = [
  { icon: "⚛️", name: "React" },
  { icon: "▲", name: "Next.js" },
  { icon: "🟢", name: "Vue.js" },
  { icon: "🅰️", name: "Angular" },
  { icon: "📘", name: "TypeScript" },
  { icon: "🟩", name: "Node.js" },
  { icon: "🐍", name: "Django" },
  { icon: "🌱", name: "Spring" },
  { icon: "🐘", name: "PostgreSQL" },
  { icon: "🍃", name: "MongoDB" },
  { icon: "🐬", name: "MySQL" },
  { icon: "🔴", name: "Redis" },
  { icon: "🔥", name: "Firebase" },
  { icon: "⚡", name: "DynamoDB" },
  { icon: "☁️", name: "AWS" },
  { icon: "🌩️", name: "Azure" },
  { icon: "GCP", name: "Google Cloud" },
  { icon: "🐳", name: "Docker" },
  { icon: "⚓", name: "Kubernetes" },
  { icon: "🏗️", name: "Terraform" },
];

export default function Hero() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create initial stars
    const initialStars = techIcons.map((tech, index) => ({
      ...tech,
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 20 + 10,
    }));
    setStars(initialStars);

    // Animate stars
    const interval = setInterval(() => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          y: (star.y + 0.1) % 100,
          opacity: Math.sin(Date.now() / 1000 + star.id) * 0.2 + 0.5,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute transform transition-all duration-1000"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              fontSize: `${star.size}rem`,
              opacity: star.opacity,
              animation: `float ${star.duration}s infinite ease-in-out`,
            }}
          >
            {star.icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="w-full lg:w-1/2 space-y-8">
          <Fade direction="up" triggerOnce>
            <h1 className="text-4xl sm:text-2xl lg:text-4xl font-bold text-theme-blue leading-tight">
              Digitizing Your Vision, Safeguarding Your Data.
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Seamless Digital Transformation
              </span> */}
            </h1>
          </Fade>

          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-xl sm:text-xl text-gray-600 leading-relaxed">
              Our expert developers and designers leverage cutting-edge <br />{" "}
              tech to accelerate your business. From coast to coast, <br /> we
              support your teams — in-office, hybrid, or fully remote.
            </p>
          </Fade>

          <Fade direction="up" delay={400} triggerOnce>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/project"
                type="link"
                className="flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-yellow-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                See Our Work
                <svg
                  className="ml-2 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
              <Button
                href="/discuss-project"
                type="link"
                className="flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white border-2 border-blue-600 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Discuss Project
              </Button>
            </div>
          </Fade>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Fade direction="up" delay={300} triggerOnce>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
              <img
                className="relative w-full max-w-lg transform hover:scale-105 transition-transform duration-300"
                src={BuildWebsite}
                alt="Build Website"
              />
            </div>
          </Fade>
        </div>
      </div>

      <div className="animate-float">Floating content</div>
    </section>
  );
}
