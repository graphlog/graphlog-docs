import React from "react";
import { Header, Sidebar, Segment, Container } from "semantic-ui-react";
import { NavBar } from "../lib/components/NavBar";
import { ContentNavigator } from "../lib/components/ContentNavigator";
import { groupBy } from "lodash";

// @ts-ignore
import { frontMatter as docs } from "../pages/docs/**/*.mdx";

export default frontMatter => {
  return ({ children }) => {
    return (
      <main className="h-full font-sans">
        <NavBar />
        <Sidebar.Pushable as={Segment} basic style={{ margin: 0 }}>
          <ContentNavigator
            currentPage={frontMatter.href}
            entries={groupBy(docs, "section")}
          />
          <Sidebar.Pusher>
            <Segment basic as="article">
              <Header as="h1">{frontMatter.title}</Header>
              <section className="text-justify">{children}</section>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </main>
    );
  };
};
