import browser from "webextension-polyfill";

export const getCurrentTabUrl = () =>
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then((tabs) => tabs[0].url);
