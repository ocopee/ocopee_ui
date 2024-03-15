import { Fragment } from "react";
import IMG_SRC from "./_components/lang-gom-thanh-ha.jpg";
import NextImage from "next/image";

export default function Page() {
  return (
    <Fragment>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="flex flex-col gap-4 py-8 max-w-lg z-10 bg-gray-50 p-4">
          <h1 className="font-heading text-3xl">
            Sự dũng cảm không có nghĩa rằng bạn không sợ hãi!
          </h1>
          <p>
            Sự dũng cảm chính là khi bạn sợ hãi, cực kì sợ hãi, thật sự rất sợ
            hãi và rồi bạn vẫn chọn làm điều đúng đắn.
          </p>
          <span className="bg-amber-900 h-[3px] w-[25%]" />
          <span>Coraline | Neil Gaiman</span>
        </div>
        <NextImage
          src={IMG_SRC}
          alt="Làng gốm Thanh Hà - Hội An"
          width={384}
          height={512}
          quality={75}
          className="max-w-full absolute right-0 top-0 bottom-0 z-0"
        />
      </section>
    </Fragment>
  );
}
