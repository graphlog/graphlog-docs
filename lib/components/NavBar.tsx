import { Menu, Input, Icon } from "semantic-ui-react";

export const NavBar = () => (
  <Menu style={{ margin: 0 }}>
    <Menu.Menu>
      <Menu.Item header>📊 GraphLog</Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item>
        <Input placeholder="search the docs" />
      </Menu.Item>
      <Menu.Item
        link
        href="https://github.com/graphlog/graphlog"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon name="github" size="big" style={{ margin: 0 }} />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);
