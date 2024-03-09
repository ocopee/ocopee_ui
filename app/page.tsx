import { Fragment } from "react";
import NextImage from "next/image";

export default function Page() {
  return (
    <Fragment>
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1>ocop.ee</h1>
        <NextImage
          src={"/saly-10.png"}
          alt="saly"
          width={1530}
          height={1530}
          quality={100}
          className="max-w-md"
        />
      </section>
    </Fragment>
  );
}
