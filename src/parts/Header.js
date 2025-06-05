/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import Button from "../elements/Button";
import BrandIcon from "./BrandIcon";
import { DarkModeToggle } from "../elements/DarkModeToggle";

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Project", path: "/project" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/logo.webp"
                alt="Logo"
                className="h-20 w-auto dark:brightness-0 dark:invert"
              />
            </a>
            <div className="hidden lg:block ml-10">
              <div className="flex space-x-1">
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      path === item.path
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    type="link"
                    href={item.path}
                  >
                    {item.name}
                    {path === item.path && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left transition-transform duration-300" />
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <Button
              className="hidden lg:flex items-center px-6 py-2.5 text-sm font-medium text-black bg-yellow-300 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              type="link"
              href="/discuss-project"
            >
              Discuss Project
              <svg
                className="w-4 h-4 ml-2"
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

            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200"
              onClick={() => setIsCollapse(!isCollapse)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className={`${isCollapse ? "hidden" : "block"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={`${!isCollapse ? "hidden" : "block"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <Transition
          show={isCollapse}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-4"
        >
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-4 border border-gray-100 dark:border-gray-700">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                    path === item.path
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  }`}
                  type="link"
                  href={item.path}
                >
                  {item.name}
                </Button>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-100 dark:border-gray-700">
                <Button
                  className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-md hover:shadow-md transition-all duration-200"
                  type="link"
                  href="/discuss-project"
                >
                  Discuss Project
                </Button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  );
}
