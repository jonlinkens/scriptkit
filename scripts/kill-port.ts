// Name: Kill port
// Description: Kills a specified TCP port that is currently running
// Author: Jon Linkens

import "@johnlindquist/kit";
import { styledOutput } from "../utils";

const port = await arg("Enter port to kill");

try {
  await $`lsof -t -i tcp:${port} | xargs kill`;
  await styledOutput(`🤖 Listening on port ${port} has been killed.`);
} catch (error) {
  console.error(error);
  await styledOutput(`🛰️ Nothing listening on port ${port}`);
}
