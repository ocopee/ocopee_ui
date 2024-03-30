import { Fragment } from "react";
import IMG_PROGRAM from "./_components/undraw_programming_re_kg9v.svg";
import IMG_BG from "./_components/background.svg";
import NextImage from "next/image";
import NextLink from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Why } from "./_components/Why";

export default function Page() {
  return (
    <Fragment>
      <div className="bg-gradient-to-r from-stone-900 via-stone-600 to-stone-900">
        <section className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-wrap gap-6 py-8 md:py-12 ">
          <NextImage
            src={IMG_BG}
            alt="Thằng lập trình viên."
            width={384}
            height={512}
            quality={75}
            className="min-w-lg absolute -z-10 -top-10 right-0 opacity-5"
          />
          <div className="flex flex-col gap-4 justify-center w-full md:max-w-md">
            <h3 className="font-heading text-md text-gray-400">Mã nguồn mở.</h3>
            <h2 className="text-6xl font-semibold bg-gradient-to-r from-teal-200 to-teal-400 inline-block text-transparent bg-clip-text pb-3">
              OCOP.JS
            </h2>
            <span className="font-heading text-xl text-gray-300">
              Sinh giao diện và API tự động.
            </span>
            <p className="text-gray-300">
              Chỉ cần định nghĩa kiểu dữ liệu bạn muốn lưu trữ. OcopJS sẽ sinh
              tự động các giao diện quản thêm, sửa, xoá và API tương ứng.
            </p>
            <div className="flex flex-cols gap-2">
              <NextLink
                href={"/open-source/ocopjs/tutorials/new-project"}
                type="button"
                className="bg-teal-600 px-4 py-2 text-sm text-white shadow-sm hover:bg-teal-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Bắt đầu nhanh <ArrowRightIcon className="w-4 inline ml-1" />
              </NextLink>

              <NextLink
                href={"/open-source/ocopjs"}
                type="button"
                className="bg-white px-2 py-2 text-sm font-semibold text-teal-900 shadow-sm ring-1 ring-inset ring-teal-900 hover:bg-teal-50"
              >
                Xem tài liệu
              </NextLink>
            </div>
          </div>
          <div className="min-w-52 flex justify-center items-center flex-1">
            <NextImage
              src={IMG_PROGRAM}
              alt="Làng gốm Thanh Hà - Hội An"
              width={384}
              height={512}
              quality={75}
              className="min-w-lg"
            />
          </div>
        </section>
      </div>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 py-8 md:py-12">
        <div className="w-full bg-red-50 p-5 md:p-3 flex flex-col gap-2">
          <h3 className="text-lg text-red-900">GraphQL</h3>
          <p>Đầy đủ các chức năng để chỉnh sửa và hiển thị nội dung.</p>
        </div>
        <div className="w-full bg-blue-50 p-5 md:p-3 flex flex-col gap-2">
          <h3 className="text-lg text-blue-900">ExpressJS</h3>
          <p>Hoàn toàn tuỳ biến được dựa theo tài liệu gốc.</p>
        </div>
        <div className="w-full bg-yellow-50 p-5 md:p-3 flex flex-col gap-2">
          <h3 className="text-lg text-yellow-900">ReactJS</h3>
          <p>Phát triển thêm các chức năng trên trang quản trị.</p>
        </div>
        <div className="w-full bg-green-50 p-5 md:p-3 flex flex-col gap-2">
          <h3 className="text-lg text-green-900">MongoDB</h3>
          <p>Lưu trữ đúng với cấu hình để nâng cấp chuyên sâu.</p>
        </div>
      </section>
      <Why />
    </Fragment>
  );
}

// <p>
//   Với khả năng mở rộng thành mã nguồn chuyên nghiệp theo hướng
//   microservices.
// </p>
// <section className="mx-auto max-w-7xl px-6 lg:px-8 relative">
//   <div className="flex flex-col gap-4 py-8 max-w-lg z-10 bg-gray-50 p-4 cursor-pointer">
//     <h1 className="font-heading text-3xl">Mã nguồn mở @ocopjs</h1>
//     <p>
//       Giúp lập trình viên triển khai API và giao diện quản trị nhanh nhất
//       có thể.
//     </p>
//     <span className="bg-teal-900 h-[3px] w-[25%]" />
//     <span>npm | ocopee</span>
//   </div>
// </section>
