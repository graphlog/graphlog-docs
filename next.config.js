const withMDX = require("next-mdx-enhanced")({
  defaultLayout: true
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
