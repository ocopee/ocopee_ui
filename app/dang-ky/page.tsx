import { Fragment } from "react";
import SignUpForm from "./_components/Form";
import { getAuthedUser } from "components/Auth/hooks";
import Success from "./_components/Success";

export default async function SignUpPage() {
  const user = await getAuthedUser();
  if (user?.user) return <Success user={user} />;
  return (
    <Fragment>
      <SignUpForm />
    </Fragment>
  );
}
