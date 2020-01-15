import React from "react";
import { Header } from "../lib/components/Header";
import { ContentNavigator } from "../lib/components/ContentNavigator";
import { groupBy } from "lodash";

// @ts-ignore
import { frontMatter as docs } from "../pages/docs/**/*.mdx";

export default frontMatter => {
  return ({ children }) => {
    return (
      <main className="h-full font-sans">
        <Header />
        <div className="flex h-full">
          <ContentNavigator
            currentPage={frontMatter.href}
            entries={groupBy(docs, "section")}
            className="pt-8 border-r border-gray-200"
          />
          <article className="pt-6 pl-5">
            <h1>{frontMatter.title}</h1>
            <section className="text-justify">{children}</section>
          </article>
        </div>
      </main>
    );
  };
};
