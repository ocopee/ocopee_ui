import { Fragment } from "react";
import { getAuthedUser } from "components/Auth/hooks";

import SignInForm from "./_components/Form";
import Success from "./_components/Success";

export default async function SignInPage() {
  const user = await getAuthedUser();
  if (user?.user) return <Success user={user} />;

  return (
    <Fragment>
      <SignInForm />
    </Fragment>
  );
}
