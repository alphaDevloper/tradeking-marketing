// src/components/sections/FAQ.tsx
// Frequently Asked Questions — accordion list. First item is open by default.
// Each item toggles independently. The expanded item shows a dark filled card
// while collapsed items show a light bordered card, matching the reference.

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { faqs } from '../../data/faqs';

// ── Single FAQ accordion item ────────────────────────────────────────────────

interface FAQRowProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

function FAQRow({ id, question, answer, isOpen, onToggle }: FAQRowProps) {
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button
        type="button"
        id={buttonId}
        className="faq__button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(id)}
      >
        <span className="faq__question">{question}</span>
        <span
          className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`}
          aria-hidden="true"
        >
          {/* Both icons stacked in the same grid cell. Plus is fully visible
              when closed; Minus fades in (and Plus fades out) when open.
              The container rotates a small amount for extra visual punch. */}
          <Plus
            size={18}
            strokeWidth={2.5}
            className="faq__icon-shape faq__icon-shape--plus"
          />
          <Minus
            size={18}
            strokeWidth={2.5}
            className="faq__icon-shape faq__icon-shape--minus"
          />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="faq__panel"
        aria-hidden={!isOpen}
      >
        <div className="faq__panel-inner">
          <p className="faq__answer">{answer}</p>
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function FAQ() {
  // First FAQ is expanded on initial load; the rest are collapsed.
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  function handleToggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section className="faq section" id="faq" aria-label="Frequently asked questions">
      <div className="container-site faq__container">

        {/* ── Heading ── */}
        <h2 className="faq__heading">
          <span className="faq__heading-lead">FREQUENTLY </span>
          <em className="faq__heading-accent">ASKED</em>
          <span className="faq__heading-tail"> QUESTIONS</span>
        </h2>

        {/* ── Accordion list ── */}
        <div className="faq__list" role="list">
          {faqs.map((item) => (
            <div key={item.id} role="listitem">
              <FAQRow
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={handleToggle}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
