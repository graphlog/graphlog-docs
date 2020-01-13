const docsNav = require("./docs-nav");

module.exports = process => (content, frontMatter) => ({
  ...process(content, frontMatter),
  ...docsNav(frontMatter)
});
