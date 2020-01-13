const { startCase } = require("lodash");

module.exports = ({ __resourcePath, title }) => {
  if (!__resourcePath.startsWith("docs/")) {
    return {};
  }
  let newPath = __resourcePath.slice("docs/".length);
  newPath = newPath.split("/");

  let section = {};
  let file = "";
  if (newPath.length > 2) {
    throw new Error("Only one directory sublevel supported in docs");
  } else if (newPath.length === 1) {
    file = newPath[0];
  } else {
    section = { section: startCase(newPath[0]) };
    file = newPath[1];
  }
  return {
    title: startCase(
      title ||
        file
          .split(".")
          .slice(0, -1)
          .join(".")
    ),
    ...section
  };
};
