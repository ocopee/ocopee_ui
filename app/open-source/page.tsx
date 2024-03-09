'use client'
import { Fragment } from "react";
import Link from "next/link";
export default function Page() {
  return (
    <Fragment>
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={100}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <section className="flex items-center justify-center mt-[57px]">
        <div className="px-6 py-24 sm:py-32 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-amber-950 sm:text-6xl">
            Mã Nguồn mở
          </h2>
          <Link href="/open-source/ocopjs">OcopJS</Link>
        </div>
      </section>
    </Fragment>
  );
}
