var toggle = false;

chrome.browserAction.onClicked.addListener(function (tab) {
  toggle = !toggle;

  if (toggle){
    chrome.browserAction.setIcon({path: "img/icon_on.png"});
    chrome.storage.sync.set(
      {
        'toggleActiveHos': true
      },
      function () {}
    );
  } else {
    chrome.browserAction.setIcon({path: "img/icon_off.png"});
    chrome.storage.sync.set(
      {
        'toggleActiveHos': false
      },
      function () {}
    );
  }
});
