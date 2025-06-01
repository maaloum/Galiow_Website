import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Header from "parts/Header";
import Footer from "parts/Footer";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of services including Web Development, Mobile Development, UI/UX Design, Custom Software Development, Audit & IT Consulting Services, and Infrastructure & System Support. Each service is tailored to meet your specific business needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex custom software solution could take several months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our development process follows these key steps: 1) Initial consultation and requirements gathering, 2) Project planning and proposal, 3) Design and prototyping, 4) Development and testing, 5) Deployment and launch, 6) Post-launch support and maintenance.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance services. This includes regular updates, bug fixes, performance monitoring, and technical support to ensure your solution continues to run smoothly.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain clear and consistent communication throughout the project lifecycle. We use project management tools, regular status meetings, and detailed progress reports to keep you informed every step of the way.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of modern technologies including React, Node.js, Python, Java, Swift, Kotlin, and various cloud platforms. We choose the best technology stack based on your specific project requirements.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow industry best practices and maintain strict quality control processes. This includes comprehensive testing, code reviews, performance optimization, and security audits to ensure the highest quality deliverables.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on the scope, complexity, and requirements. We provide detailed quotes after understanding your needs during the initial consultation. We believe in transparent pricing with no hidden costs.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
      onClick={onClick}
    >
      <span className="text-lg font-medium text-gray-900">{question}</span>
      <span className="ml-6 flex-shrink-0">
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-200 ${
        isOpen ? "max-h-96 pb-6" : "max-h-0"
      }`}
    >
      <p className="text-gray-600">{answer}</p>
    </div>
  </div>
);

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Fade direction="up" triggerOnce>
              <h1 className="text-4xl sm:text-5xl font-bold text-theme-blue text-center mb-6">
                Frequently Asked Questions
              </h1>
            </Fade>
            <Fade direction="up" delay={200} triggerOnce>
              <p className="text-lg text-gray-600 text-center mb-12">
                Find answers to common questions about our services and
                processes.
              </p>
            </Fade>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Fade
                  key={index}
                  direction="up"
                  delay={300 + index * 100}
                  triggerOnce
                >
                  <FAQItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => toggleFAQ(index)}
                  />
                </Fade>
              ))}
            </div>

            <Fade direction="up" delay={1000} triggerOnce>
              <div className="mt-16 text-center">
                <p className="text-gray-600 mb-6">
                  Still have questions? We're here to help!
                </p>
                <a
                  href="/discuss-project"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Contact Us
                  <svg
                    className="w-5 h-5 ml-2"
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
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
