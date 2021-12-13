addEventListener("fetch", (event) => {
  return event.respondWith(handleRequest(event.request));
});

const API_ENDPOINT =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

async function handleRequest(request) {
  const fetchedData = await fetch(
    `${API_ENDPOINT}?limit=15&convert=INR&sort=market_cap`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": `${API_KEY}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);

  const cryptoList = fetchedData.data;
  const result = cryptoList.map(function (crypto) {
    return {
      name: crypto.name,
      symbol: crypto.symbol,
      price: crypto.quote.INR.price,
    };
  });

  return new Response(JSON.stringify(result), {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Vary: "Origin",
    },
  });
}
