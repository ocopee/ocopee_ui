import { Fragment } from "react";
import { Sidebar } from "./Sidebar";

export function OcopJSLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <div className="flex max-w-screen-lg mx-auto px-2 pb-8">
        <Sidebar />
        {children}
      </div>
    </Fragment>
  );
}
