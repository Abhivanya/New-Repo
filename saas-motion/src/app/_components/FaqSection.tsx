"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your subscription at any time.",
  },
  {
    q: "Is there a free trial?",
    a: "We offer a 14-day free trial with full features.",
  },
  {
    q: "Do you offer refunds?",
    a: "Absolutely. 30-day money back guarantee.",
  },
  {
    q: "Is my data secure?",
    a: "We use enterprise-grade encryption and security.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-32 max-w-4xl mx-auto px-6">
      <h2 className="text-5xl font-bold text-center mb-16">
        Frequently Asked Questions
      </h2>

      <Accordion className="space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
