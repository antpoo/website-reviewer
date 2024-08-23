document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let currentTab = tabs[0];
        if (currentTab && currentTab.url) {
            let url = new URL(currentTab.url);
            let mainUrl = `${url.protocol}//${url.hostname}${url.port ? ":" + url.port : ""}${url.pathname}${url.search}`;
            document.getElementById("main_url").textContent = mainUrl;
            document.getElementById("main_url").href = mainUrl;
        }
    });

    document.getElementById("copy_button").addEventListener("click", function() {
        const url = document.getElementById("main_url").href;
    
        navigator.clipboard.writeText(url).then(function() {
            document.getElementById("copy_notif").textContent = "URL copied to clipboard";
        }).catch(function(err) {
            document.getElementById("copy_notif").textContent = "Failed to copy: " + err;
        });
    });

    document.getElementById("rev_here").addEventListener("click", function() {
        document.getElementById("home").style.display = "none";
        document.getElementById("review").style.display = "block";
    });

    document.getElementById("return_home").addEventListener("click", function() {
        document.getElementById("home").style.display = "block";
        document.getElementById("review").style.display = "none";
    });
});


  