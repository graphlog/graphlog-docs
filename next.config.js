const path = require("path");
const fs = require("fs");
const processing = require("./processing");

const withMDX = require("next-mdx-enhanced")({
  defaultLayout: true,
  extendFrontMatter: {
    process: processing((_, frontMatter) => {
      const { __resourcePath, layout } = frontMatter;
      if (!layout) {
        const defaultLayout = __resourcePath.split("/")[0];
        if (
          fs.existsSync(
            path.join(process.cwd(), `layouts/${defaultLayout}.tsx`)
          )
        ) {
          return {
            layout: defaultLayout
          };
        }
      }
    }),
    phase: "both"
  }
});

module.exports = withMDX({
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
});
