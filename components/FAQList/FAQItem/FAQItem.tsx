import { TFAQItemData } from "./FAQItem.props";

export default function FAQItem({ data }: TFAQItemData) {
  const { question, answer } = data;

  return (
    <div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
      <dt className="text-base/7 font-semibold  lg:col-span-5">{question}</dt>
      <dd className="mt-4 lg:col-span-7 lg:mt-0">
        <p className="text-base/7 ">{answer}</p>
      </dd>
    </div>
  );
}
