import React from "react";
import Link from "next/link";
// @ts-ignore
import { frontMatter } from "./blog/*.mdx";

export default () => (
  <main className="sm:m-auto mx-3 max-w-xl">
    <h1>Blog posts</h1>
    <ul className="ml-0">
      {frontMatter.map(page => (
        <li key={page.title}>
          <Link href={page.href}>
            <a>{page.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </main>
);
