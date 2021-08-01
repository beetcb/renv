import { EOL } from "https://deno.land/std@0.103.0/fs/mod.ts";

addEventListener("fetch", (event: FetchEvent) => {
  const { PASS, UNIDOC_LICENSE_API_KEY, APP_KEY, SIGN, WORKSHEET_ID } =
    Deno.env.toObject();
  const url = new URL(event.request.url);
  const pass = url.searchParams.get("pass");
  const dotEnv = {
    UNIDOC_LICENSE_API_KEY,
    APP_KEY,
    SIGN,
    WORKSHEET_ID,
  };
  if (pass === PASS) {
    const response = new Response(
      Object.entries(dotEnv)
        .map(([k, v]: [string, string]) => `${k}=${v}`)
        .join(EOL.CRLF),
      {
        headers: { "content-type": "text/plain" },
      }
    );
    event.respondWith(response);
  } else {
    event.respondWith(
      new Response(null, {
        status: 500,
      })
    );
  }
});
