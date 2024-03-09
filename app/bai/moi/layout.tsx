import { getAuthedUser } from "components/Auth/hooks";
import { Fragment } from "react";
import Required from "./_components/Required";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getAuthedUser();
  if (!user) return <Required />;

  return <Fragment>{children}</Fragment>;
}
