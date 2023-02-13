A collection of automation scripts for use with [Script Kit](https://www.scriptkit.com/).

With Script Kit installed, you can merge the this repo into `/Users/<username>/.kenv/`. 

Ensure that you have `KIT_MODE=ts` in your `.env`.

## Scripts:

Note: scripts that are not written by me will be credited appropriately.

| Name | Description | Environment Variables | Credit |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|-------------------------------------------------|
| `daily-note`         | Generates a new note, with the current date as the title and a predefined body. If this note as already been generated for the current day, it will be opened instead. I use this to track my day to day at work. These notes are stored in a folder called `Dailies`.                                                               |                                          |                                                 |
| `kill-port`         | Kills a specified open TCP port. Useful if you can't find the terminal instance running a local server.                                                                |                                          |                                                 |
| `unix-to-date`      | Converts a unix timestamp to human readable date format. Useful if you're in a database and want a quick on-the-fly conversion.                                                     |                                          |                                                 |
| `open-local-repo`   | Opens a selected local repository in VS Code.                                                                                                                                       |                                          | [Kent C. Dodds](https://twitter.com/kentcdodds) |
| `open-github-repo`  | Opens a selected GitHub repository in your browser.                                                                                                                                 | `GITHUB_ACCESS_TOKEN`                    | [Michael Lyon](https://twitter.com/__mlyon)     |
| `open-pull-request` | Opens a selected PR from a list of either owned PRs or ones where your review has been requested.                                                                                   | `GITHUB_ACCESS_TOKEN`, `GITHUB_USERNAME` | [Manan Josh](https://twitter.com/manan__joshi)  |
