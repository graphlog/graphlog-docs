export const ContentNavigator = ({ className = "" }) => (
  <nav className={"flex flex-col p-5 w-3/12 " + className}>
    <h5 className="uppercase">Getting Started</h5>
    <ul>
      <li>Installation</li>
      <li>Release Notes</li>
    </ul>
  </nav>
);
