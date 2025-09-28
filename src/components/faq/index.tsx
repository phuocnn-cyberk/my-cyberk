"use client";

import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_DATA = [
  {
    id: "001/",
    question: "What makes Cyberk's development process so fast?",
    answer:
      "At Cyberk, speed is our standard. We deliver MVPs in under 30 days without sacrificing quality. Our agile workflow, lean architecture, and expert Web3 engineers ensure your product reaches the market faster than traditional development teams.",
  },
  {
    id: "002/",
    question: "How does the MVP in 30 days guarantee work?",
    answer:
      "Our guarantee is rooted in a highly-structured agile process. We begin with an intensive discovery phase to define a clear, minimal scope. Our pre-built modules and experienced team allow us to accelerate development, ensuring a high-quality, market-ready MVP is delivered within the 30-day timeframe.",
  },
  {
    id: "003/",
    question: "What kind of blockchain projects do you specialize in?",
    answer:
      "We specialize in a wide range of Web3 projects, including DeFi platforms, NFT marketplaces, custom smart contracts, and decentralized applications (dApps). Our expertise covers multiple blockchain ecosystems, allowing us to choose the best technology for your specific needs.",
  },
  {
    id: "004/",
    question: "What happens after the MVP is launched?",
    answer:
      "The MVP launch is just the beginning. Our Launch & Hypercare phase includes intensive monitoring and support. Post-launch, we offer Ongoing Support packages, including feature development, security audits, and scalability planning to ensure your project's long-term success.",
  },
  {
    id: "005/",
    question: "How do you ensure the security of the smart contracts?",
    answer:
      "Security is our top priority. Our development process includes multiple layers of security checks, peer reviews, and adherence to the latest smart contract security standards. We also partner with leading third-party audit firms to conduct comprehensive security audits before any mainnet deployment.",
  },
  {
    id: "006/",
    question: "Can you work with an existing team or project?",
    answer:
      "Absolutely. We are experienced in integrating with in-house teams and taking over existing projects. Our agile methodology allows us to seamlessly onboard, understand your current codebase, and start delivering value quickly, whether it's for feature enhancement, scalability, or performance optimization.",
  },
];

export const FaqSection: FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-5xl leading-tight font-normal text-center mb-10 text-[#181818]">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible defaultValue="item-0">
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={`item-${index}`}
              className="border-b border-black/10"
            >
              <AccordionTrigger className="text-base md:text-2xl py-5 md:py-10 font-extralight hover:no-underline text-black">
                <span className="text-[#2684FF] font-semibold text-base md:text-2xl">
                  {faq.id}
                </span>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg text-[#292929] pt-0 md:pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
