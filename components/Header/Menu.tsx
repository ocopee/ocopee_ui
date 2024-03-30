"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Logo from "public/black-logo.png";

import { usePathname } from "next/navigation";
export default function HeaderMenu({
  navigation,
  user,
}: {
  navigation: { name: string; href: string }[];
  user: any;
  pathname?: string;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <Fragment>
      <div className="flex lg:hidden" onClick={() => setMobileMenuOpen(true)}>
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          Menu
        </button>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-20 lg:z-30" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-20 lg:z-30 w-full overflow-y-auto bg-white p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image className="h-8 w-auto" src={Logo} alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>👌
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {user?.user ? (
                    <Link
                      href={`/toi/${user.user.username}`}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      @{user.user.username}
                    </Link>
                  ) : (
                    <Link
                      href="/dang-nhap"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Đăng nhập <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </Fragment>
  );
}
