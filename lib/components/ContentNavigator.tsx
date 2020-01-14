import Link from "next/link";

export const ContentNavigator = ({ className = "", entries }) => {
  const { undefined: noSection, ...others } = entries;
  return (
    <nav className={"flex flex-col p-5 w-3/12 " + className}>
      <h5 className="uppercase">
        <Link href={noSection[0].href}>
          <a>Home</a>
        </Link>
      </h5>
      {Object.entries(others).map(([section, pages]) => (
        <>
          <h5 className="uppercase">
            <Link href={pages[0].href}>
              <a>{section}</a>
            </Link>
          </h5>
          <ul>
            {(pages as any).map(({ title, href }) => (
              <li key={title}>
                <Link href={href}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ))}
    </nav>
  );
};
