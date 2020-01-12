/**
 * TODO:  Implement lambda that pulls required files from GitHub at build time
 * This to think about:
 * 1. How to secure the api (signed jwts?)
 * 2. Use NOW_GITHUB_COMMIT_SHA to grab files from github (https://zeit.co/docs/v2/more/now-for-github#included-environment-variables)
 */
import { NowRequest, NowResponse } from "@now/node";

export default (req: NowRequest, res: NowResponse) => {
  console.log(process.env);
  res.status(501);
  res.send("not implemented");
};
