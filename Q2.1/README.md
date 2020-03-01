p1
==

This repository contains code for 14828/18636 Browser Security homework 2 question 2. Including a chrome extension *URL listener* and a server.

## The extension

The extension would listen for url changes in tabs and send changed urls to a server (hard coded as [localhost:3001](http://localhost:3001/)). 

### How to install

Open Chrome or Chromium, navigate to extension tab, hit `load unpack` and upload the `extension/` folder. 

## The server

The server is written with `Node.js` with only one `index.js` file. It would listen to incoming request, extract url in the request, and append to a `history.txt` file (each url is separated with comma).


### How to run

From the `server/` folder, run the following command to install dependencies

    npm install express
    npm install body-parser

Upon sucessful installation, run the following command to set up the server (listening on port 3001)

    node index.js

## How to test

After the above steps, open browser and simulate the user activities by browsing different web pages.

All urls would be recorded in `history.txt` inside the server folder.



---

Written by: Yingqiao Zheng

Andrew ID: yingqiaz