import Image from "next/image";
import Link from "next/link";

import HeaderMenu from "./Menu";
import Logo from "public/ocopee.png";
import { getAuthedUser } from "components/Auth/hooks";
import { Fragment } from "react";

const navigation = [
  { name: "Viết", href: "/viet" },
  { name: "Open Source", href: "/open-source" },
];

export default async function Header() {
  const user = await getAuthedUser();
  return (
    <Fragment>
      <header className="sticky top-0 z-10 backdrop-blur border-b border-slate-900/10 lg:border-0 transition-colors duration-500 lg:z-20 lg:border-b lg:border-slate-900/10 supports-backdrop-blur:bg-white/95">
        <nav
          className="mx-auto max-w-7xl px-6 lg:px-8 flex py-3 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-8 w-auto" src={Logo} alt="" />
            </Link>
          </div>
          <HeaderMenu navigation={navigation} user={user} />
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {user?.user ? (
              <Link
                href={`/toi/${user.user.username}`}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                @{user.user.username}
              </Link>
            ) : (
              <Link
                href="/dang-nhap"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Đăng nhập <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </Fragment>
  );
}
