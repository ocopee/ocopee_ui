import { Fragment } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 relative py-8 md:py-12 grid grid-cols-3">
        <div className="col-span-2">{children}</div>
        <div className="h-52 bg-gray-50 col-span-1 ring-1 ring-blue-900"></div>
      </section>
    </Fragment>
  );
}
