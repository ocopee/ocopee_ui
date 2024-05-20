import React, { Fragment } from "react";
import NextLink from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="pattern-square"
            width={50}
            height={50}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#pattern-square)"
        />
      </svg>
      {/**
      <section className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-12 py-8">
        <aside className="col-span-3 flex flex-col gap-2 h-screen sticky top-14">
          <h3 className="text-xl">Bắt đầu</h3>
          <NextLink href="/open-source/ocopjs/tutorials/new-project">
            Tạo nhanh
          </NextLink>
          <NextLink href="/open-source/ocopjs/tutorials/new-project">
            Tạo thủ công
          </NextLink>

          <h3 className="text-xl">Cơ bản</h3>
          <NextLink href="/open-source/ocopjs/tutorials/new-project">
            Cấu trúc thư mục
          </NextLink>
          <NextLink href="/open-source/ocopjs/tutorials/new-project">
            Thêm một bảng
          </NextLink>

          <NextLink href="/open-source/ocopjs/tutorials/new-project">
            Thêm dữ liệu
          </NextLink>

          <NextLink href="/open-source/ocopjs/tutorials/new-project">
            Tạo quan hệ bảng
          </NextLink>

          <h3 className="text-xl">Đọc thêm</h3>
          <NextLink href="/open-source/ocopjs/tutorials/new-project">
            Hiểu về GraphQL
          </NextLink>

          <NextLink href="/open-source/ocopjs/tutorials/new-project">
            Hiểu về dữ liệu
          </NextLink>
          <h3 className="text-xl">Dự án mẫu</h3>
          <NextLink href="/open-source/ocopjs/tutorials/new-project">
            Quản lý công việc
          </NextLink>
        </aside>
      </section>
      */}
      <article className="max-w-screen-sm mx-auto">{children}</article>
    </Fragment>
  );
}
