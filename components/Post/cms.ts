const uri =
  process.env.NODE_ENV === "production"
    ? "https://cms.ocopee.com"
    : "http://localhost:3016";

export async function revalidatePost(post: any) {
  return fetch("/revalidate", {
    method: "POST",
    body: JSON.stringify({ ids: [post._id, "bai"] }),
  }).then((data) => data.json());
}

export async function updatePost(id: string, body: any) {
  return fetch(uri + "/post/" + id, {
    method: "PUT",
    body: JSON.stringify(body),
  }).then((data) => data.json());
}

export async function createPost(body: any) {
  return fetch(uri + "/post/", {
    method: "POST",
    body: JSON.stringify(body),
  }).then((data) => data.json());
}
