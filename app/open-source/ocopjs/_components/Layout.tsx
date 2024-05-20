import { Fragment } from "react";
import { Sidebar } from "./Sidebar";

export function OcopJSLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <div className="flex max-w-screen-lg mx-auto">
        <Sidebar />
        {children}
      </div>
    </Fragment>
  );
}
