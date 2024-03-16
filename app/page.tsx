import { Fragment } from "react";
import IMG_PROGRAM from "./_components/undraw_programming_re_kg9v.svg";
import IMG_BG from "./_components/background.svg";
import NextImage from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Page() {
  return (
    <Fragment>
      <section className="mx-auto max-w-7xl px-6 lg:px-8 relative flex flex-wrap gap-6 py-8 md:py-12">
        <NextImage
          src={IMG_BG}
          alt="Làng gốm Thanh Hà - Hội An"
          width={384}
          height={512}
          quality={75}
          className="min-w-lg absolute -z-10 -top-10 right-0 opacity-5"
        />
        <div className="flex flex-col gap-4 justify-center w-full md:max-w-md">
          <h3 className="font-heading text-md">Mã nguồn mở</h3>
          <h2 className="font-heading text-6xl text-amber-900">OcopJS</h2>
          <span className="font-heading text-xl">
            Sinh giao diện và API tự động.
          </span>
          <p>
            Chỉ cần định nghĩa kiểu dữ liệu bạn muốn lưu trữ. OcopJS sẽ sinh tự
            động các giao diện quản thêm, sửa, xoá và API tương ứng.
          </p>
          <div>
            <button
              type="button"
              className="bg-amber-900 px-4 py-2 text-sm text-white shadow-sm hover:bg-amber-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Bắt đầu nhanh <ArrowRightIcon className="w-4 inline ml-1" />
            </button>
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
//     <span className="bg-amber-900 h-[3px] w-[25%]" />
//     <span>npm | ocopee</span>
//   </div>
// </section>
