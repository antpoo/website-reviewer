document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let currentTab = tabs[0];
        if (currentTab && currentTab.url) {
            let url = new URL(currentTab.url);
            let mainUrl = `${url.protocol}//${url.hostname}${url.port ? ':' + url.port : ''}${url.pathname}${url.search}`;
            document.getElementById('url').textContent = mainUrl;
        }
    });
}); 
  