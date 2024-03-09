type EncodedHTML = string;

export interface SearchItem {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: EncodedHTML;
  timestamp: string;
}

export interface SearchResult {
  warnings: {
    main: {
      "*": string;
    };
  };
  batchcomplete: string;
  continue: {
    sroffset: number;
    continue: string;
  };
  query: {
    searchinfo: {
      totalhits: number;
    };
    search: SearchItem[];
  };
}
