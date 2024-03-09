import { ChevronRightIcon } from "@heroicons/react/20/solid";
import unescape from "lodash/unescape";
import { SearchItem } from "./types";

export default function List(props: { results: SearchItem[] }) {
  const { results = [] } = props;
  return (
    <ul role="list" className="divide-y divide-white/5">
      {results.map((result) => (
        <li
          key={result.pageid}
          className="relative flex items-center space-x-4 py-4"
        >
          <div className="min-w-0 flex-auto">
            <div className="flex items-center gap-x-3">
              <h2 className="min-w-0 text-sm font-semibold leading-6 text-gray-800">
                <a href={"#"} className="flex gap-x-2">
                  <span className="truncate">{result.title}</span>
                </a>
              </h2>
            </div>
            <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
              <div
                dangerouslySetInnerHTML={{ __html: unescape(result.snippet) }}
              />
            </div>
          </div>
          <ChevronRightIcon
            className="h-5 w-5 flex-none text-gray-400"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}
