function getElems() {
  return {
    "head": document.getElementsByTagName("head")[0],
    "link": document.querySelector("link[rel*='icon']") || document.createElement("link")
  }
}

function setHero(elems) {
  var linkElm = elems.link;
  linkElm.type = 'image/x-icon';
  linkElm.rel = 'shortcut icon';
  linkElm.href = chrome.runtime.getURL('/img/logo_large.ico');

  elems.head.appendChild(linkElm);
}

function applyExtension() {
  chrome.storage.sync.get(
    {
      toggleActiveHos: false
    },
    function (settings) {
      if (settings.toggleActiveHos) {
        setHero(getElems());
      }
    }
  );
}
chrome.storage.onChanged.addListener(applyExtension);
applyExtension();
