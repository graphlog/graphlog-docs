export const ContentNavigator = ({ className = "", entries }) => {
  const { undefined: noSection, ...others } = entries;
  return (
    <nav className={"flex flex-col p-5 w-3/12 " + className}>
      {noSection.map(({ title }) => (
        <h5 className="uppercase">{title}</h5>
      ))}
      {Object.entries(others).map(([section, pages]) => (
        <>
          <h5 className="uppercase">{section}</h5>
          <ul>
            {(pages as any).map(({ title }) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </>
      ))}
    </nav>
  );
};
