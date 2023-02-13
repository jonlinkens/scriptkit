// Name: Open Pull Request
// Author: Manan Joshi
// Twitter: @manan__joshi

import "@johnlindquist/kit";
import { Choice } from "@johnlindquist/kit";

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

const myRequests = async () =>
  await fetch(GITHUB_GRAPHQL_ENDPOINT, {
    headers: { Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}` },
    method: "POST",
    body: JSON.stringify({
      query: `
        query {
          viewer {
            pullRequests(
              first: 100
              orderBy: { field: CREATED_AT, direction: DESC }
              states: OPEN
            ) {
              nodes {
                author {
                  login
                  avatarUrl
                }
                url
                title
                body
                repository {
                  nameWithOwner
                }
              }
            }
          }
        }
      `,
    }),
  });

const reviewRequests = async () =>
  await fetch(GITHUB_GRAPHQL_ENDPOINT, {
    headers: { Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}` },
    method: "POST",
    body: JSON.stringify({
      query: `
        query {
          search(
            query: "is:pr is:open review-requested:${process.env.GITHUB_USERNAME}"
            type: ISSUE
            first: 100
          ) {
            nodes {
              ... on PullRequest {
                title
                url
                body
                author {
                  login
                  avatarUrl
                }
                repository {
                  nameWithOwner
                }
              }
            }
          }
        }
      `,
    }),
  });

["Mine", "Requested"].forEach((type) => {
  onTab(type, async () => {
    const pullRequestUrl = await arg("Select a Pull Request", async () => {
      let requests = [];

      if (type === "Mine") {
        const data = await myRequests();
        requests = (await data.json()).data.viewer.pullRequests.nodes;
      } else {
        const data = await reviewRequests();
        requests = (await data.json()).data.search.nodes;
      }

      return requests.map(
        (request) =>
          ({
            name: request.title,
            description: `${request.repository.nameWithOwner} | ${request.author.login}`,
            value: request.url,
            icon: request.author.avatarUrl,
            preview: md(`# ${request.title}`).concat(md(request.body)),
          } as Choice<string>)
      );
    });

    exec(`open ${pullRequestUrl}`);
  });
});
