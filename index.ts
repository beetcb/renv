import { EOL } from "https://deno.land/std@0.103.0/fs/mod.ts";

addEventListener("fetch", (event: FetchEvent) => {
  const envObject = Deno.env.toObject();

  const { ENV_PASS } = envObject;

  const url = new URL(event.request.url);
  const pass = url.searchParams.get("pass");
  const { pathname } = url;

  const dotEnv = Object.fromEntries(
    Object.keys(envObject).filter((k) => pathname.startsWith(`/${k}`)).map(
      (k) => [k, envObject[k]],
    ),
  );

  if (pass === ENV_PASS) {
    const response = new Response(
      Object.entries(dotEnv)
        .map(([k, v]: [string, string]) => `${k}=${v}`)
        .join(EOL.CRLF),
      {
        headers: { "content-type": "text/plain" },
      },
    );
    event.respondWith(response);
  } else {
    event.respondWith(
      new Response(null, {
        status: 500,
      }),
    );
  }
});
