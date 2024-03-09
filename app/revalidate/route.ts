import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const { ids } = await request.json();
  for (const id of ids) {
    revalidateTag(id);
  }
  return Response.json({ message: `revalidateTag: ${ids}` });
}
