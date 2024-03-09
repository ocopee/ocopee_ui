"use client";

import { Fragment } from "react";
import dynamic from "next/dynamic";

const RTELite = dynamic(() => import("rtelite").then((rtel) => rtel.RTELite), {
  ssr: false,
});

export default function () {
  return (
    <Fragment>
      <section className="my-6 mx-auto max-w-3xl px-3 sm:px-6 lg:px-8">
        <RTELite toolbarClassName="fixed bottom-0 left-0 z-50 bg-white" />
      </section>
    </Fragment>
  );
}
