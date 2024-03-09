import { Fragment } from "react";
import { SearchResult } from "./_components/types";
import List from "./_components/List";
import { useSearchParams } from "next/navigation";
/**
 * https://www.mediawiki.org/wiki/API:Opensearch
 */
export default async function Page({
  searchParams: { search },
}: {
  searchParams: { search: string };
}) {
  const urlSearchParams = new URLSearchParams({
    action: "query",
    list: "search",
    srsearch: search,
    limit: "5",
    namespace: "0",
    format: "json",
    origin: "*",
  });

  const url =
    "https://vi.wikipedia.org/w/api.php?" + urlSearchParams.toString();
  const response = await fetch(url);
  const text = await response.text();
  let json: SearchResult | null = null;
  try {
    json = JSON.parse(text);
  } catch (error) {
    console.error(error);
  }
  return (
    <Fragment>
      <section className="my-6 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <form>
          <label
            htmlFor="search"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            wikipedia ({search})
          </label>
          <div className="relative mt-2 flex items-center">
            <input
              type="search"
              name="search"
              id="search"
              className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                ⌘K
              </kbd>
            </div>
          </div>
        </form>
      </section>
      <section className="my-6 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <List results={json?.query?.search} />
      </section>
    </Fragment>
  );
}
