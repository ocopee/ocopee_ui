"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Fail() {
  const router = useRouter();
  useEffect(() => {
    const time = setTimeout(() => {
      router.push(`/dang-nhap`);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, []);
  return (
    <section className="min-h-[50vh] max-w-xl px-4 sm:px-6 lg:px-8 mt-8 mx-auto flex items-center justify-center">
      <div>
        <h2 className="text-xl mb-2 font-heading">Hẹn gặp lại 👋</h2>

        <p>Bạn đã đăng xuất</p>
        <hr className="my-4" />
        <em>
          Đang về trang đăng nhập
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
      </div>
    </section>
  );
}
