/* @title: <<nodejs-graphql-client>> program written in Node.js.
 * @desc: A simple graphql client program with fetch module.
 * @author: Mustapha Benmbarek.
 * @Copyright © 2019 All rights reserved.
 * @version: 1.0.0
 */

import fetch from "node-fetch";

fetch("https://api.graphqlplaceholder.com/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify({ query: "{ users { name } }" })
})
  .then(response => response.json())
  .then(data => console.log("data returned:", JSON.stringify(data))
  );
