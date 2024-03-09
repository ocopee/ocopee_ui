"use client";

import { Fragment } from "react";
import { useFormState } from "react-dom";
import NextLink from "next/link";

import { onSignIn } from "components/Auth/hooks";
import AlertError from "components/Alert/Error";

export default function SignInForm() {
  const [signInState, onSignInState] = useFormState(onSignIn);
  return (
    <Fragment>
      <section className="flex flex-1 items-center justify-center px-4 py-[57px] sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Đăng nhập{" "}
              <span className="text-amber-950 hover:text-amber-900">
                Tài khoản
              </span>{" "}
              🔑
            </h2>
          </div>
          <form className="space-y-6" action={onSignInState}>
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="username-field" className="sr-only">
                  Tên tài khoản
                </label>
                <input
                  id="username-field"
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
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Mật khẩu"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600"
                />
                <label
                  htmlFor="remember"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Giữ trạng thái?
                </label>
              </div>

              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-gray-600 hover:text-gray-700"
                >
                  Quên mật khẩu?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-amber-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Đăng nhập
              </button>
            </div>
          </form>

          {signInState && <AlertError error={signInState.error} />}

          <p className="text-center text-sm leading-6 text-gray-500">
            Chưa có tài khoản?{" "}
            <NextLink
              href="/dang-ky"
              className="font-semibold text-gray-600 hover:text-gray-700"
            >
              đăng ký ngay.
            </NextLink>
          </p>
        </div>
      </section>
    </Fragment>
  );
}
