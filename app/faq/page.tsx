import FAQList from "@/components/FAQList/FAQList";
import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="mx-auto py-24 sm:py-32  lg:py-40">
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl title">
        Часто задаваемые вопросы
      </h2>
      <p className="max-w-xl mt-5">
        У вас есть еще один вопрос, на который вы не можете найти правильный
        ответ? Свяжитесь с нашей службой поддержки по адресу{" "}
        <Link href={"mailto:WoodenCitySupport@mail.ru"} className="link">
          WoodenCitySupport@mail.ru
        </Link>{" "}
        и мы свяжемся с вами, как только сможем
      </p>
      <FAQList />
    </div>
  );
}
