module.exports = ({ __resourcePath }) => {
  let href =
    "/" +
    __resourcePath
      .split(".")
      .slice(0, -1)
      .join(".");

  if (href.endsWith("/index")) {
    href = href
      .split("/")
      .slice(0, -1)
      .join("/");
  }

  return {
    href
  };
};
