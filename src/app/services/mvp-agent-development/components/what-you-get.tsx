"use client";

import { useState, useEffect, FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: "/user-icon.svg",
    title: "A functional MVP AI Agent",
    description:
      "Companies with ongoing or large-scale Web3 product development needs.",
    image: "/images/our-vision-1.png",
  },
  {
    id: 2,
    icon: "/user-icon.svg",
    title: "Performance Report",
    description:
      "Clear, actionable metrics showing the agent’s value and impact.",
    image: "/images/trung-cyberk.png",
  },
  {
    id: 3,
    icon: "/user-icon.svg",
    title: "Development Roadmap",
    description:
      "A step-by-step plan for expanding and upgrading your agent, based on real-world data.",
    image: "/images/manh-cyberk.png",
  },
];

const WhatYouGet: FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 500);
    }
  }, [progress]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <section className="bg-white py-15 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-medium text-[#212121]">
            What You Get
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            {features.map((feature, index) => {
              const isActive = currentFeature === index;
              const iconSrc = isActive
                ? "/user-icon-have-bg.svg"
                : feature.icon;

              return (
                <div
                  key={feature.id}
                  className="relative cursor-pointer flex-shrink-0"
                  onClick={() => handleFeatureClick(index)}
                >
                  <div
                    className={`flex flex-row items-start space-x-4 p-5 md:p-8 rounded-xl transition-all duration-300 ${
                      isActive ? "bg-white shadow-lg" : "bg-transparent"
                    }`}
                  >
                    <Image
                      src={iconSrc}
                      alt={feature.title}
                      width={64}
                      height={64}
                      className="w-9 h-9 md:w-16 md:h-16"
                    />
                    <div className="flex-1">
                      <h3
                        className={`text-base md:text-lg font-bold mb-3 md:mb-4 transition-colors text-[#212121] duration-300`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`transition-colors duration-300 text-xs md:text-sm text-[#212121]`}
                      >
                        {feature.description}
                      </p>
                      {isActive && (
                        <div className="mt-2 md:mt-4 bg-[#D9D9D9] rounded-full h-3 overflow-hidden">
                          <motion.div
                            className="bg-[#2684FF] h-full"
                            animate={{ width: `${progress}%` }}
                            transition={{
                              duration: progress > 1 ? 0.1 : 0,
                              ease: "linear",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative order-1 max-w-lg mx-auto lg:order-2">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-2xl shadow-xl overflow-hidden"
            >
              <Image
                className="max-h-[300px] md:max-h-[542px] object-cover"
                src={features[currentFeature].image}
                alt={features[currentFeature].title}
                width={550}
                height={550}
              />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_8px_#FFFFFF99]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
