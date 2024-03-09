"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { gql } from "@apollo/client";
import { print } from "graphql";

const uri =
  process.env.NODE_ENV === "production"
    ? "https://id.ocopee.com/api/graphql"
    : "http://localhost:3003/api/graphql";

const LOCAL_SIGN_IN_MUTATION = gql`
  mutation LocalSignIn($credentials: LocalStrategyInput!) {
    localSignIn(credentials: $credentials) {
      left
      user {
        username
        id
        name
        bio
        email
        phone
        label
        createdAt
        subs {
          id
          endpoint
          protocol
          verified
        }
      }
      token
      left
    }
  }
`;

export async function onSignIn(prevState: any, formData: FormData) {
  try {
    const cookieStore = cookies();
    const remember = formData.get("remember");
    const credentials = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const { data } = await fetch(uri, {
      method: "POST",
      body: JSON.stringify({
        query: print(LOCAL_SIGN_IN_MUTATION),
        variables: { credentials },
      }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }).then((res) => res.json());

    const { localSignIn = {} } = data || {};
    if (localSignIn?.token) {
      cookieStore.set("token", localSignIn.token, {
        secure: true,
        maxAge: remember && localSignIn.left,
      });
      redirect(`/toi/${localSignIn.user.username}`);
    }
  } catch (e) {
    console.error(e.message);
    return {
      error: { message: `Chưa được, kiểm tra thông tin và thử lại.` },
    };
  }
}
const LOCAL_SIGN_UP_MUTATION = gql`
  mutation LocalSignUp(
    $credentials: LocalStrategyInput!
    $user: UserCreateInput
  ) {
    localSignUp(credentials: $credentials, user: $user) {
      token
      user {
        createdAt
        label
        email
        phone
        bio
        name
        id
        rn
        username
        subs {
          id
          rn
          verified
        }
        avatars {
          id
        }
      }
      left
    }
  }
`;
export async function onSignUp(prevState: any, formData: FormData) {
  const cookieStore = cookies();

  const credentials = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const user = {
    name: formData.get("user-name"),
    bio: formData.get("user-bio"),
    email: formData.get("user-email"),
    phone: formData.get("user-phone"),
    label: formData.get("user-label"),
  };

  const { data, errors } = await fetch(uri, {
    method: "POST",
    body: JSON.stringify({
      query: print(LOCAL_SIGN_UP_MUTATION),
      variables: { credentials, user },
    }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  }).then((res) => res.json());

  const { localSignUp = {} } = data || {};
  if (localSignUp?.token) {
    cookieStore.set("token", localSignUp.token, {
      secure: true,
    });
  }

  if (errors) {
    return { error: { message: "Đăng ký thất bại" }, errors };
  }
}

const AUTHED_USER_QUERY = gql`
  query AuthedUser {
    authedUser {
      left
      user {
        username
        id
        name
        bio
        email
        phone
        label
        createdAt
        subs {
          id
          verified
          protocol
          endpoint
        }
        avatars {
          id
        }
      }
    }
  }
`;

export async function getAuthedUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  try {
    const { data = {} } = await fetch(uri, {
      method: "POST",
      body: JSON.stringify({
        query: print(AUTHED_USER_QUERY),
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: token && `Bearer ${token.value}`,
      },
    }).then((res) => res.json());

    const { authedUser } = data;
    return authedUser;
  } catch (e) {
    return { error: { message: e.message } };
  }
}

export async function onSignOut() {
  const cookieStore = cookies();
  cookieStore.delete("token");
}
