"use client";

import React, { useState } from "react";

type Subsection = {
    title: string;
    url: string;
};

type Section = {
  title: string;
  subsections: string[][];
};

export default function Submit() {
  const sections: Section[] = [
    {
     title: "Article Site",
     subsections: [["Main Page", "article/main"], ["Specific Article", "article/article"]]
    },
    {
      title: "Online Store",
      subsections: [["Main Page", "store/main"], ["Store Item", "store/item"]],
    },
    {
      title: "Other",
      subsections: [["Other", "other"]]
    }
  ];

  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-1/3 flex flex-col items-start py-10 h-screen">
      <a
        className="py-6 hover:underline inline-flex text-amber-500 dark:text-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-teal-300"
        href="/"
      >
        Return
      </a>

      <h2 className="font-bold text-4xl py-6">Review a Site</h2>
      <p>Please select the type of site you wish to review below.</p>

      <div className="mt-6 w-full">
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            {/* Main Section */}
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-teal-300"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{section.title}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    expandedSections[index] ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {/* Subsections with transition */}
            <div
              className={`mt-2 overflow-hidden transition-all duration-300 ${
                expandedSections[index] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="pl-6">
                {section.subsections.map((sub, subIndex) => (
                  <li key={subIndex} className="py-1">
                    <a
                      href={`/submit/${sub[1]}`}
                      className="text-amber-500 dark:text-teal-300 hover:underline"
                    >
                      {sub[0]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

