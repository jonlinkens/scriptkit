A collection of automation scripts for use with [Script Kit](https://www.scriptkit.com/).

With Script Kit installed, you can merge the this repo into `/Users/<username>/.kenv/`.

## Scripts:

Note: scripts that are not written by me will be credited appropriately.

- `daily-note` - Generates/opens a new note, with the current date as the title and a predefined body. I use this to track my day to day at work. These notes are stored in a folder called `Dailies`.

- `kill-port` - Kills an open TCP port defined by user input. Useful if you can't find the terminal instance running a local server.

- `unix-to-date` - Converts a unix timestamp to human readable date format. Useful if you're in a database and want a quick on-the-fly conversion.

- `open-github-repo` - Opens a selected GitHub repository in your browser. Requires `GITHUB_ACCESS_TOKEN` in your `.env`.

- `open-local-repo` - Opens a selected local repository in VS Code. Credit to [Kent C. Dodds](https://twitter.com/kentcdodds).

- `open-pull-request` - Opens a selected PR from a list of either owned PRs or ones where your review has been requested. Requires `GITHUB_ACCESS_TOKEN` and `GITHUB_USERNAME` in your `.env`. Credit to [Manan Joshi](https://twitter.com/manan__joshi).
