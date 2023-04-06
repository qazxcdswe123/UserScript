// ==UserScript==
// @name        moodle_to_baidu
// @namespace   Violentmonkey Scripts
// @match       https://moodle.scnu.edu.cn/*
// @grant       none
// @version     1.0
// @author      yn
// @description Open SCNU question in baidu easylearn(百度教育)
// ==/UserScript==

function main() {

    "use strict";

    const question = document.querySelector(".qtext").innerText;
    console.log(question);
    const url = "https://easylearn.baidu.com/edu-page/tiangong/questionsearch?query="

    // create a button in info div
    const divToAppend = document.querySelector(".info");

    const button_to_baidu = document.createElement("button");
    button_to_baidu.innerText = "Search";
    button_to_baidu.style = "btn btn-link";
    button_to_baidu.onclick = function () {
        window.open(url + question);
    }

    const button_to_chatgpt = document.createElement("button");
    button_to_chatgpt.innerText = "Chat";
    button_to_chatgpt.style = "btn btn-link";
    button_to_chatgpt.onclick = function () {
        window.open("https://chat.openai.com/");
    }

    divToAppend.appendChild(button_to_baidu);
    divToAppend.appendChild(button_to_chatgpt);
}

// if url match mod/quiz/attempt.php? , IIFE main
if (window.location.href.match(/mod\/quiz\/attempt.php\?/)) {
    main();
}