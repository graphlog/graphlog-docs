/**
 * This service exists for local development. It lists
 * files in directories in the `/pages` directory which
 * is needed to build navigation
 */

const { send } = require("micro");
const path = require("path");
const fs = require("fs");

const listFiles = filePath =>
  new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });

module.exports = (req, res) => {
  if (!req.url.startsWith("/pages")) {
    return send(res, 401);
  }
  const filePath = path.join(process.cwd(), req.url);
  return listFiles(filePath)
    .then(files => send(res, 200, files))
    .catch(() => send(res, 404));
};
