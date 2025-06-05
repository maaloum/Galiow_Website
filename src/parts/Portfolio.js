/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

export default function Portfolio({ data }) {
  return (
    <section className="container mx-auto flex flex-col items-center mt-20">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Our Selected Project
        </h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          We are ready to scale up your business with our great work result.
        </p>
      </Fade>

      {/* Grid View */}
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
        {data.map((item, index) => (
          <Fade
            direction="up"
            triggerOnce
            bottom
            delay={500 * index}
            key={index}
          >
            <Button type="link" href={`/project/${item.id}`}>
              <div className="group rounded-2xl shadow-xl w-auto m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt="Portfolio"
                    className="rounded-t-2xl z-0"
                  />
                  <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                    <button className="focus:outline-none">
                      <svg
                        className="w-20 h-20 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="py-4">
                  <h2 className="text-theme-blue text-center text-xl">
                    {item.title}
                  </h2>
                  <p className="font-light text-gray-400 text-center">
                    {item.type}
                  </p>
                </div>
              </div>
            </Button>
          </Fade>
        ))}
      </div>

      <Fade bottom triggerOnce>
        <Button
          href="/project"
          type="link"
          className="flex flex-grow-0 w-36 h-12 sm:w-40 sm:h-14 lg:w-44 lg:h-16 xl:w-36 xl:h-12 bg-yellow-300 text-theme-purple px-5 border border-theme-purple items-center mt-14 rounded-full justify-center transition duration-300 hover:bg-theme-purple hover:text-white"
        >
          <p className="font-normal py-3 lg:text-lg xl:text-base ">See More</p>
          <svg
            className="w-4 h-4"
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
          <svg
            className="w-4 h-4 -ml-2"
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
      </Fade>

      {/* Detailed View */}
      {/* <div className="w-full mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <h2 className="text-4xl sm:text-5xl font-bold text-theme-blue mb-6">
              Project Details
            </h2>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-lg text-gray-600">
              Explore our recent work and see how we've helped businesses
              achieve their goals
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {data.map((item, index) => (
            <Fade
              key={item.id}
              direction="up"
              delay={300 + index * 100}
              triggerOnce
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                        {item.type}
                      </span>
                      {item.status && (
                        <span className="px-3 py-1 text-sm font-medium text-yellow-600 bg-yellow-50 rounded-full">
                          {item.status}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>

                    {item.client && (
                      <div className="mb-4">
                        <p className="text-gray-600">
                          <span className="font-medium">Client:</span>{" "}
                          {item.client}
                        </p>
                        {item.location && (
                          <p className="text-gray-600">
                            <span className="font-medium">Location:</span>{" "}
                            {item.location}
                          </p>
                        )}
                        {item.deliveryDate && (
                          <p className="text-gray-600">
                            <span className="font-medium">Delivery:</span>{" "}
                            {item.deliveryDate}
                          </p>
                        )}
                      </div>
                    )}

                    {item.technologies && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-sm text-gray-600 bg-gray-100 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.highlights && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Highlights:
                        </h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {item.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.requirements && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Requirements:
                        </h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {item.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.expectedResults && (
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Expected Results:
                        </h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {item.expectedResults.map((result, i) => (
                            <li key={i}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.responsibility && (
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Our Role:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.responsibility.map((role, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.credit && (
                      <a
                        href={item.credit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        View on Dribbble
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div> */}
    </section>
  );
}
