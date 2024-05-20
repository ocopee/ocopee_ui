import NextImage from "next/image";
import LOGO_SRC from "public/black-logo.png";
import { Fragment } from "react";

export const metadata = {
  title: "Không gian sáng tạo",
  description:
    "ocop.ee là nhóm phát triển sản phẩm dựa trên những người có cùng sở thích công nghệ và mong muốn đóng góp vào cộng đồng Việt Nam.",
  keywords: ["ocopee", "ocop.ee"],
};

export default function LandingPage() {
  return (
    <Fragment>
      <div className="h-screen flex items-center justify-center relative bg-white -z-20">
        <div className="bg-slate-100 w-4/5 right-0 h-14 absolute -z-10 rounded-l-full" />
        <div className="max-w-screen-sm space-y-2">
          <div className="flex items-center gap-1">
            <NextImage
              src={LOGO_SRC}
              alt="ocopee logo"
              width={120}
              height={120}
              className="w-7"
            />
            <span className="text-xl leading-7">OCOP.EE</span>
          </div>
          <h1 className="font-heading leading-loose text-3xl lg:text-5xl pb-4">
            Không Gian Sáng Tạo
          </h1>
          <p className="text-lg">
            Dựa trên những người có cùng sở thích Công nghệ và mong muốn đóng
            góp vào Cộng đồng Kỹ sư Việt Nam.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
