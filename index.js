addEventListener("fetch", (event) => {
  return event.respondWith(handleRequest(event.request));
});

const API_ENDPOINT =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest ";

async function handleRequest(request) {
  const data = fetch(API_ENDPOINT, {
    "X-CMC_PRO_API_KEY": `2243abfd-1d98-4e16-adb2-1e32fa1dab1d`,
  })
    .then((response) => response.json())
    .then((data) => data);

  console.log(JSON.stringify(data));
}
