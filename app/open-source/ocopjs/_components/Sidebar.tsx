"use client";

import { clsx } from "clsx";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  current?: boolean;
  name: string;
  href?: string;
  children?: NavItem[];
}

export function Sidebar({ className = "" }) {
  const navigation: NavItem[] = [
    { name: "Giới thiệu", href: "/open-source/ocopjs" },
    {
      name: "Hướng dẫn",
      children: [
        {
          name: "Bắt đầu nhanh",
          href: `/open-source/ocopjs/tutorials/new-project`,
        },
        {
          name: "Liên kết bảng",
          href: `/open-source/ocopjs/tutorials/relationships`,
        },
      ],
    },
    {
      name: "Trường cơ bản",
      children: [{ name: "Text", href: "#" }],
    },
    {
      name: "Trường nâng cao",
      children: [{ name: "Text", href: "#" }],
    },
  ];
  const pathname = usePathname();
  return (
    <Fragment>
      <div className="h-screen sticky top-0 px-2 py-8 hidden lg:block">
        <nav
          className={clsx(
            "border bg-white rounded-lg shadow-sm px-1.5 py-4",
            className,
          )}
        >
          <ul role="list" className="max-w-lg">
            {navigation.map((item) => {
              item.current = pathname == item.href;
              const nestedCurrent = Boolean(
                item?.children?.find((i) => i.href == pathname),
              );
              return (
                <li key={item.name} className="transition">
                  {!item.children ? (
                    <NextLink
                      href={item.href}
                      className={clsx(
                        item.current ? "bg-gray-50" : "hover:bg-slate-100",
                        "block rounded-md pr-2 pl-2 py-2 text-sm leading-6 font-semibold text-gray-700",
                      )}
                    >
                      {item.name}
                    </NextLink>
                  ) : (
                    <Disclosure
                      as="div"
                      defaultOpen={item.current || nestedCurrent}
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={clsx(
                              item.current
                                ? "bg-gray-50"
                                : "hover:bg-slate-100",
                              "flex items-center justify-between w-full text-left rounded-md px-2 py-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700",
                            )}
                          >
                            {item.name}
                            <ChevronRightIcon
                              className={clsx(
                                open
                                  ? "rotate-90 text-gray-500"
                                  : "text-gray-400",
                                "h-5 w-5 shrink-0",
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel
                            as="ul"
                            className="mt-1 px-2 space-y-1"
                          >
                            {item.children.map((subItem: NavItem) => {
                              subItem.current = pathname == subItem.href;
                              return (
                                <li key={subItem.name}>
                                  <Disclosure.Button
                                    as={NextLink}
                                    href={subItem.href}
                                    className={clsx(
                                      subItem.current
                                        ? "bg-gray-50"
                                        : "hover:bg-slate-100",
                                      "block rounded-md pr-2 pl-4 py-1 text-sm leading-6 text-gray-700",
                                    )}
                                  >
                                    {subItem.name}
                                  </Disclosure.Button>
                                </li>
                              );
                            })}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
