const docsNav = require("./docs-nav");
const href = require("./href");

module.exports = process => (content, frontMatter) => ({
  ...process(content, frontMatter),
  ...docsNav(frontMatter),
  ...href(frontMatter)
});
