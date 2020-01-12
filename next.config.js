const { lowerCase } = require("lodash");
const path = require("path");

const withMDX = require("next-mdx-enhanced")({
  defaultLayout: true,
  extendFrontMatter: {
    process: (_, { __resourcePath, ...otherMatters }) => {
      if (__resourcePath.startsWith("docs/")) {
        let newPath = __resourcePath.slice("docs/".length);
        newPath = newPath.split("/");

        let section = {};
        let file = "";
        if (newPath.length > 2) {
          console.log("uh oh!");
          throw new Error("Only one directory sublevel supported in docs");
        } else if (newPath.length === 1) {
          file = newPath[0];
        } else {
          section = { section: lowerCase(newPath[0]) };
          file = newPath[1];
        }
        let out = {
          title: lowerCase(path.parse(file).name),
          ...section,
          ...otherMatters,
          __resourcePath
        };
        console.log("OUT", out);
        return out;
      }
      return;
    },
    phase: "prebuild"
  }
});
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withMDX({
    env: {
      FILE_API:
        process.env.NODE_ENV === "production"
          ? "https://docs.graphlog.com/api/list-files"
          : "http://localhost:3001"
    },
    webpack: function(config) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: "preact/compat",
        react$: "preact/compat",
        "react-dom": "preact/compat",
        "react-dom$": "preact/compat"
      };

      return config;
    }
  })
);
