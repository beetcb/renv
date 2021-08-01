// TODO: find type defination for event Object
addEventListener("fetch", (event: any) => {
  const { PASS, LICENSE } = Deno.env.toObject();
  const url = new URL(event.request.url);
  const pass = url.searchParams.get("pass");
  if (pass === PASS) {
    const response = new Response(LICENSE, {
      headers: { "content-type": "text/plain" },
    });
    event.respondWith(response);
  } else {
    event.respondWith(
      new Response(null, {
        status: 500,
      })
    );
  }
});
