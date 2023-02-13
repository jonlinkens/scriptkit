// Name: Unix to Date
// Description: Converts a Unix timestamp to a human readable date
// Author: Jon Linkens

import "@johnlindquist/kit";
import { styledOutput } from "../utils";

const timestamp = await arg("Enter unix timestamp");

const readableDate = new Date(+timestamp * 1000);

try {
  await styledOutput(`🤖 ${timestamp} is ${readableDate}`);
} catch (error) {
  console.error(error);
}
