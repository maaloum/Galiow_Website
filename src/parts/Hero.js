/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";
import BuildWebsite from "../assets/images/hero/BuildWebsite.png";

export default function Hero() {
  return (
    <section className="hero min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 space-y-8">
          <Fade direction="up" triggerOnce>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-theme-blue leading-tight">
              We Help Companies in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Digitizing Their Businesses
              </span>
            </h1>
          </Fade>

          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We provide developers & designers using latest technologies to
              help you scale up your business. We also provide a full nationwide
              support for all workspaces, whether in-person, hybrid, or remote.
            </p>
          </Fade>

          <Fade direction="up" delay={400} triggerOnce>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/project"
                type="link"
                className="flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
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
    </section>
  );
}
