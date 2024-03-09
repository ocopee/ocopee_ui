"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Success({ user }) {
  const router = useRouter();
  const profilePath = `/toi/${user.user.username}`;
  useEffect(() => {
    const time = setTimeout(() => {
      router.push(profilePath);
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, [user]);
  return (
    <section className="min-h-[50vh] max-w-xl px-4 sm:px-6 lg:px-8 mt-8 mx-auto flex items-center justify-center">
      <div>
        <h2 className="text-xl mb-2 font-heading">Chào mừng 🎉</h2>
        <p>
          Bạn đã đăng ký tài khoản{" "}
          <NextLink href={`/toi/${user.user.username}`} className="font-bold">
            {user.user.username}
          </NextLink>
          ,
        </p>
        <hr className="my-4" />
        <NextLink href={profilePath}>
          <em>
            Đang về trang cá nhân
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="animate-spin ml-2 inline"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3a9 9 0 1 0 9 9" />
            </svg>
          </em>
        </NextLink>
      </div>
    </section>
  );
}
