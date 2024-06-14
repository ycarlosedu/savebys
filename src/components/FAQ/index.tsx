"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../Accordion";
import faqsList from "./faqsList";

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  return (
    <section className="w-full leading-relaxed max-w-default py-16 mx-auto px-default flex flex-col items-center justify-center gap-8">
      <div className="space-y-3 text-center">
        <h3 className="title">FAQ - Perguntas Frequentes</h3>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Ainda confuso? fique a vontade para nos contatar.
        </p>
      </div>
      <Accordion
        type="single"
        className="w-full flex flex-col items-center"
        collapsible
      >
        {faqsList.map((item) => (
          <AccordionItem
            className="w-full max-w-[672px]"
            key={item.question}
            value={item.question}
          >
            <AccordionTrigger className="text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
