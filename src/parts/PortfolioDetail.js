/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";

import Fade from "react-awesome-reveal";

import NotFound from "assets/images/NotFound.png";

import Button from "elements/Button";

export default function PortfolioDetail({ data }) {
  console.log({ data });
  if (data === null) {
    return (
      <section className="container mx-auto">
        <Fade bottom triggerOnce>
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
              <img
                src={NotFound}
                alt="Not Found"
                className="sm:w-3/4 xl:w-5/12 mt-5"
              />
            </div>
            <h1 className="text-theme-blue text-2xl text-center mt-5">
              Project Not Found
            </h1>
            <div className="flex justify-center">
              <Button
                href="/project"
                type="link"
                className="flex w-30 h-10 px-5 mt-5 bg-theme-blue text-white items-center rounded transform transition duration-500 hover:bg-gray-900"
              >
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <Fade bottom>
        <Button
          type="link"
          href="/project"
          className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline"
        >
          <svg
            className="w-5 h-5 text-gray-400 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          See All Project
        </Button>
      </Fade>

      {data.map((item) => (
        <div className="flex flex-col mt-8 justify-center">
          <Fade bottom triggerOnce>
            <h1 className="text-5xl text-theme-blue text-center font-bold">
              {item.title}
            </h1>

            <p className="font-light text-xl text-gray-400 text-center mb-10">
              {item.type}
            </p>
          </Fade>

          <Fade bottom delay={300 * 1} triggerOnce>
            <div className="flex justify-center xl:mb-6">
              <img
                src={item.imageUrl}
                alt="Project"
                className="flex w-4/5 sm:w-4/6"
              />
            </div>
          </Fade>

          <Fade bottom delay={300 * 1} triggerOnce>
            <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
              <h1 className="text-3xl text-theme-blue font-bold mb-3">
                Project Detail
              </h1>

              <p className="font-light text-lg text-gray-400 text-justify">
                {item.client && (
                  <>
                    <strong>Client:</strong> {item.client}
                    <br />
                  </>
                )}
                {item.location && (
                  <>
                    <strong>Location:</strong> {item.location}
                    <br />
                  </>
                )}
                {item.deliveryDate && (
                  <>
                    <strong>Delivery Date:</strong> {item.deliveryDate}
                    <br />
                  </>
                )}
                {item.status && (
                  <>
                    <strong>Status:</strong> {item.status}
                    <br />
                  </>
                )}
                {item.technologies && (
                  <>
                    <strong>Technologies:</strong>
                    <br />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
                {item.highlights && (
                  <>
                    <strong className="mt-4 block">Highlights:</strong>
                    <ul className="list-disc list-inside mt-2">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-400">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {item.requirements && (
                  <>
                    <strong className="mt-4 block">Requirements:</strong>
                    <ul className="list-disc list-inside mt-2">
                      {item.requirements.map((req, i) => (
                        <li key={i} className="text-gray-400">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {item.expectedResults && (
                  <>
                    <strong className="mt-4 block">Expected Results:</strong>
                    <ul className="list-disc list-inside mt-2">
                      {item.expectedResults.map((result, i) => (
                        <li key={i} className="text-gray-400">
                          {result}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </p>
            </div>

            <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
              <h1 className="text-3xl text-theme-blue font-bold mb-5">
                Project Responsibilities
              </h1>

              <div className="flex flex-row flex-wrap gap-4 ml-1">
                {item.responsibility.map((responsibility, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 text-theme-purple border border-theme-purple rounded-full shadow-lg"
                  >
                    {responsibility}
                  </div>
                ))}
              </div>
            </div>

            {item.credit && (
              <p className="font-light italic text-gray-400 mt-16 mx-8 sm:mx-16 xl:mx-28">
                Original project:{" "}
                <Button
                  type="link"
                  href={item.credit}
                  target="_blank"
                  className="text-theme-purple"
                  isExternal
                >
                  {item.credit}
                </Button>
              </p>
            )}
          </Fade>
        </div>
      ))}
    </section>
  );
}
