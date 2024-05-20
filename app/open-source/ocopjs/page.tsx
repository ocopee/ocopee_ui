import { Fragment } from "react";
import NextLink from "next/link";
import { OcopJSLayout } from "./_components/Layout";

export default function Page() {
  return (
    <Fragment>
      <OcopJSLayout>
        <article className="space-y-6 mt-8">
          <section className="mx-auto max-w-screen-sm px-6 space-y-2">
            <span>@ocopjs</span>
            <h1 className="text-3xl leading-10 font-heading">
              Giới thiệu về OcopJS
            </h1>
            <NextLink href={`/open-source/ocopjs/tutorials/new-project`}>
              Bắt đầu với 10 phút
            </NextLink>
          </section>
          <section className="mx-auto max-w-screen-sm px-6">
            <p>
              OcopJS là mã nguồn mở hướng đến cộng đồng lập trình viên Việt Nam.
              Cho phép tạo và quản lý nội dung nhanh. Xuất bản sản phẩm với tốc
              nhanh đi đôi với khả năng tuỳ biến cao.
            </p>
          </section>
          <section className="mx-auto max-w-screen-md px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
            <div className="w-full bg-slate-50 p-5 md:p-3 flex flex-col gap-2">
              <h3 className="text-lg text-slate-900">GraphQL</h3>
              <p>Đầy đủ các chức năng để chỉnh sửa và hiển thị nội dung.</p>
            </div>
            <div className="w-full bg-slate-50 p-5 md:p-3 flex flex-col gap-2">
              <h3 className="text-lg text-slate-900">ExpressJS</h3>
              <p>Hoàn toàn tuỳ biến được dựa theo tài liệu gốc.</p>
            </div>
            <div className="w-full bg-slate-50 p-5 md:p-3 flex flex-col gap-2">
              <h3 className="text-lg text-slate-900">ReactJS</h3>
              <p>Phát triển thêm các chức năng trên trang quản trị.</p>
            </div>
            <div className="w-full bg-slate-50 p-5 md:p-3 flex flex-col gap-2">
              <h3 className="text-lg text-slate-900">MongoDB</h3>
              <p>Lưu trữ đúng với cấu hình để nâng cấp chuyên sâu.</p>
            </div>
          </section>
          <section className="mx-auto max-w-screen-sm px-6">
            <h3>1. Định nghĩa dữ liệu</h3>
            <p>
              @ocopjs cung cấp đủ các kiểu dữ liệu gốc và một số dạng tuỳ biến
              với mục đích dễ sử dụng như: colors, calendar,...
            </p>
            <p>
              Từ thiết kế cơ sở dữ liệu của bạn, cấu hình cho @ocopjs giúp bạn
              dễ dàng phát triển nhờ có sẵn API CRUD cơ bản và các hàm để viết
              sự kiện (hooks) cũng như kiểm soát truy cập (access control)
            </p>

            <h3>2. Nhập liệu nội dung</h3>
            <p>
              Giao diện quản trị mặc định của @ocopjs dựng đủ các trang nhập
              liệu cần thiết. Hơn nữa còn cung cấp các trang danh sách với khả
              năng lọc kết quả mạnh mẽ.
            </p>
            <h3>3. Phát triển giao diện</h3>
            <p>
              Sử dụng bộ API @ocopjs để phát triển giao diện cho riêng bạn bằng
              bất kỳ ngôn ngữ nào. Ngoài ra, bạn hoàn toàn có thể phát triển một
              phiên bản API song song cho những trường hợp yêu cầu hiệu suất cao
              hoặc nghiệp vụ đặc biệt.
            </p>
            <h3>4. Xuất bản tự động</h3>
            <p>
              Bạn có thể áp dụng các phương án triển khai tự động bằng docker
              lên các môi trường chuyên dụng như Heroku, Vercel, Netlify, AWS,
              Azure, Google Cloud,... Ngoài ra, với chi phí thấp, @ocopjs cung
              cấp một số thư viện giúp bạn có thể tự triển khai trên các máy chủ
              của mình hoàn toàn tự động.
            </p>
          </section>
          <section className="mx-auto max-w-screen-md px-6">
            <h4>Dành cho doanh nghiệp?</h4>
            Hỗ trợ triển khai và tùy biến theo yêu cầu cho doanh nghiệp của bạn.
            <button>Liên hệ</button>
          </section>
          <section className="mx-auto max-w-screen-sm px-6 pb-8">
            <NextLink href={`/open-source/ocopjs/tutorials/new-project`}>
              Bắt đầu với 10 phút
            </NextLink>
          </section>
        </article>
      </OcopJSLayout>
    </Fragment>
  );
}
