const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijg4ODFiMjM4LWMzYWYtNDJiZC04MjNkLWYwYjBkMmI2OGU2NSIsIm9yZ0lkIjoiNDU4MTA2IiwidXNlcklkIjoiNDcxMzEyIiwidHlwZUlkIjoiYmFjZWE3N2EtNWUwNy00MWExLWJmYjktNzI1Zjc0OTI2YWIyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTE5MjMyMjIsImV4cCI6NDkwNzY4MzIyMn0.qQ_wISeZk4rX405whAdRcYXE48I-Vo9spQ_LmIOmStU";

import Moralis from "moralis";

try {
  await Moralis.start({
    apiKey: apiKey,
  });

  const response = await Moralis.EvmApi.token.getTokenPrice({
    chain: "0x1",
    include: "percent_change",
    address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
  });

  console.log(response.raw);
} catch (e) {
  console.error(e);
}
