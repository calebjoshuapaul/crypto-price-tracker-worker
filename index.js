addEventListener("fetch", (event) => {
  return event.respondWith(handleRequest(event.request));
});

const API_ENDPOINT =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest ";

async function handleRequest(request) {
  const data = await fetch(API_ENDPOINT, {
    "X-CMC_PRO_API_KEY": `${API_KEY}`,
  })
    .then((response) => response.json())
    .then((data) => data);

  return new Response("[" + data + "]", {
    headers: {
      "content-type": "application/json",
    },
  });
}
