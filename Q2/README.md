Privacy Destroying Extension - The Basics
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

**Before testing, the `history.txt` and `platform.txt` file should be deleted, as the code would only append to it.**

**You will also need to CLOSE YOUR BROWSER and REOPEN it in order to record the platform information.**

After the above steps, open browser and simulate the user activities by browsing different web pages.

All urls would be recorded in `history.txt` inside the server folder.

Sample output:

```
https://developer.chrome.com/extensions,chrome://newtab/,https://www.google.com/search?q=facebook&oq=face&aqs=chrome.0.0j69i57j69i59j0l5.1540j0j7&sourceid=chrome&ie=UTF-8,https://www.facebook.com/,chrome://newtab/,https://www.fotor.com/,https://www.fotor.com/app.html#/editor,
```

**This is for Q2.2**

Additional user agent information is stored in `platform.txt` inside the server folder. 

```
Playform Info: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36s
```

---

Written by: Yingqiao Zheng

Andrew ID: yingqiaz