// ==UserScript==
// @name         Tweet link sharer
// @namespace    http://tampermonkey.net/
// @version      2024-12-02
// @description  Userscript to generate links to share a tweet from Twitter
// @author       Evan
// @match        https://x.com/*
// @match        https://twitter.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

        const copyButton = document.createElement('button');
        let buttonText = "Copy tweet link!";

        // button styles
        copyButton.textContent = buttonText;
        copyButton.style.position = 'fixed';
        copyButton.style.top = '10px';
        copyButton.style.right = '10px';
        copyButton.style.width = '150px';
        copyButton.style.height = '50px';
        copyButton.style.color = '#FFF';
        copyButton.style.border = 'none';
        copyButton.style.backgroundColor = '#1D9BF0';
        copyButton.style.cursor = 'pointer';
        copyButton.style.textAlign = 'center';
        copyButton.style.borderRadius = '9999px';
        copyButton.style.transition = 'background-color 0.2s ease-in-out';
        copyButton.style.fontFamily = '"TwitterChirp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

        // hover effects
        copyButton.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#1A8CD8";
        });

        copyButton.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#1D9BF0";
        });

        // copy tweet id
        copyButton.addEventListener('click', () => {
            let tweetId = window.location.href.split('/')[5];
            let link = 'https://twitter.com/i/status/' + tweetId;
            if (tweetId == null) {
                copyButton.textContent = 'Your not viewing a tweet, silly!';
                setTimeout(() => {
                    copyButton.textContent = buttonText;
                }, 2000);
            } else {
                navigator.clipboard.writeText(link);
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = buttonText;
                }, 2000);
            }
        });

      // function to add it to the page
       function processTweetPage() {
           document.body.appendChild(copyButton);
       }

      processTweetPage();

})();