addEventListener("fetch", (event) => {
  return event.respondWith(handleRequest(event.request));
});

const API_ENDPOINT =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

async function handleRequest(request) {
  const data = await fetch(`${API_ENDPOINT}?limit=15`, {
    "X-CMC_PRO_API_KEY": `${API_KEY}`,
  })
    .then((response) => response.json())
    .then((data) => data);

  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  });
}
