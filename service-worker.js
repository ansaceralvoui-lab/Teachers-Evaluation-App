self.addEventListener("install", function (event) {
    console.log("Teachers Evaluation Installed");
});

self.addEventListener("fetch", function (event) {
    event.respondWith(fetch(event.request));
});
