import { Menu, Sidebar } from "semantic-ui-react";
import { UnstyledLink } from "./UnstyledLink";
import styles from "./ContentNavigator.module.css";

const highlight = (currentPage, href: string) =>
  currentPage == href ? "bg-indigo-500 text-white rounded" : "";

export const ContentNavigator = ({ currentPage, className = "", entries }) => {
  const { undefined: noSection, ...others } = entries;
  return (
    <Sidebar
      as={Menu}
      visible
      vertical
      borderless
      style={{ borderTop: 0, boxShadow: "none" }}
    >
      <Menu.Item>
        <Menu.Header as="h4">
          <UnstyledLink href={noSection[0].href}>Home</UnstyledLink>
        </Menu.Header>
      </Menu.Item>

      {Object.entries(others).map(([section, pages]) => (
        <Menu.Item>
          <Menu.Header>
            <UnstyledLink href={pages[0].href}>{section}</UnstyledLink>
          </Menu.Header>
          <Menu.Menu>
            {(pages as any).map(({ title, href }) => {
              const isActive = currentPage === href;
              return (
                <Menu.Item
                  active={isActive}
                  className={`${styles.item} ${
                    isActive ? styles.activeItem : ""
                  }`}
                >
                  <UnstyledLink href={href}>{title}</UnstyledLink>
                </Menu.Item>
              );
            })}
          </Menu.Menu>
        </Menu.Item>
      ))}
    </Sidebar>
  );
};
