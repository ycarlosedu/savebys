"use client";
import { LegacyRef, useRef, useState } from "react";

import { Minus, Plus } from "@phosphor-icons/react/dist/ssr";

import faqsList from "./faqsList";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqsCardProps = {
  faqItem: FaqItem;
};

const FaqsCard = ({ faqItem }: FaqsCardProps) => {
  const answerElRef = useRef() as LegacyRef<HTMLDivElement>;
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    // @ts-expect-error useRef type Error
    const answerElH = answerElRef?.current?.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqItem.question}
        {state ? <Minus size={24} /> : <Plus size={24} />}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqItem.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="leading-relaxed max-w-default py-16 mx-auto px-default">
      <div className="space-y-3 text-center">
        <h3 className="title">FAQ - Perguntas Frequentes</h3>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Ainda confuso? fique a vontade para nos contatar.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item) => (
          <FaqsCard key={item.question} faqItem={item} />
        ))}
      </div>
    </section>
  );
}
