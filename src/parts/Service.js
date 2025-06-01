/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import { Fade } from "react-awesome-reveal";

export default function Service({ data }) {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Fade direction="up" triggerOnce>
            <h2 className="text-4xl sm:text-5xl font-bold text-theme-blue mb-6">
              Our Services
            </h2>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are ready to scale up your business with our great service.
              Choose the perfect solution for your needs.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {data.map((item, index) => (
            <Fade direction="up" delay={200 * index} key={index} triggerOnce>
              <div className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-theme-blue mb-3">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-gray-600 mb-4">{item.description}</p>
                    )}
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                      Learn more
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
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
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
