export default frontMatter => {
  return ({ children: content }) => {
    return (
      <div>
        <span className="fixed bg-red-300">
          Please use layout to specify a layout for this file
        </span>
        <h1>{frontMatter.title}</h1>
        {content}
      </div>
    );
  };
};
