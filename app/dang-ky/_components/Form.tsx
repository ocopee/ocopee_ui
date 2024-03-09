"use client";

import { Fragment } from "react";
import { useFormState } from "react-dom";
import NextLink from "next/link";

import { onSignUp } from "components/Auth/hooks";
import AlertError from "components/Alert/Error";

export default function SignUpForm() {
  const [signUpState, onSignUpState] = useFormState(onSignUp);
  return (
    <Fragment>
      <section className="flex flex-1 items-center justify-center px-4 py-[57px] sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Đăng ký{" "}
              <span className="text-amber-950 hover:text-amber-900">
                Tài khoản
              </span>{" "}
              📝
            </h2>
          </div>
          <form className="space-y-6" action={onSignUpState}>
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="username" className="sr-only">
                  Tên tài khoản
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Tên tài khoản"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Mật khẩu
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Mật khẩu"
                />
              </div>
              <div>
                <label htmlFor="password-confirm" className="sr-only">
                  Nhập lại
                </label>
                <input
                  id="password-confirm"
                  name="password-confirm"
                  type="password"
                  autoComplete="password-confirm"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Nhập lại"
                />
              </div>
            </div>

            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="user-name" className="sr-only">
                  Tên đầy đủ
                </label>
                <input
                  id="user-name"
                  name="user-name"
                  type="text"
                  autoComplete="user-name"
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Tên đầy đủ"
                />
              </div>
              <div>
                <label htmlFor="user-bio" className="sr-only">
                  Tóm tắt
                </label>
                <input
                  id="user-bio"
                  name="user-bio"
                  type="text"
                  autoComplete="user-bio"
                  className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Tóm tắt"
                />
              </div>
              <div>
                <label htmlFor="user-email" className="sr-only">
                  Email
                </label>
                <input
                  id="user-email"
                  name="user-email"
                  type="text"
                  autoComplete="user-email"
                  className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="user-phone" className="sr-only">
                  Số điện thoại
                </label>
                <input
                  id="user-phone"
                  name="user-phone"
                  type="text"
                  autoComplete="user-phone"
                  className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Số điện thoại"
                />
              </div>
              <div>
                <label htmlFor="user-label" className="sr-only">
                  Tên rút gọn
                </label>
                <input
                  id="user-label"
                  name="user-label"
                  type="text"
                  autoComplete="user-label"
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Tên rút gọn"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-amber-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Đăng ký
              </button>
            </div>
          </form>

          {signUpState && (
            <AlertError error={signUpState.error} errors={signUpState.errors} />
          )}

          <p className="text-center text-sm leading-6 text-gray-500">
            Đã có tài khoản?{" "}
            <NextLink
              href="/dang-nhap"
              className="font-semibold text-gray-600 hover:text-gray-700"
            >
              đăng nhập.
            </NextLink>
          </p>
        </div>
      </section>
    </Fragment>
  );
}
