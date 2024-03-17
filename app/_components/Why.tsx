"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import IMG_LANG_GOM from "./lang-gom-thanh-ha.jpg";
import NextImage from "next/image";

const faqs = [
  {
    question: "Một lập trình viên kỳ cựu với nhiều năm kinh nghiệm?",
    answer: "",
  },
  { question: "Đang học lập trình và muốn mở rộng chuyên môn?", answer: "" },
  {
    question: "Bạn muốn chuyên tâm phát triển giao diện?",
    answer: "",
  },
  {
    question: "Bạn có tất cả nhưng không có thời gian?",
    answer: "",
  },
  // More questions...
];

export function Why() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-wrap gap-10 py-8 md:py-12">
      <NextImage
        src={IMG_LANG_GOM}
        alt="Thằng lập trình viên."
        width={384}
        height={512}
        quality={75}
        className="w-full md:max-w-sm lg:max-w-md"
      />
      <div className="flex flex-1 justify-center items-center ring-1 ring-gray-100 p-4">
        <div className="divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-amber-900">
            OcopJS phù hợp với bạn
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
