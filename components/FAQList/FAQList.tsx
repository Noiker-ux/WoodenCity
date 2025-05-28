import { faqs } from "@/data/faqs";
import FAQItem from "./FAQItem/FAQItem";

export default function FAQList() {
  return (
    <dl className="mt-20 divide-y divide-gray-900/10">
      {faqs.map((faq) => (
        <FAQItem key={faq.id} data={faq} />
      ))}
    </dl>
  );
}
