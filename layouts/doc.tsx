import React from "react";
import { Header } from "../lib/components/Header";
import { ContentNavigator } from "../lib/components/ContentNavigator";

// @ts-ignore
import { frontMatter as docs } from "../pages/docs/**/*.mdx";

console.log(docs);

export default frontMatter => {
  return ({ children }) => {
    return (
      <main className="h-full font-sans">
        <Header />
        <div className="flex h-full">
          <ContentNavigator className="pt-8 border-r border-gray-200" />
          <article className="pt-6 pl-5">
            <h1>{frontMatter.title}</h1>
            <section className="text-justify">{children}</section>
          </article>
        </div>
      </main>
    );
  };
};
