import { getAuthedUser, onSignOut } from "components/Auth/hooks";
import { Fragment } from "react";
import Fail from "./_components/Fail";
import NextLink from "next/link";

export default async function MePage() {
  const user = await getAuthedUser();
  if (!user?.user) return <Fail />;

  return (
    <Fragment>
      <section className="mx-auto my-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          </div>
          <form action={onSignOut}>
            <h4 className="text-lg font-bold">{user.user.username}</h4>
            <button className="mt-1 max-w-xl">Đăng xuất</button>
          </form>
        </div>
      </section>
      <section>
        <NextLink href={`/bai-moi`}>Viết bài ✍️</NextLink>
        <NextLink href={`/bai-cua-toi`}>Xem</NextLink>
      </section>
    </Fragment>
  );
}
