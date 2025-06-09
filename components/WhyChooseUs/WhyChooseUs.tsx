import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold">О компании</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl title">
            Почему выбирают именно нас?
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-700">
            Выбор WoodeenCity означает выбор надёжности, красоты и долгосрочной ценности вашего жилья. Присоединяйтесь к
            сообществу счастливых обладателей прекрасных деревянных домов!
          </p>
        </div>
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty">Наши преимущества</h2>
            <p className="mt-6 text-base/7 text-gray-600">
              <b>Индивидуальные проекты</b> Каждый клиент уникален, поэтому мы создаём уникальные архитектурные решения,
              идеально подходящие именно вам. Работаем над каждым проектом индивидуально, учитывая все ваши предпочтения
              и потребности.
            </p>{" "}
            <p className="mt-6 text-base/7 text-gray-600">
              <b> Надёжность и безопасность</b> Используем проверенные временем технологии строительства и
              высококачественные древесные материалы, прошедшие строгий контроль качества. Наш опыт позволяет
              гарантировать прочность и устойчивость наших домов даже в суровом российском климате.
            </p>{" "}
            <p className="mt-6 text-base/7 text-gray-600">
              <b>Экологичность и натуральность материалов</b> Только натуральные материалы — дерево высшего сорта,
              экологически чистые клеевые составы и покрытия. Это обеспечивает здоровый микроклимат внутри помещений и
              благоприятствует комфортной семейной жизни.
            </p>{" "}
            <p className="mt-6 text-base/7 text-gray-600">
              <b>Полный цикл строительства</b> От проектирования до сдачи объекта под ключ — вся работа выполняется
              одной командой профессионалов. Мы несём полную ответственность за конечный результат, обеспечивая
              прозрачность процесса и исключительное качество исполнения.
            </p>{" "}
            <p className="mt-6 text-base/7 text-gray-600">
              <b>Профессиональная команда специалистов</b> Опытные архитекторы, инженеры-строители и мастера своего дела
              обеспечивают высокий уровень обслуживания и профессионализм во всех этапах строительства. Ваша
              удовлетворённость — наша главная ценность.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  width={352}
                  height={352}
                  alt=""
                  src="/More/photo-1557804506-669a67965ba0.avif"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  width={352}
                  height={352}
                  alt=""
                  src="/More/photo-1559136555-9303baea8ebd.avif"
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <Image
                  width={352}
                  height={352}
                  alt=""
                  src="/More/photo-1590650516494-0c8e4a4dd67e.avif"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  width={352}
                  height={352}
                  alt=""
                  src="/More/photo-1598257006458-087169a1f08d.avif"
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="max-lg:mt-12 lg:col-span-1">
            <p className="text-base/7 font-semibold text-gray-500">Наши цифры</p>
            <hr className="mt-1 border-t border-gray-200" />
            <dl className="mt-6 grid   gap-x-8 gap-y-4 grid-cols-2">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">Выполненных заказов</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>38</span>К
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">Строителей</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>10</span>K
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                <dt className="text-sm/6 text-gray-600">Средний чек</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>4.5</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm/6 text-gray-600">Филиал</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>21</span>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
