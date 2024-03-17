import { Fragment } from "react";
import NextImage from "next/image";
import IMG_VITSUYNGAM from "./_components/vitsuyngam.jpg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 relative py-8 md:py-12 grid grid-cols-3 gap-6">
        <div className="col-span-2">{children}</div>
        <div className="bg-gray-50 col-span-1 ring-1 ring-cyan-800 flex flex-col gap-4 p-4 rounded-md shadow-md">
          <NextImage
            src={IMG_VITSUYNGAM}
            alt="Vịt Suy Ngẫm"
            width={384}
            height={512}
            quality={75}
            className="max-w-full rounded-md"
          />
          <h1 className="text-center text-xl text-cyan-700 font-bold">
            Quỳnh Như
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </Fragment>
  );
}
